package com.knu.server.playbebe.detailAPI.service;
import com.knu.server.playbebe.detailAPI.dto.DetailDto;
import com.knu.server.playbebe.recommend.model.Place;
import com.knu.server.playbebe.recommend.repository.PlaceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class DetailService {
    private final PlaceRepository placeRepository;

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

    }
    public DetailDto getWeatherInfo(DetailDto detailDto, long id){

    }
    public DetailDto getReview(DetailDto detailDto, long id){

    }

}
