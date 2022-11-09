package com.knu.server.playbebe.weather.dto;

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

    public WeatherDto(String SKY, String Degree, String RainyProb, String RainyType, String WindSpeed){
        this.SKY = SKY;
        this.Degree = Degree;
        this.RainyProb = RainyProb;
        this.RainyType = RainyType;
        this.WindSpeed = WindSpeed;
    }
}
