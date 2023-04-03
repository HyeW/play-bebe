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

## Feature
### 1. 오늘의 핫플
방문 예정자 수를 기반으로 인기 유원시설을 선정하여 오늘의 핫플을 추천한다. 캐러샐 형식으로 카드를 넘겨볼 수 있다.

![오늘의 핫플](https://user-images.githubusercontent.com/57346425/229525035-c1b2b021-4dab-4cec-9e1d-03c2741b55de.png)

### 2. 거리순/별점순 유원시설 추천
사용자의 현위치로부터 가까운 거리순으로, 또는 장소의 별점순으로 유원시설을 추천한다. 거리순/별점순은 정렬은 탭으로 나뉘어 있어 쉽게 전환할 수 있으며, 더보기 버튼을 클릭하여 장소 카드를 추가로 로드할 수 있다.

![거리순,별점순](https://user-images.githubusercontent.com/57346425/229527337-6c95c036-7541-4a91-9102-6308b948adce.png)

### 3. 유원시설 세부 정보
장소 카드를 클릭하면 팝업 화면을 통해 세부 정보를 확인할 수 있다. 유원시설이 있는 지역의 날씨 정보를 실시간으로 알려준다. "방문해요" 버튼을 통해 유원시설 당일 방문객 수를 예측할 수 있다.

![image](https://user-images.githubusercontent.com/57346425/229528819-6f8162db-7c23-4ab2-a6be-349f9a9f9870.png)

### 4. 리뷰 작성
유원시설에 대한 별점을 매기며 회원 리뷰를 남길 수 있다. 리뷰 작성을 위해서 로그인이 필요하다.

![리뷰 작성](https://user-images.githubusercontent.com/57346425/229529587-fb49c1dc-cd60-4174-bccc-0c2970dfaafd.png)

### 5. 리뷰 확인
"회원 리뷰" 카테고리에서 다른 회원들의 유원시설 리뷰를 둘러볼 수 있다. SNS의 피드처럼 다양한 장소들에 대한 리뷰를 최신 작성일자 순으로 확인 가능하다. 또한, 유원시설 세부 정보 팝업 화면의 "리뷰 더보기" 버튼을 통해 회원 리뷰 페이지로 넘어온 경우 해당 유원시설에 대한 리뷰만을 모아서 볼 수 있다.

![회원리뷰](https://user-images.githubusercontent.com/57346425/229531831-075d9c7a-6a60-43aa-8db0-58281bd4ee3b.png)


## System Architecture
![image](https://user-images.githubusercontent.com/57346443/229488078-3b891d10-e8c6-4d3e-9153-810d3cd0c8e8.png)

1. **웹 백엔드**
    - Spring Framework로 개발된 웹 서버
    - 유원 시설에 대한 정보가 포함된 배치 데이터는 HDFS 안에 저장
    - REST API 통신으로 날씨 정보 사용
    - 사용자가 웹 프론트엔드를 통해 거리순/별점순으로 유원시설 추천을 요청하면, 웹 백엔드가 Spark와 REST API 통신을 통해 해당 요청을 적절하게 처리
2. **웹 프론트엔드**
    - TypeScript, React 기반 웹 애플리케이션
    - Redux를 활용하여 효율적인 상태 관리
    - Axios 라이브러리를 사용하여 웹 백엔드와 REST API 통신으로 데이터를 JSON 형식으로 받아서 처리
    - 리액트 라우터를 적용하여 클라이언트 단에서 페이지 라우팅
    - Geolocation API를 통해 사용자의 위도, 경도 정보 획득
    
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
- Web-Frontend
    - IDE: WebStorm
    - Detail
        - Node.js: 18.12.0
        - React: 18.2.0
        - TypeScript: 4.4.2
        - Redux: 4.2.0, React Redux: 8.0.4
        - MUI Core (Material UI): 5.10.11
        - Axios: 1.1.3
        - React Router: 6.4.2
        
## Member
||김도희|백혜원|이도윤|허현진|
|:---:|:---:|:---:|:---:|:---:|
|Role|Web-Frontend|Web-Backend|Web-Backend|Web-Backend|
|GitHub|[@doheez](https://github.com/doheez)|[@HyeW](https://github.com/HyeW)|[@idoburnish](https://github.com/idoburnish)|[@heohyeonjin](https://github.com/heohyeonjin)|
