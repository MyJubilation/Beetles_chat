package com.beetles.config;

import org.springframework.stereotype.Component;
import jakarta.websocket.*;
import jakarta.websocket.server.ServerEndpoint;
import java.io.IOException;
import java.util.concurrent.CopyOnWriteArraySet;
/**
 * @ServerEndpoint 该注解可以将类定义成一个WebSocket服务器端，
 * @OnOpen 表示有浏览器链接过来的时候被调用
 * @OnClose 表示浏览器发出关闭请求的时候被调用
 * @OnMessage 表示浏览器发消息的时候被调用
 * @OnError 表示报错了
 */
@ServerEndpoint("/ws/serverOne")
@Component
public class WebSocketServer {
    //concurrent包下线程安全的Set
    private static final CopyOnWriteArraySet<WebSocketServer> SESSIONS = new CopyOnWriteArraySet<>();
    private Session session;
    @OnOpen
    public void onOpen(Session session) {
        this.session = session;
        SESSIONS.add(this);
        System.out.println(String.format("成功建立连接~ 当前总连接数为:%s", SESSIONS.size()));
        System.out.println(this);
    }
    @OnClose
    public void onClose() {
        SESSIONS.remove(this);
        System.out.println(String.format("成功关闭连接~ 当前总连接数为:%s", SESSIONS.size()));
    }
    @OnMessage
    public void onMessage(String message, Session session) {
        System.out.println("接收session：" + session);
        System.out.println("接收信息：" + message);

        // 构建包含session信息的响应
        String sessionInfo = String.format(
                "Session ID: %s\n" +
                        "Protocol: %s\n" +
                        "Max Text Message Buffer Size: %d\n" +
                        "Open: %b",
                session.getId(),
                session.getProtocolVersion(),
                session.getMaxTextMessageBufferSize(),
                session.isOpen()
        );

        // 发送包含session信息的响应
        try {
            session.getBasicRemote().sendText("收到消息: " + message + "\n\nSession信息:\n" + sessionInfo);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    @OnError
    public void onError(Session session, Throwable error) {
        System.out.println("发生错误");
        error.printStackTrace();
    }
    /**
     * 指定发消息
     *
     * @param message
     */
    public void sendMessage(String message) {
        try {
            this.session.getBasicRemote().sendText(message);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    /**
     * 群发消息
     *
     * @param message
     */
    public static void fanoutMessage(String message) {
        SESSIONS.forEach(ws -> ws.sendMessage(message));
    }
}