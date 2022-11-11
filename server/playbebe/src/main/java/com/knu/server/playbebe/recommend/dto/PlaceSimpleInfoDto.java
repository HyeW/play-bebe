package com.knu.server.playbebe.recommend.dto;

import com.knu.server.playbebe.recommend.model.Place;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class PlaceSimpleInfoDto {

    private String name;
    private String simpleAddress;
    private double totalRating;
    private int wantToVisit;
    private double distance;

    // wantToVisit - 스크랩 모델 추가
    // distance - 거리 계산 추가 (좌표계 : 중부원점TM(EPSG:2097) -> 위도경도)
    public PlaceSimpleInfoDto(Place place) {
        this.name = place.getEstablishmentName();
        this.simpleAddress = place.getAddress();
        this.totalRating = place.getTotalRating();
        this.wantToVisit = 0;
        this.distance = 0;
    }
}
