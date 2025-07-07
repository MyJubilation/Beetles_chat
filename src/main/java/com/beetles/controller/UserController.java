package com.beetles.controller;

import com.beetles.DTO.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired
    private com.beetles.service.UserService userService;

    /**
     * 获取好友通知列表
     * @return
     */
    @RequestMapping("/selectAcceptFriendsList")
    public Result<?> selectAcceptFriendsList(@RequestParam("id") int id) {
        return userService.selectAcceptFriendsList(id);
    }

    /**
     * 获取好友申请历史信息列表
     */
    @RequestMapping("/selectAddFriendsHistoryList")
    public Result<?> selectAddFriendsHistoryList(@RequestParam("id") int id) {
        return userService.selectAddFriendsHistoryList(id);
    }

    /**
     * 获取好友信息
     */
    @RequestMapping("/selectFriendByNickName")
    public Result<?> selectFriendByNickName(@RequestParam("nickName") String nickName,
                                            @RequestParam("userId") int userId) {
        return userService.selectFriendByNickName(nickName,userId);
    }
    @RequestMapping("/selectFriendByUserName")
    public Result<?> selectFriendByUserName(@RequestParam("userName") String userName,
                                            @RequestParam("userId") int userId) {
        return userService.selectFriendByUserName(userName,userId);
    }
    @RequestMapping("/selectFriendById")
    public Result<?> selectFriendById(@RequestParam("id") int id,
                                      @RequestParam("userId") int userId) {
        return userService.selectFriendById(id,userId);
    }

    /**
     * 添加好友申请
     */
    @RequestMapping("/addFriendRequest")
    public Result<?> addFriendRequest(@RequestParam("userId") int userId, @RequestParam("friendId") int friendId) {
        return userService.addFriendRequest(userId, friendId);
    }

    /**
     * 处理好友通知
     */
    @RequestMapping("/resolveFriendRequest")
    public Result<?> resolveFriendRequest(@RequestParam("userId") int userId, @RequestParam("friendId") int friendId,
                                         @RequestParam("type") String type) {
        return userService.resolveFriendRequest(userId, friendId, type);
    }

}
