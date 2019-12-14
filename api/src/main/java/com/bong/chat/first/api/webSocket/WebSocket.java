package com.bong.chat.first.api.webSocket;

import javax.websocket.OnClose;
import javax.websocket.OnError;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;

import lombok.extern.slf4j.Slf4j;

@Controller
@Slf4j
public class WebSocket {

    @MessageMapping("/send")
    @SendTo("/topic/greetings")
    public String greeting(String message) throws Exception {
        log.info(message);
        return "Hellow!!";
    }

}