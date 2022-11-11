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
    private double stars;
    private int wantToVisit;
    private double distance;

//    PlaceSimpleInfoDto(Place place) {
//        this.name = place.getEstablishmentName();
//        this.simpleAddress = place.getAddress();
//        this.
//    }
}
