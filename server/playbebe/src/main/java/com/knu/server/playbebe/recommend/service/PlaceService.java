package com.knu.server.playbebe.recommend.service;

import com.knu.server.playbebe.recommend.dto.PlaceSimpleInfoDto;
import com.knu.server.playbebe.recommend.model.Place;
import com.knu.server.playbebe.recommend.repository.PlaceRepository;
import com.knu.server.playbebe.review.model.Review;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class PlaceService {

    private final PlaceRepository placeRepository;

    public List<PlaceSimpleInfoDto> orderByStars(int page, double latitude, double longitude) {
        Pageable pageable = PageRequest.of(page, 6, Sort.by("totalRating").descending());
        Page<Place> placesOrderByStars = placeRepository.findAll(pageable);

        return placesOrderByStars.stream()
                .map(place -> new PlaceSimpleInfoDto(place, latitude, longitude, getLatestReviewId(place)))
                .collect(Collectors.toList());
    }

    public List<PlaceSimpleInfoDto> orderByDistance(int page, double latitude, double longitude) {
        PageRequest pageRequest = PageRequest.of(page, 6);
        Page<Place> places = placeRepository.findBySTDistance(pageRequest, latitude, longitude);

        return places.stream()
                .map(place -> new PlaceSimpleInfoDto(place, latitude, longitude, getLatestReviewId(place)))
                .collect(Collectors.toList());
    }

    public List<PlaceSimpleInfoDto> todayHotPlaces(double latitude, double longitude) {
        List<Place> todayTop6 = placeRepository.findTop6ByOrderByWantToVisitDesc();
        return todayTop6.stream()
                .map(place -> new PlaceSimpleInfoDto(place, latitude, longitude, getLatestReviewId(place)))
                .collect(Collectors.toList());
    }

    public long getLatestReviewId(Place place) {
        List<Review> reviews = place.getMessages();
        if (reviews.size() == 0) return 0;
        return reviews.get(reviews.size()-1).getId();
    }
}