package com.beetles.mapper;

import org.apache.ibatis.annotations.MapKey;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;
import java.util.Map;

@Mapper
public interface ChatMapper {
    @Select("SELECT sys_user.id, sys_user.nick_name\n" +
            "FROM sys_user\n" +
            "JOIN friend_list_role ON sys_user.id = friend_list_role.friend_id\n" +
            "WHERE friend_list_role.user_id = #{userId} ")
    List<Map<String, String>> getFriendList(String userId);

    @Select("SELECT \n" +
            "  user_id id, message text\n" +
            "FROM\n" +
            "  message_tb\n" +
            "WHERE\n" +
            "  (user_id = #{userId} AND friend_id = #{friendId})\n" +
            "  OR (user_id = #{friendId} AND friend_id = #{userId})")
    List<Map<String, String>> getChatHistory(String userId, String friendId);

    int sendChatMessage(String userId, String friendId, String chatMessage);

    @Select("SELECT\n" +
            "  id,\n" +
            "  nick_name,\n" +
            "  avatar\n" +
            "FROM\n" +
            "  sys_user\n" +
            "WHERE\n" +
            "  user_name = #{userName}")
    Map<String, String> getUserInfo(String userName);
}
