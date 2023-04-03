# play-bebe
아이와 함께 갈만한 유원시설 추천 및 정보 제공 서비스

- ✨2022 대경권 공공데이터 활용 경진대회 우수상 수상✨

## Introduction
전국 사용자를 위한 나들이 장소 추천 웹 사이트가 없으며 수도권 나들이 장소만 추천하는 사이트는 사용자 편의성을 고려한 위치 기반 장소 제공 서비스를 제공하지 않는다. 또한 유원지 시설의 인원파악이 어려워 이용객이 많은 경우, 시설 이용하기 위한 대기 시간이 증가하고 도로가 정체되는 문제가 생긴다.
<br>
이러한 불편함을 해소하기 위해 사용자 위치 기반으로 아이와 함께 갈 수 있는 유원시설을 추천하고 사용자가 유원시설의 인파를 예측할 수 있도록 하고자 한다. 
### 사용한 공공데이터 
  - [행정안전부_유원시설업](https://www.data.go.kr/data/15045089/fileData.do)
  - [기상청_단기예보 ((구)_동네예보) 조회서비스](https://www.data.go.kr/data/15084084/openapi.do)

## Goal
1. 전국 사용자를 위한 유원 시설 추천 서비스
    - 수도권 외 지역까지 아우르는 가족 나들이 추천 웹 사이트를 제공하고자 함
2. 사용자 중심 웹 서비스를 제공
    - 사용자의 편의성을 고려한 위치 기반 서비스를 제공하고자 함
    - 리뷰 기능을 통해 방문자들 간의 활발한 소통을 도모함
3. 특정 유원 시설 방문 인원 파악을 가능하게 한다.
    - '방문해요' 토글 버튼을 통해 해당 시설 방문 인원 파악 가능
    - 방문할 장소에 대한 인파 예측이 가능하여 기호에 따라 장소 선정 가능
  
## System Architecture
![image](https://user-images.githubusercontent.com/57346443/229488078-3b891d10-e8c6-4d3e-9153-810d3cd0c8e8.png)

1. **웹 백엔드**
    - Spring Framework로 개발된 웹 서버
    - 유원 시설에 대한 정보가 포함된 배치 데이터는 HDFS 안에 저장
    - REST API 통신으로 날씨 정보 사용
    - 사용자가 웹 프론트엔드를 통해 거리순/별점순으로 유원시설 추천을 요청하면, 웹 백엔드가 Spark와 REST API 통신을 통해 해당 요청을 적절하게 처리
## Expectation Effectiveness
- 거리순, 별점순으로 유원 시설을 추천함으로써 하나의 웹 사이트에서 조건에 맞게 원하는 정보를 획득
- 위치 기반 날씨 정보를 제공함으로써 급작스러운 날씨 변화에 대비 가능
- 유원 시설의 혼잡도를 제공함으로써 소음 등의 방해 없는 시간을 보내도록 일조 
## Development Environment
- Web-Backend
    - IDE: IntelliJ
    - Database: Amazon RDS for MySQL
    - Web Server: Ubuntu 22.04 LTS
    - Detail
        - Java: 11
        - Spring Boot: 2.7.5
        - java-jwt: 4.2.1, json: 20090211, proj4j: 1.1.5, spring-security
        
## Member
||김도희|백혜원|이도윤|허현진|
|:---:|:---:|:---:|:---:|:---:|
|Role|Web-Frontend|Web-Backend|Web-Backend|Web-Backend|
|GitHub|[@doheez](https://github.com/doheez)|[@HyeW](https://github.com/HyeW)|[@idoburnish](https://github.com/idoburnish)|[@heohyeonjin](https://github.com/heohyeonjin)|
