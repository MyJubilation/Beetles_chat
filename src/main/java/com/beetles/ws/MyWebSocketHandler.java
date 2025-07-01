package com.beetles.ws;

import org.springframework.web.socket.*;
import java.io.IOException;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

public class MyWebSocketHandler implements WebSocketHandler {
    private static final Map<String, WebSocketSession> SESSIONS = new ConcurrentHashMap<>();

    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        String userName = session.getAttributes().get("userName").toString();
        SESSIONS.put(userName, session);
        System.out.println(String.format("成功建立连接~ userName: %s", userName));

        // 连接建立后可以发送欢迎消息
        session.sendMessage(new TextMessage("欢迎 " + userName + " 加入!"));
    }

    @Override
    public void handleMessage(WebSocketSession session, WebSocketMessage<?> message) throws Exception {
        String userName = session.getAttributes().get("userName").toString();
        String msg = message.getPayload().toString();
        System.out.println("用户 " + userName + " 发送信息：" + msg);

        // 将消息返回给发送者
//        String response = "服务器收到了你的消息: " + msg;
//        session.sendMessage(new TextMessage(response));

        // 可选：广播消息给所有连接的客户端
         fanoutMessage(userName + " : " + msg);
    }

    @Override
    public void handleTransportError(WebSocketSession session, Throwable exception) throws Exception {
        System.out.println("连接出错");
        if (session.isOpen()) {
            session.close();
        }
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus closeStatus) throws Exception {
        String userName = session.getAttributes().get("userName").toString();
        SESSIONS.remove(userName);
        System.out.println("用户 " + userName + " 连接已关闭, status: " + closeStatus);

        // 可选：通知其他用户
         fanoutMessage(userName + " 离开了聊天室......");
    }

    @Override
    public boolean supportsPartialMessages() {
        return false;
    }

    /**
     * 向指定用户发送消息
     */
    public static void sendMessage(String userName, String message) {
        WebSocketSession webSocketSession = SESSIONS.get(userName);
        if (webSocketSession == null || !webSocketSession.isOpen()) return;
        try {
            webSocketSession.sendMessage(new TextMessage(message));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    /**
     * 向所有连接的用户群发消息
     */
    public static void fanoutMessage(String message) {
        SESSIONS.forEach((userName, session) -> {
            if (session.isOpen()) {
                try {
                    session.sendMessage(new TextMessage(message));
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        });
    }
}
