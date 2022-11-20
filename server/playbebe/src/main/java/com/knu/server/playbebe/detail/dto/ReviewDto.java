package com.knu.server.playbebe.detail.dto;

import com.knu.server.playbebe.review.model.Image;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter
@NoArgsConstructor
public class ReviewDto {
    private String reviewContent;
    private Long pictureId;

    public ReviewDto(String reviewContent, Long pictureId){
        this.reviewContent = reviewContent;
        this.pictureId = pictureId;
    }
}
