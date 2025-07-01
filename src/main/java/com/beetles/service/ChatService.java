package com.beetles.service;

import java.util.List;
import java.util.Map;

public interface ChatService {
    List<Map<String, String>> getFriendList(String userId);

    List<Map<String, String>> getChatHistory(String userId, String friendId);

    int sendChatMessage(String userId, String friendId, String chatMessage);

    Map<String, String> getUserInfo(String userName);
}
