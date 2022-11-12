package com.knu.server.playbebe.detailAPI.controller;



import com.knu.server.playbebe.detailAPI.dto.DetailDto;
import com.knu.server.playbebe.detailAPI.service.DetailService;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.ws.rs.Path;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class DetailController {
    private final DetailService detailService;

    // 이름, 주소, 전화번호, 방문해요 수, 날씨, 리뷰 1개, 사진
    @GetMapping("/detail{placeId}")
    public DetailDto getDetail(@PathVariable long placeId){
        DetailDto detailDto = new DetailDto();
        detailDto = detailService.getPlaceInfo(placeId); // 이름,주소,전화번호
        detailDto = detailService.getVisitInfo(detailDto, placeId); // 방문 정보
        detailDto = detailService.getWeatherInfo(detailDto, placeId); //날씨 정보
        detailDto = detailService.getReview(detailDto, placeId); // 리뷰1개, 사진
        return detailDto;
    }

}
