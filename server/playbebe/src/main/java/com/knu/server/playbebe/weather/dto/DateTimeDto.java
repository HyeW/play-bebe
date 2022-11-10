package com.knu.server.playbebe.weather.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class DateTimeDto {
    private String date;
    private String time;

    public DateTimeDto(String date, String time){
        this.date = date;
        this.time = time;
    }
}
