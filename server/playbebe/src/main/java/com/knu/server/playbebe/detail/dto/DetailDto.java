package com.knu.server.playbebe.detail.dto;

import com.knu.server.playbebe.review.model.Image;
import com.knu.server.playbebe.visit.model.Visit;
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
    private String reviewContent;
    private Long pictureId;
    private String distance;
    private double rating;
    private boolean isVisit;


    public void setPlaceInfo(PlaceDto placeDto){
        this.placeName = placeDto.getPlaceName();
        this.placeAddress = placeDto.getPlaceAddress();
        this.placeTelephone = placeDto.getPlaceTelephone();
    }

    public void setVisitInfo(VisitDto visitDto){
        this.visitNum = visitDto.getVisitNum();
        this.isVisit = visitDto.isVisit();
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
