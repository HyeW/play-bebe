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
        // 날짜
        LocalDate now = LocalDate.now();
        StringBuffer sb = new StringBuffer();
        sb.append(now.getYear());
        sb.append(now.getMonthValue());
        if(now.getDayOfMonth()<10) sb.append(0);
        sb.append(now.getDayOfMonth());
        String date = sb.toString();

        //시간
        int base_time[] = {2,5,8,11,14,17,20,23,25};
        LocalTime now_ = LocalTime.now();
        sb = new StringBuffer();
        int hour = now_.getHour();
        for(int i=0;i<base_time.length;i++){
            if(hour<base_time[i]){
                if(base_time[i-1]<10) sb.append("0");
                sb.append(base_time[i-1]);
                sb.append(0);
                sb.append(0);
                break;
            }
        }
        String time = sb.toString();
        return new DateTimeDto(date,time);
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
