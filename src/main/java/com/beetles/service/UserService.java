package com.beetles.service;

import com.beetles.DTO.Result;

public interface UserService {
    Result<?> selectFriendByNickName(String nickName, int userId);

    Result<?> selectFriendByUserName(String userName, int userId);

    Result<?> selectFriendById(int id, int userId);

    Result<?> selectAcceptFriendsList(int id);

    Result<?> selectAddFriendsHistoryList(int id);

    Result<?> addFriendRequest(int userId, int friendId);

    Result<?> resolveFriendRequest(int userId, int friendId, String type);
}
