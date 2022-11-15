package com.knu.server.playbebe.recommend.service;

import com.knu.server.playbebe.recommend.dto.PlaceSimpleInfoDto;
import com.knu.server.playbebe.recommend.model.Place;
import com.knu.server.playbebe.recommend.repository.PlaceRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.locationtech.proj4j.BasicCoordinateTransform;
import org.locationtech.proj4j.CRSFactory;
import org.locationtech.proj4j.CoordinateReferenceSystem;
import org.locationtech.proj4j.ProjCoordinate;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class PlaceService {

    private final PlaceRepository placeRepository;

    public List<PlaceSimpleInfoDto> orderByStars(int page) {
        Pageable pageable = PageRequest.of(page, 6, Sort.by("totalRating").descending());
        Page<Place> placesOrderByStars = placeRepository.findAll(pageable);

        return placesOrderByStars.stream()
                .map(PlaceSimpleInfoDto :: new)
                .collect(Collectors.toList());
    }

    public List<PlaceSimpleInfoDto> orderByDistance(int page) {


        return null;
    }
}