package com.knu.server.playbebe.weather.service;
import com.knu.server.playbebe.weather.dto.DateTimeDto;
import com.knu.server.playbebe.weather.dto.CoordinateDto;
import com.knu.server.playbebe.weather.dto.RegionNameDto;
import com.knu.server.playbebe.weather.dto.WeatherDto;
import com.knu.server.playbebe.weather.model.Location;
import com.knu.server.playbebe.weather.respository.LocationRepository;
import lombok.RequiredArgsConstructor;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.*;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class WeatherService {
    private final LocationRepository locationRepository;
    public DateTimeDto getCurDateTime(){ // 현재 시간 정보
        // 오늘 날짜
        LocalDate now = LocalDate.now();
        StringBuffer sb = new StringBuffer();
        sb.append(now.getYear());
        sb.append(now.getMonthValue());
        if(now.getDayOfMonth()<10) sb.append(0);
        sb.append(now.getDayOfMonth());
        String date = sb.toString();

        //현재 시각
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

    // OO시,OO구,00동으로 좌표값 가져오기
    public CoordinateDto getCurX_Y(RegionNameDto regionNameDto){
    Optional<Location> location = locationRepository.findById((long)0);
    String X = location.get().getX();
    String Y = location.get().getY();
    return new CoordinateDto(X,Y);
    }

    // 날씨 API JSON으로 가져오기
    public String getJSONdata(CoordinateDto coordinateDto, DateTimeDto dateTimeDto) throws IOException {
        StringBuilder urlBuilder = new StringBuilder("http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst"); /*URL*/
        urlBuilder.append("?" + URLEncoder.encode("serviceKey","UTF-8") + "=P67cLmcxkzL21GLQ9aYyoaxYg9d9OTbkc%2BcShD%2F6ce%2FiMzP4F2t7qA87%2Fa%2FtPCrzROxYqul87sS9Q0mO6kjPdg%3D%3D"); /*Service Key*/
        urlBuilder.append("&" + URLEncoder.encode("pageNo","UTF-8") + "=" + URLEncoder.encode("1", "UTF-8")); /*페이지번호*/
        urlBuilder.append("&" + URLEncoder.encode("numOfRows","UTF-8") + "=" + URLEncoder.encode("10", "UTF-8")); /*한 페이지 결과 수*/
        urlBuilder.append("&" + URLEncoder.encode("dataType","UTF-8") + "=" + URLEncoder.encode("JSON", "UTF-8")); /*요청자료형식(XML/JSON) Default: XML*/
        urlBuilder.append("&" + URLEncoder.encode("base_date","UTF-8") + "=" + URLEncoder.encode(dateTimeDto.getDate(), "UTF-8")); /*‘21년 6월 28일 발표*/
        urlBuilder.append("&" + URLEncoder.encode("base_time","UTF-8") + "=" + URLEncoder.encode(dateTimeDto.getTime(), "UTF-8")); /*06시 발표(정시단위) */
        urlBuilder.append("&" + URLEncoder.encode("nx","UTF-8") + "=" + URLEncoder.encode(coordinateDto.getX(), "UTF-8")); /*예보지점의 X 좌표값*/
        urlBuilder.append("&" + URLEncoder.encode("ny","UTF-8") + "=" + URLEncoder.encode(coordinateDto.getY(), "UTF-8")); /*예보지점의 Y 좌표값*/
        URL url = new URL(urlBuilder.toString());
        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
        conn.setRequestMethod("GET");
        conn.setRequestProperty("Content-type", "application/json");
        System.out.println("Response code: " + conn.getResponseCode());
        BufferedReader rd;
        if(conn.getResponseCode() >= 200 && conn.getResponseCode() <= 300) {
            rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
        } else {
            rd = new BufferedReader(new InputStreamReader(conn.getErrorStream()));
        }
        StringBuilder result = new StringBuilder();
        String line;
        while ((line = rd.readLine()) != null) {
            result.append(line);
        }
        rd.close();
        conn.disconnect();
        return result.toString();
    }

    // JSON 데이터 파싱하기
    public static WeatherDto getWeather(String JSONdata) throws JSONException {

        JSONObject jObject = new JSONObject(JSONdata);
        JSONObject response = jObject.getJSONObject("response");
        JSONObject body = response.getJSONObject("body");
        JSONObject items = body.getJSONObject("items");
        JSONArray item = items.getJSONArray("item");

        String SKY = new JSONObject(item.get(5).toString()).getString("fcstValue");
        String Degree = new JSONObject(item.get(0).toString()).getString("fcstValue")+"°"; // 1시간 기온 TMP
        String RainyProb = new JSONObject(item.get(7).toString()).getString("fcstValue")+"%"; // 강수 확률 POP
        String RainyType = new JSONObject(item.get(6).toString()).getString("fcstValue"); // 강수 형태 PTY
        String WindSpeed = new JSONObject(item.get(4).toString()).getString("fcstValue"); // 풍속 WSD

        if(SKY.equals("1")) SKY = "맑음";
        else if(SKY.equals("3")) SKY = "구름 많음";
        else SKY = "흐림";

        if(RainyType.equals("0")) RainyType="없음";
        else if(RainyType.equals("1")) RainyType="비";
        else if(RainyType.equals("2")) RainyType="비/눈";
        else if(RainyType.equals("3")) RainyType="눈";
        else RainyType="소나기";
        double windSpeed = Double.parseDouble(WindSpeed);
        if(windSpeed<4.0) WindSpeed ="바람이 약하다(연기 흐름에 따라 풍향감지 가능)";
        else if(windSpeed>=4.0 && windSpeed<9.0) WindSpeed ="바람이 약간 강하다(안민에 감촉을 느끼면서 나뭇잎이 조금 흔들림)";
        else if(windSpeed>=9.0 && windSpeed<14) WindSpeed="바람이 강하다(나무 가지와 깃발이 가볍게 흔들림)";
        else WindSpeed="바람이 매우 강하다(먼지가 일고, 작은 나무 전체가 흔들림)";

        return new WeatherDto(SKY,Degree,RainyProb,RainyType,WindSpeed);
    }
}
