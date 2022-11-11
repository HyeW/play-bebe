package com.knu.server.playbebe.weather.controller;
import com.knu.server.playbebe.weather.dto.DateTimeDto;
import com.knu.server.playbebe.weather.dto.CoordinateDto;
import com.knu.server.playbebe.weather.dto.RegionNameDto;
import com.knu.server.playbebe.weather.dto.WeatherDto;
import com.knu.server.playbebe.weather.service.WeatherService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor

public class WeatherApiController {
    private final WeatherService weatherService;

    @GetMapping("/weather")
    public WeatherDto restApiGetWeather(
            @RequestParam("siName") String siName,
            @RequestParam("guName") String guName,
            @RequestParam("dongName") String dongName
    ) throws Exception{
        DateTimeDto dateTimeDto = weatherService.getCurDateTime(); // 현재 시간 정보
        CoordinateDto coordinateDto = weatherService.getCurX_Y(new RegionNameDto("siName","guName"));
        String JSONdata = weatherService.getJSONdata(coordinateDto, dateTimeDto);
        WeatherDto weather = weatherService.getWeather(JSONdata);
        return weather;
    }
}