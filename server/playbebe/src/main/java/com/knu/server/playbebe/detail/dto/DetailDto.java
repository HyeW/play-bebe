package com.knu.server.playbebe.detail.dto;

import com.knu.server.playbebe.weather.dto.WeatherDto;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

@Getter @Setter
@NoArgsConstructor
public class DetailDto {
    private String placeName;
    private String placeAddress;
    private String placeTelephone;
    private int visitNum;
    private WeatherDto weather;
    private String review_content;
    private MultipartFile review_picture;
    private String distance;


    public void setPlaceInfo(String placeName, String placeAddress, String placeTelephone){
        this.placeName = placeName;
        this.placeAddress = placeAddress;
        this.placeTelephone = placeTelephone;
    }

    public void setVisitInfo(int visitNum){
        this.visitNum = visitNum;
    }

    public void setWeather(WeatherDto weatherdto){
        this.weather = weatherdto;
    }

    public void setReview(String review_content, MultipartFile review_picture){
        this.review_content = review_content;
        this.review_picture = review_picture;
    }

    public void setDistance(String distance){
        this.distance = distance;
    }
}
