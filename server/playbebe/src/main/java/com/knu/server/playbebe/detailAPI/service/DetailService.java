package com.knu.server.playbebe.detailAPI.service;
import com.knu.server.playbebe.detailAPI.dto.DetailDto;
import com.knu.server.playbebe.recommend.model.Place;
import com.knu.server.playbebe.recommend.repository.PlaceRepository;
import com.knu.server.playbebe.review.model.Review;
import com.knu.server.playbebe.review.repository.ReviewRepository;
import com.knu.server.playbebe.visit.model.Visit;
import com.knu.server.playbebe.visit.repository.VisitRepository;
import com.knu.server.playbebe.weather.respository.LocationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class DetailService {
    private final PlaceRepository placeRepository;
    private final VisitRepository visitRepository;
    private final ReviewRepository reviewRepository;
    private final LocationRepository locationRepository;
    public DetailDto getPlaceInfo(long id){
        DetailDto detailDto = new DetailDto();
        Optional<Place> place_ = placeRepository.findById(id);
        Place place = place_.get();
        String placeName = place.getEstablishmentName();
        String placeAddress = place.getAddress();
        String placeTelephone = place.getTelephone();
        detailDto.setPlaceInfo(placeName,placeAddress,placeTelephone);
        return detailDto;
    }

    public DetailDto getVisitInfo(DetailDto detailDto, long id){
        List<Visit> visit_ = visitRepository.findAllByPlace_Id(id);
        int visit_count = visit_.size();
        detailDto.setVisitInfo(visit_count);
        return detailDto;
    }

    public DetailDto getWeatherInfo(DetailDto detailDto, long id){

    }

    public DetailDto getReview(DetailDto detailDto, long id){
        List<Review> review_ =  reviewRepository.findAllByPlace_Id(id);
        String reviewContent = review_.get(0).getContent();
        detailDto.setReview(reviewContent,null);
        return detailDto;
    }

    public DetailDto getDistance(DetailDto detailDto){
        // 현재 위치의 좌표 구하기

        // 해당 장소의 좌표 구하기
    }

}
