package com.beetles.service.impl;

import com.beetles.DTO.Constants;
import com.beetles.DTO.Result;
import com.beetles.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Map;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private com.beetles.mapper.UserMapper userMapper;

    @Override
    public Result<?> selectAcceptFriendsList(int id) {
        List<Map<String, String>> list = userMapper.selectAcceptFriendsList(id);
        if(list != null){
            return new Result<>().success(200, "获取好友通知列表成功").put(list);
        }else {
            return new Result<>().error("获取好友通知列表失败");
        }
    }

    @Override
    public Result<?> selectAddFriendsHistoryList(int id) {
        List<Map<String, String>> list = userMapper.selectAddFriendsHistoryList(id);
        if(list != null){
            return new Result<>().success(200, "获取好友申请历史信息列表成功").put(list);
        }else {
            return new Result<>().error("获取好友申请历史信息列表失败");
        }
    }

    @Override
    public Result<?> selectFriendByNickName(String nickName, int userId) {
        List<Map<String, String>> list = userMapper.selectFriendByNickName(nickName,userId);
        if(list != null){
            return new Result<>().success(200, "获取好友列表成功").put(list);
        }else {
            return new Result<>().error("获取好友列表失败");
        }
    }

    @Override
    public Result<?> selectFriendByUserName(String userName, int userId) {
        List<Map<String, String>> list = userMapper.selectFriendByUserName(userName,userId);
        if(list != null){
            return new Result<>().success(200, "获取好友列表成功").put(list);
        }else {
            return new Result<>().error("获取好友列表失败");
        }
    }

    @Override
    public Result<?> selectFriendById(int id, int userId) {
        List<Map<String, String>> list = userMapper.selectFriendById(id,userId);
        if(list != null){
            return new Result<>().success(200, "获取好友列表成功").put(list);
        }else {
            return new Result<>().error("查询结果为空");
        }
    }

    @Override
    public Result<?> addFriendRequest(int userId, int friendId) {
        // 查找是否已经存在申请，查询是否有status为申请中的数据
        int count = userMapper.selectFriendRequestHistoryStatus(userId, friendId, Constants.ALREADY_HAVE_ADD_FRIEND_REQUEST);
        if(count > 0){
            // 说明已经存在申请，返回错误信息
            return new Result<>().error("已经存在申请");
        }else {
            Date now = new Date();
            Integer result = userMapper.addFriendRequest(userId, friendId, Constants.ALREADY_HAVE_ADD_FRIEND_REQUEST, now , now);
            if(result == 1){
                return new Result<>().success(200, "添加好友申请成功");
            }else {
                return new Result<>().error("添加好友申请失败");
            }
        }
    }

    @Override
    public Result<?> resolveFriendRequest(int userId, int friendId, String type) {
        if(type.equals("agree")){
            // 同意申请
            // 修改添加申请表中status为同意
            Date now = new Date();
            Integer result = userMapper.resolveFriendRequest(userId, friendId, Constants.AGREE_FRIEND_REQUEST, now);
            if(result == 1){
                // 添加好友关系
                Integer result1 = userMapper.addFriend(userId, friendId, now);
                Integer result2 = userMapper.addFriend(friendId, userId, now);
                if(result1 == 1 && result2 == 1){
                    return new Result<>().success(200, "处理好友申请成功");
                }else {
                    return new Result<>().error("处理好友申请失败");
                }
            }else {
                return new Result<>().error("处理好友申请失败");
            }
        }else if(type.equals("refuse")){
            // 拒绝申请
            Date now = new Date();
            Integer result = userMapper.resolveFriendRequest(userId, friendId, Constants.REFUSE_FRIEND_REQUEST, now);
            if(result == 1){
                return new Result<>().success(200, "处理好友申请成功");
            }else {
                return new Result<>().error("处理好友申请失败");
            }
        }else {
            return new Result<>().error("参数错误");
        }
    }
}
