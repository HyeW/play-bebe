package com.knu.server.playbebe.auth.jwt;


public interface JwtProperties {
    String SECRET = "knuplaybebe"; // 우리 서버만 알고 있는 비밀값
    int EXPIRATION_TIME = 60000*60*24*3; // 3일
    String TOKEN_PREFIX = "Bearer ";
    String HEADER_STRING = "Authorization";
}

