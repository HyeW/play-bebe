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

    // wantToVisit - ��ũ�� �� �߰�
    // distance - �Ÿ� ��� �߰� (��ǥ�� : �ߺο���TM(EPSG:2097) -> �����浵)
    public PlaceSimpleInfoDto(Place place) {
        this.name = place.getEstablishmentName();
        this.simpleAddress = place.getAddress();
        this.totalRating = place.getTotalRating();
        this.wantToVisit = 0;
        this.distance = 0;
    }
}
