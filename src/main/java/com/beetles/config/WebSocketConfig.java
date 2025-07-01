package com.beetles.config;

import com.beetles.ws.MyWebSocketHandler;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.server.ServerHttpRequest;
import org.springframework.http.server.ServerHttpResponse;
import org.springframework.http.server.ServletServerHttpRequest;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;
import org.springframework.web.socket.server.HandshakeInterceptor;

import java.util.Map;
import java.util.UUID;

@Configuration
@EnableWebSocket
public class WebSocketConfig implements WebSocketConfigurer {

    @Override
    public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
        registry.addHandler(new MyWebSocketHandler(), "/ws/server")
                .setAllowedOrigins("*")
                .addInterceptors(new MyWebSocketInterceptor());
    }

    /**
     * 自定义拦截器拦截WebSocket请求
     */
    class MyWebSocketInterceptor implements HandshakeInterceptor {
        // 前置拦截用来提取用户名并绑定到会话属性
        @Override
        public boolean beforeHandshake(ServerHttpRequest request, ServerHttpResponse response,
                                       WebSocketHandler wsHandler, Map<String, Object> attributes) throws Exception {
            System.out.println("前置拦截~~ 正在提取用户名");

            if (!(request instanceof ServletServerHttpRequest)) {
                // 非Servlet请求，设置默认用户名
                attributes.put("userName", "匿名用户_" + generateRandomId());
                return true;
            }

            ServletServerHttpRequest servletRequest = (ServletServerHttpRequest) request;

            // 1. 从URL查询参数中获取用户名
            String userName = servletRequest.getServletRequest().getParameter("username");

            // 2. 如果查询参数中没有，从HTTP Session中获取（如已登录用户）
            if (userName == null || userName.trim().isEmpty()) {
                userName = (String) servletRequest.getServletRequest().getSession().getAttribute("userName");
            }

            // 3. 如果Session中也没有，使用默认值（带随机ID避免重复）
            if (userName == null || userName.trim().isEmpty()) {
                userName = "访客_" + generateRandomId();
            }

            // 清理用户名（去除前后空格，限制长度）
            userName = userName.trim();
            if (userName.length() > 30) {
                userName = userName.substring(0, 30);
            }

            // 将用户名存入会话属性
            attributes.put("userName", userName);
            System.out.println("提取到用户名: " + userName);

            return true;
        }

        @Override
        public void afterHandshake(ServerHttpRequest request, ServerHttpResponse response,
                                   WebSocketHandler wsHandler, Exception exception) {
            System.out.println("后置拦截~~");
            if (exception != null) {
                System.err.println("WebSocket握手异常: " + exception.getMessage());
            }
        }

        // 生成随机ID的辅助方法
        private String generateRandomId() {
            return UUID.randomUUID().toString().substring(0, 8);
        }
    }
}