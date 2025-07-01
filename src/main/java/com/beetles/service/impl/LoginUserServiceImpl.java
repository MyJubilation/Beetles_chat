package com.beetles.service.impl;

import com.beetles.DTO.LoginUser;
import com.beetles.service.LoginService;
import com.beetles.utils.JwtUtil;
import com.beetles.utils.RedisCache;
import com.beetles.DTO.Result;
import com.beetles.DTO.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Objects;


@Service
public class LoginUserServiceImpl implements LoginService {

    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private RedisCache redisCache;

    public Result<?> login(User user){

        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(user.getUserName(),user.getPassword());
        Authentication authentication = authenticationManager.authenticate(authenticationToken);

        if(Objects.isNull(authentication)){
            throw new RuntimeException("用户名或密码错误");
        }

        //使用userid生成token
        LoginUser loginUser = (LoginUser) authentication.getPrincipal();
        String userId = loginUser.getUser().getId().toString();
        String jwt = JwtUtil.createJWT(userId);

        //authenticate存入redis
        redisCache.setCacheObject("login:"+userId,loginUser);
        //把token响应给前端
        HashMap<String,String> map = new HashMap<>();
        map.put("token",jwt);
        return new Result<>().success(200,"登陆成功").put(map);
    }

    @Override
    public Result<?> logout() {
        Authentication authentication =
                SecurityContextHolder.getContext().getAuthentication();
        LoginUser loginUser = (LoginUser) authentication.getPrincipal();
        Long userid = loginUser.getUser().getId();
        redisCache.deleteObject("login:"+userid);
        return new Result<>().success(200, "退出成功");
    }
}
