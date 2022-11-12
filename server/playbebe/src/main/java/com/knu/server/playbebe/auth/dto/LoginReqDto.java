package com.knu.server.playbebe.auth.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LoginReqDto {

    private String email;
    private String password;
}
