package com.knu.server.playbebe.Weather.Dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter@Setter
@NoArgsConstructor
public class WeatherDto {
    private String SKY; // 하늘 상태
    private String Degree; // 1시간 기온
    private String RainyProb; // 강수 확률
    private String RainyType; // 강수 형태
    private String WindSpeed; // 풍속
}
