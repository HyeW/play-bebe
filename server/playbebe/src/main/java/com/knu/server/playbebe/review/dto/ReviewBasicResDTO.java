package com.knu.server.playbebe.review.dto;

import com.knu.server.playbebe.recommend.model.Place;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
public class ReviewBasicResDTO {

    private Long reviewId;          //리뷰 pk
    private String content;         //리뷰 내용
    private Double rating;             //리뷰 별점
    private LocalDate visitDate;    //방문 날짜
    private LocalDate createDate;   //생성 날짜
    private String nickname;        //사용자 닉네임
    private Long placeId;           //유원지 pk
    private String establishmentName;       //유원지 이름
    private String address;                 //유원지 주소


    @Builder
    public ReviewBasicResDTO(Long id, String content, Double rating, LocalDate visitDate,
                             LocalDateTime createDate, String nickname, Long placeId, String placeName, String address) {
        this.reviewId = id;
        this.content = content;
        this.rating = rating;
        this.visitDate = visitDate;
        this.createDate = createDate.toLocalDate();
        this.nickname = nickname;
        this.placeId = placeId;
        this.establishmentName = placeName;
        this.address = address;
    }
}
