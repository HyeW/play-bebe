package com.knu.server.playbebe.recommend.controller;

import com.knu.server.playbebe.recommend.dto.PlaceSimpleInfoDto;
import com.knu.server.playbebe.recommend.service.PlaceService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/places")
@RequiredArgsConstructor
public class PlaceController {

    private final PlaceService placeService;

    @GetMapping("/stars")
    public List<PlaceSimpleInfoDto> listOfPlacesOrderByStars() {
        return placeService.orderByStars();
    }
}
