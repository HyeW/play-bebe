package com.knu.server.playbebe.detail.dto;

import com.knu.server.playbebe.weather.dto.WeatherDto;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter
@NoArgsConstructor
public class DetailDto {
    private String placeName;
    private String placeAddress;
    private String placeTelephone;
    private int visitNum;
    private WeatherDto weather;
    private String reviewContent;
    private Long pictureId;
    private String distance;
    private double rating;
    private boolean visitSelected;


    public void setPlaceInfo(PlaceDto placeDto){
        this.placeName = placeDto.getPlaceName();
        this.placeAddress = placeDto.getPlaceAddress();
        this.placeTelephone = placeDto.getPlaceTelephone();
    }

    public void setVisitInfo(VisitDto visitDto){
        this.visitNum = visitDto.getVisitNum();
        this.visitSelected = visitDto.isVisitSelected();
    }

    public void setWeatherInfo(WeatherDto weatherdto){
        this.weather = weatherdto;
    }

    public void setReviewInfo(ReviewDto reviewDto){
        this.reviewContent = reviewDto.getReviewContent();
        this.pictureId = reviewDto.getPictureId();
    }

    public void setDistanceInfo(DistanceDto distanceDto) {
        this.distance = distanceDto.getDistance();
    }
    public void setRatingInfo(RatingDto ratingDto){
        this.rating = ratingDto.getRating();
    }
}
