package com.knu.server.playbebe.detail.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.web.bind.annotation.GetMapping;

@Getter @Setter
@NoArgsConstructor
public class PlaceDto {
    private String placeName;
    private String placeAddress;
    private String placeTelephone;
    public PlaceDto(String placeName, String placeAddress, String placeTelephone){
        this.placeName = placeName;
        this.placeAddress = placeAddress;
        this.placeTelephone = placeTelephone;
    }
}
