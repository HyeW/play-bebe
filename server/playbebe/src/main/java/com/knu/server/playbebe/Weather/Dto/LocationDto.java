package com.knu.server.playbebe.Weather.Dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class LocationDto {
    private String x; // OO시
    private String y; // OO구

    public LocationDto(String x, String y){
        this.x = x;
        this.y = y;
    }
}
