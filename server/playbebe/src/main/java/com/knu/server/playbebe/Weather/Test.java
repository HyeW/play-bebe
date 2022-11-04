package com.knu.server.playbebe.Weather;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.util.Arrays;
import java.util.HashMap;

public class Test {
        public static void main(String[] args) throws IOException, JSONException {

            StringBuilder urlBuilder = new StringBuilder("http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst"); /*URL*/
            urlBuilder.append("?" + URLEncoder.encode("serviceKey","UTF-8") + "=P67cLmcxkzL21GLQ9aYyoaxYg9d9OTbkc%2BcShD%2F6ce%2FiMzP4F2t7qA87%2Fa%2FtPCrzROxYqul87sS9Q0mO6kjPdg%3D%3D"); /*Service Key*/
            urlBuilder.append("&" + URLEncoder.encode("pageNo","UTF-8") + "=" + URLEncoder.encode("1", "UTF-8")); /*페이지번호*/
            urlBuilder.append("&" + URLEncoder.encode("numOfRows","UTF-8") + "=" + URLEncoder.encode("10", "UTF-8")); /*한 페이지 결과 수*/
            urlBuilder.append("&" + URLEncoder.encode("dataType","UTF-8") + "=" + URLEncoder.encode("JSON", "UTF-8")); /*요청자료형식(XML/JSON) Default: XML*/
            urlBuilder.append("&" + URLEncoder.encode("base_date","UTF-8") + "=" + URLEncoder.encode("20221104", "UTF-8")); /*‘21년 6월 28일 발표*/
            urlBuilder.append("&" + URLEncoder.encode("base_time","UTF-8") + "=" + URLEncoder.encode("1700", "UTF-8")); /*06시 발표(정시단위) */
            urlBuilder.append("&" + URLEncoder.encode("nx","UTF-8") + "=" + URLEncoder.encode("89", "UTF-8")); /*예보지점의 X 좌표값*/
            urlBuilder.append("&" + URLEncoder.encode("ny","UTF-8") + "=" + URLEncoder.encode("91", "UTF-8")); /*예보지점의 Y 좌표값*/
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

            System.out.println(result.toString());
            System.out.println();
            JSONObject jObject = new JSONObject(result.toString());
            JSONObject response = jObject.getJSONObject("response");
            System.out.println(response.toString());
            System.out.println();
            JSONObject body = response.getJSONObject("body");
            System.out.println(body.toString());
            System.out.println();
            JSONObject items = body.getJSONObject("items");
            System.out.println(items.toString());
            System.out.println();
            JSONArray item = items.getJSONArray("item");
            System.out.println(item.get(0).toString()); // 1시간 기온 TMP
            System.out.println(item.get(4).toString()); // 풍속 WSD
            System.out.println(item.get(5).toString()); // 하늘 상태 SKY
            System.out.println(item.get(6).toString()); // 강수 형태 PTY
            System.out.println(item.get(7).toString()); // 강수 확률 POP
    }
}
