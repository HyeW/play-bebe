package com.knu.server.playbebe.auth.jwt;


public interface JwtProperties {
    String SECRET = "knuplaybebe"; // �츮 ������ �˰� �ִ� ��а�
    int EXPIRATION_TIME = 60000*60*24*3; // 3��
    String TOKEN_PREFIX = "Bearer ";
    String HEADER_STRING = "Authorization";
}

