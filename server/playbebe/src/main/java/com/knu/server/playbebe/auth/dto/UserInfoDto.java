package com.knu.server.playbebe.auth.dto;

import lombok.Builder;
import lombok.Getter;

@Getter
public class UserInfoDto {
    private Long userId;

    @Builder
    public UserInfoDto(Long userId) {
        this.userId = userId;
    }
}
