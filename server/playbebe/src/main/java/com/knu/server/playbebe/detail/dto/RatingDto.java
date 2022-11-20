package com.knu.server.playbebe.detail.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter
@NoArgsConstructor
public class RatingDto {
    private double rating;
    public RatingDto(double rating){
        this.rating = rating;
    }
}
