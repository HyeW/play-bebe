package com.knu.server.playbebe.review.dto;

import com.knu.server.playbebe.recommend.model.Place;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
public class ReviewBasicResDTO {

    private String content;         //���� ����
    private int rating;             //����
    private LocalDate visitDate;    //�湮 ��¥
    private LocalDate createDate;   //���� ���� ��¥
    private String nickname;        //����� �г���
    private Long placeId;           //������ pk
    private String establishmentName;       //������ �̸�
    private String address;                 //������ �ּ�

    @Builder
    public ReviewBasicResDTO(String content, int rating, LocalDate visitDate,
                             LocalDateTime createDate, String nickname, Long placeId, String placeName, String address) {
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
