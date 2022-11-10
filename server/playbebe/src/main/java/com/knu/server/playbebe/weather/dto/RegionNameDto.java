package com.knu.server.playbebe.weather.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class RegionNameDto {
    private String siName;
    private String guName;

    public RegionNameDto(String siName, String guName){
        this.siName = siName;
        this.guName = guName;
    }
}
