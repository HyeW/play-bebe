package com.knu.server.playbebe.detail.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter
@NoArgsConstructor
public class DistanceDto {
    private String distance;
    public DistanceDto(String distance){
        this.distance = distance;
    }
}
