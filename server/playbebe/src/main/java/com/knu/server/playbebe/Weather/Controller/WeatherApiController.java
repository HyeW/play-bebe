package com.knu.server.playbebe.Weather.Controller;
import com.knu.server.playbebe.Weather.Dto.DateTimeDto;
import com.knu.server.playbebe.Weather.Dto.LocationDto;
import com.knu.server.playbebe.Weather.Dto.RegionNameDto;
import com.knu.server.playbebe.Weather.Dto.WeatherDto;
import com.knu.server.playbebe.Weather.Service.WeatherService;
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
//            @RequestParam("si_name") String siName,
//            @RequestParam("gu_name") String guName
    ) throws Exception{
        DateTimeDto dateTimeDto = weatherService.getCurDateTime(); // 현재 시간 정보
        System.out.println(dateTimeDto.getDate()+","+dateTimeDto.getTime());
        LocationDto locationDto = weatherService.getCurX_Y(new RegionNameDto("siName","guName"));
        String JSONdata = weatherService.getJSONdata(locationDto, dateTimeDto);
        WeatherDto weather = weatherService.getWeather(JSONdata);
        return weather;
    }
}