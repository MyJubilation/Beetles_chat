package com.beetles;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@MapperScan(basePackages = "com.beetles.mapper")
@SpringBootApplication
public class BeetlesChatroomBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(BeetlesChatroomBackendApplication.class, args);
    }

}
