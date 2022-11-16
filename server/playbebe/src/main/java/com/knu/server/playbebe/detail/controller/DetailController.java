package com.knu.server.playbebe.detail.controller;



import com.knu.server.playbebe.detail.dto.DetailDto;
import com.knu.server.playbebe.detail.service.DetailService;
import lombok.RequiredArgsConstructor;
import org.json.JSONException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
@RequiredArgsConstructor
public class DetailController {
    private final DetailService detailService;

    // 이름, 주소, 전화번호, 방문해요 수, 날씨, 리뷰 1개, 사진, 거리
    @GetMapping("/detail/{place}")
    public DetailDto getDetail(@PathVariable long place) throws JSONException, IOException {
        DetailDto detailDto = new DetailDto();
        detailDto = detailService.getPlaceInfo(place); // 이름,주소,전화번호
        detailDto = detailService.getVisitInfo(detailDto, place); // 방문 정보
        detailDto = detailService.getWeatherInfo(detailDto, place); //날씨 정보
        detailDto = detailService.getReview(detailDto, place); // 리뷰1개, 사진
        detailDto = detailService.getDistance(detailDto);
        return detailDto;
    }

}