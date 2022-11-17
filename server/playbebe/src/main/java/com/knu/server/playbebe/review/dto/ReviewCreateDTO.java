package com.knu.server.playbebe.review.dto;

import lombok.Getter;

import java.time.LocalDate;

@Getter
public class ReviewCreateDTO {

    private String content;
    private Double rating;
    private LocalDate visitDate;
    private String email;
    private Long placeId;

}
