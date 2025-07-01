package com.beetles.controller;

import com.beetles.DTO.Result;
import com.beetles.service.ChatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class ChatController {

    @Autowired
    private ChatService chatService;

    @RequestMapping("/testWS")
    public String testWS() {
        return "testWS";
    }

    @RequestMapping("/getFriendList")
    public Result<?> getFriendList(@RequestParam("userId") String userId) {

        List<Map<String, String>> list =chatService.getFriendList(userId);
        /**
         * 返回结果：
         * [{nick_name=测试01, id=4}, {nick_name=测试02, id=5}, {nick_name=测试03, id=6}, {nick_name=测试04, id=7}, {nick_name=测试05, id=8}, {nick_name=测试06, id=9}]
         */
        return new Result<>().success(200, "获取好友列表成功").put(list);
    }

    /**
     * 获取聊天记录
     * @return
     */
    @RequestMapping("/getChatHistory")
    public Result<?> getChatHistory(@RequestParam("userId") String userId,
                                    @RequestParam("friendId") String friendId) {
        List<Map<String, String>> list = chatService.getChatHistory(userId,friendId);
        return new Result<>().success(200, "获取聊天记录成功").put(list);
    }

    /**
     * 发送聊天消息
     */
    @RequestMapping("/sendChatMessage")
    public Result<?> sendChatMessage(@RequestParam("userId") String userId,
                                     @RequestParam("friendId") String friendId,
                                     @RequestParam("chatMessage") String chatMessage){
        int result = chatService.sendChatMessage(userId,friendId,chatMessage);
        if (result == 0) {
            return new Result<>().error( "发送聊天消息失败");
        }else{
            return new Result<>().success(200, "发送聊天消息成功");
        }
    }

    /**
     * 获取用户信息
     */
    @RequestMapping("/getUserInfo")
    public Result<?> getUserInfo(@RequestParam("userName") String userName){
        Map<String, String> map = new HashMap<>();
        map = chatService.getUserInfo(userName);
        if(map == null){
            return new Result<>().error( "获取用户信息失败");
        }else{
            return new Result<>().success(200, "获取用户信息成功").put(map);
        }
    }
}
