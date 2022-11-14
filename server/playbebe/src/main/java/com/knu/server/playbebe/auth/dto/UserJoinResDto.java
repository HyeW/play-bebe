package com.knu.server.playbebe.auth.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserJoinResDto {

    private Boolean emailDup;
    private Boolean nicknameDup;

    public UserJoinResDto(boolean email, boolean nickname) {
        this.emailDup = email;
        this.nicknameDup = nickname;
    }
}
