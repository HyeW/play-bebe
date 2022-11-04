package com.knu.server.playbebe.Weather.Service;
import com.knu.server.playbebe.Weather.Dto.DateTimeDto;
import com.knu.server.playbebe.Weather.Dto.LocationDto;
import com.knu.server.playbebe.Weather.Dto.RegionNameDto;
import com.knu.server.playbebe.Weather.Dto.WeatherDto;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.*;
@Service
public class WeatherService {

    public DateTimeDto getCurDateTime(){ // 현재 시간 정보
    return null;
    }

    public LocationDto getCurX_Y(RegionNameDto regionNameDto){
    return null;
    }

    public String getJSONdata(LocationDto locationDto, DateTimeDto dateTimeDto){
    return null;
    }

    public static WeatherDto getWeather(String JSONdata){
    return null;
    }
}
