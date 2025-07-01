package com.beetles.service.impl;

import com.beetles.mapper.ChatMapper;
import com.beetles.service.ChatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class ChatServiceImpl implements ChatService {

    @Autowired
    private ChatMapper chatMapper;

    @Override
    public List<Map<String, String>> getFriendList(String userId) {
        return chatMapper.getFriendList(userId);
    }

    @Override
    public List<Map<String, String>> getChatHistory(String userId, String friendId) {
        return chatMapper.getChatHistory(userId, friendId);
    }

    @Override
    public int sendChatMessage(String userId, String friendId, String chatMessage) {
        return chatMapper.sendChatMessage(userId, friendId, chatMessage);
    }

    @Override
    public Map<String, String> getUserInfo(String userName) {
        return chatMapper.getUserInfo(userName);
    }
}
