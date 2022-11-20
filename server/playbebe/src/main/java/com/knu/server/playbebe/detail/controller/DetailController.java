package com.knu.server.playbebe.detail.controller;
import com.knu.server.playbebe.detail.dto.DetailDto;
import com.knu.server.playbebe.detail.service.DetailService;
import lombok.RequiredArgsConstructor;
import org.json.JSONException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.io.IOException;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class DetailController {
    private final DetailService detailService;

    // 이름, 주소, 전화번호, 방문해요 수, 날씨, 리뷰 1개, 사진, 거리
    @GetMapping("/detail/{placeId}/{userId}/{latitude}/{longitude}")
    public DetailDto getDetail(@PathVariable long placeId, @PathVariable long userId, @PathVariable double latitude, @PathVariable double longitude) throws JSONException, IOException {
        DetailDto detailDto = new DetailDto();
        detailDto.setPlaceInfo(detailService.getPlaceInfo(placeId)); // 이름,주소,전화번호
        detailDto.setVisitInfo(detailService.getVisitInfo(placeId,userId));  // 방문 정보(방문자 수, 방문 여부)
        detailDto.setWeatherInfo(detailService.getWeatherInfo(placeId)); // 날씨 정보
        detailDto.setReviewInfo(detailService.getReview(placeId)); // 리뷰1개, 사진
        detailDto.setDistanceInfo(detailService.getDistance(placeId, latitude, longitude)); // 거리 정보
        detailDto.setRatingInfo(detailService.getRating(placeId)); // 별점 정보
        return detailDto;
    }

}
