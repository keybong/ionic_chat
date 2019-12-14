package com.bong.chat.first.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.SecurityBuilder;
import org.springframework.security.config.annotation.web.WebSecurityConfigurer;

@Configuration
public class WebSecurityConfig implements WebSecurityConfigurer {

    @Override
    public void configure(SecurityBuilder arg0) throws Exception {
        
    }

    @Override
    public void init(SecurityBuilder arg0) throws Exception {

    }

    

}