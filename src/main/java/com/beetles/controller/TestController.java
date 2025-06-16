package com.beetles.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

    @RequestMapping("/testWS")
    public String testWS() {
        return "testWS";
    }
}
