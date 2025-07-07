# Beetles_chat
> 代码在master分支

聊天室代码

# 功能介绍

## 登录注册功能

- 登录功能

登录功能结合了SPringSecurity，全局对后端请求进行鉴权（除开某些特定url）

![image](https://github.com/user-attachments/assets/2bbbb7ca-d9f8-4edb-9ae8-f6c5fc4cbe37)


- 注册功能

注册时分为必填与非必填选项

![image](https://github.com/user-attachments/assets/7d2d3ad9-e677-4088-9328-e2a1008e954f)


- 聊天功能

聊天时使用Websocket实时更新消息。

![image](https://github.com/user-attachments/assets/761c692a-10a3-408f-b52f-eb1d012d0b16)


- 添加好友

添加好友功能页面有查询好友功能、发起好友申请、处理好友通知、查看历史申请记录。分别都设置了垂直滚动。

![image](https://github.com/user-attachments/assets/8286d7d7-3b8c-423e-a9d1-1948d06d1127)


- 用户信息

用户信息界面做的简陋，可自行修改

![image](https://github.com/user-attachments/assets/6dd3cf5c-433b-4d3d-8175-52a83a748847)


# 使用技术
## 前端

- Vue3 + Elment-plus + localStorage + axios

## 后端

- SpringBoot3 + SpringSecurity + Websocket + MyBatis + MyBatis-plus

## 数据库

- MySQL + Redis
