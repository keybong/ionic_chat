package com.bong.chat.first.api.webSocket;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
public class WebSocket {

    @MessageMapping("/send")
    @SendTo("/topic/greetings")
    public String greeting(String message) throws Exception {
        log.info(message);
        return "Hellow!!";
    }

}