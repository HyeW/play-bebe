package com.knu.server.playbebe.detail.service;
import com.knu.server.playbebe.detail.dto.DetailDto;
import com.knu.server.playbebe.recommend.model.Place;
import com.knu.server.playbebe.recommend.repository.PlaceRepository;
import com.knu.server.playbebe.review.model.Review;
import com.knu.server.playbebe.review.repository.ReviewRepository;
import com.knu.server.playbebe.visit.model.Visit;
import com.knu.server.playbebe.visit.repository.VisitRepository;
import com.knu.server.playbebe.weather.dto.CoordinateDto;
import com.knu.server.playbebe.weather.dto.DateTimeDto;
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
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class DetailService {
    private final PlaceRepository placeRepository;
    private final VisitRepository visitRepository;
    private final ReviewRepository reviewRepository;
    private final LocationRepository locationRepository;
    public DetailDto getPlaceInfo(long id){
        DetailDto detailDto = new DetailDto();
        Optional<Place> place_ = placeRepository.findById(id);
        Place place = place_.get();
        String placeName = place.getEstablishmentName();
        String placeAddress = place.getAddress();
        String placeTelephone = place.getTelephone();
        detailDto.setPlaceInfo(placeName,placeAddress,placeTelephone);
        return detailDto;
    }

    public DetailDto getVisitInfo(DetailDto detailDto, long id){
        List<Visit> visit_ = visitRepository.findAllByPlace_Id(id);
        int visit_count = visit_.size();
        detailDto.setVisitInfo(visit_count);
        return detailDto;
    }

    public DetailDto getWeatherInfo(DetailDto detailDto, long id) throws IOException, JSONException {
        DateTimeDto dateTimeDto = getCurDateTime(); // 현재 시간 정보
        RegionNameDto regionNameDto = getRegionName(id);
        CoordinateDto coordinateDto = getCurX_Y(regionNameDto); // 현재 위치에 따른 X,Y 좌료
        String JSONdata = getJSONdata(coordinateDto, dateTimeDto); // 날씨 JSON 정보
        WeatherDto weather = getWeather(JSONdata); // JSON 파싱해서 원하는 값 추출
        detailDto.setWeather(weather);
        return detailDto;
    }

    public DetailDto getReview(DetailDto detailDto, long id){
        List<Review> review_ =  reviewRepository.findAllByPlace_Id(id);
        String reviewContent = review_.get(0).getContent();
        detailDto.setReview(reviewContent,null);
        return detailDto;
    }

    public DetailDto getDistance(DetailDto detailDto, long place, double from_latitude, double from_longitude){
        Place place_ = placeRepository.findById(place).get();
        double to_latitude = place_.getLatitude();
        double to_longtitude = place_.getLongitude();

        double theta = from_longitude-to_longtitude;
        double dist = Math.sin(deg2rad(from_latitude)) * Math.sin(deg2rad(to_latitude)) + Math.cos(deg2rad(from_latitude))+ Math.cos(deg2rad(theta));

        dist = Math.acos(dist);
        dist = rad2deg(dist);
        dist = dist*60 * 1.1515;

        // meter로 표기
        dist = dist * 1609.344;
        detailDto.setDistance(dist);
        return detailDto;
    }

    // This function converts decimal degrees to radians
    private static double deg2rad(double deg) {
        return (deg * Math.PI / 180.0);
    }

    // This function converts radians to decimal degrees
    private static double rad2deg(double rad) {
        return (rad * 180 / Math.PI);
    }

    // 날씨 관련 함수들
    public RegionNameDto getRegionName(long id){
        String placeAddrss = placeRepository.findById(id).get().getAddress();
        String splitAddr[] = placeAddrss.split(" ");
        String phase1 = splitAddr[0];
        String phase2 = splitAddr[1];
        return new RegionNameDto(phase1,phase2);
    }

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

    public CoordinateDto getCurX_Y(RegionNameDto regionNameDto){
        // phase1, phase2에 따른 X,Y좌표 가져오기
        List<Location> location = locationRepository.findAllByPhase1AndPhase2(regionNameDto.getPhase1(),regionNameDto.getPhase2());
        String X = location.get(0).getX();
        String Y = location.get(0).getY();
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
        String Degree = new JSONObject(item.get(0).toString()).getString("fcstValue"); // 1시간 기온 TMP
        String RainyProb = new JSONObject(item.get(7).toString()).getString("fcstValue"); // 강수 확률 POP
        String RainyType = new JSONObject(item.get(6).toString()).getString("fcstValue"); // 강수 형태 PTY
        String WindSpeed = new JSONObject(item.get(4).toString()).getString("fcstValue"); // 풍속 WSD
        return new WeatherDto(SKY,Degree,RainyProb,RainyType,WindSpeed);
    }
}
