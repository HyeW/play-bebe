package com.knu.server.playbebe.review.dto;

import lombok.Builder;
import lombok.Getter;

@Getter
public class ReviewImageDTO {

    private byte[] imageFile;                   //이미지 바이트
    private String imageExtension;          //이미지 확장자

    @Builder
    public ReviewImageDTO(byte[] imageFile, String imageExtension) {
        this.imageFile = imageFile;
        this.imageExtension = imageExtension.substring(1);
    }
}
