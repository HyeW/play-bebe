package com.knu.server.playbebe.review.model;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Embeddable;

@Embeddable
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Image {
    private String originalFilename;
    private String storePath;
    //파일 확장자 종류

    @Builder
    public Image(String originalFilename, String storePath) {
        this.originalFilename = originalFilename;
        this.storePath = storePath;
    }
}
