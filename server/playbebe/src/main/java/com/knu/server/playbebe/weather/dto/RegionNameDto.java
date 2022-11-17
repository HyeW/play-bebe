package com.knu.server.playbebe.weather.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class RegionNameDto {
    private String phase1;
    private String phase2;

    public RegionNameDto(String phase1, String phase2){
        this.phase1 = phase1;
        this.phase2 = phase2;
    }

}
