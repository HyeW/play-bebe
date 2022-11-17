package com.knu.server.playbebe.recommend.service;

import com.knu.server.playbebe.recommend.dto.PlaceSimpleInfoDto;
import com.knu.server.playbebe.recommend.model.Place;
import com.knu.server.playbebe.recommend.repository.PlaceRepository;
import com.knu.server.playbebe.visit.repository.VisitRepository;
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
    private final VisitRepository visitRepository;

    public List<PlaceSimpleInfoDto> orderByStars(int page, double latitude, double longitude) {
        Pageable pageable = PageRequest.of(page, 6, Sort.by("totalRating").descending());
        Page<Place> placesOrderByStars = placeRepository.findAll(pageable);

        return placesOrderByStars.stream()
                .map(place -> new PlaceSimpleInfoDto(place, latitude, longitude))
                .collect(Collectors.toList());
    }

    public List<PlaceSimpleInfoDto> orderByDistance(int page, double latitude, double longitude) {
        List<Place> places = placeRepository.findAll();
        List<PlaceSimpleInfoDto> simpleInfoDtos = places.stream()
                .map(place -> new PlaceSimpleInfoDto(place, latitude, longitude))
                .sorted()
                .collect(Collectors.toList());

        return simpleInfoDtos.subList(page * 6, (page + 1) * 6);
    }

    public List<PlaceSimpleInfoDto> todayHotPlaces(double latitude, double longitude) {
        List<Place> todayTop6 = placeRepository.findTop6ByOrderByWantToVisitDesc();
        return todayTop6.stream()
                .map(place -> new PlaceSimpleInfoDto(place, latitude, longitude))
                .collect(Collectors.toList());
    }
}