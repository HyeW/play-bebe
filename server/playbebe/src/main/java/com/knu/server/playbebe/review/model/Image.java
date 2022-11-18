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
    private String extension;

    @Builder
    public Image(String originalFilename, String storePath, String extension) {
        this.originalFilename = originalFilename;
        this.storePath = storePath;
        this.extension = extension;
    }
}
