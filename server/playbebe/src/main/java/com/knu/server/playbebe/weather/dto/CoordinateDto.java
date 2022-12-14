package com.knu.server.playbebe.weather.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class CoordinateDto {
    private String x;
    private String y;

    public CoordinateDto(String x, String y){
        this.x = x;
        this.y = y;
    }
}
