package com.knu.server.playbebe.recommend.controller;

import com.knu.server.playbebe.recommend.dto.PlaceSimpleInfoDto;
import com.knu.server.playbebe.recommend.service.PlaceService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/places")
@RequiredArgsConstructor
public class PlaceController {

    private final PlaceService placeService;

    @GetMapping("/stars/{page}/{latitude}/{longitude}")
    public List<PlaceSimpleInfoDto> listOfPlacesOrderByStars(@PathVariable int page, @PathVariable double latitude, @PathVariable double longitude) {
        return placeService.orderByStars(page, latitude, longitude);
    }

    @GetMapping("/distance/{page}/{latitude}/{longitude}")
    public List<PlaceSimpleInfoDto> listOfPlacesOrderByDistance(@PathVariable int page, @PathVariable double latitude, @PathVariable double longitude) {
        return placeService.orderByDistance(page, latitude, longitude);
    }
}
