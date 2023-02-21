import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HotPlace.css";
import {Typography} from "@mui/material";
import PlaceCard, {PlaceCardProps} from "../PlaceCard";
import {PlaceDialogAction} from "../PlaceDialogReducer";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {RootState} from "../../../store";
import {HotPlaceAction} from "./HotPlaceReducer";
import {getHotPlaceData} from "../../../api/place";
import {getDetailDialogData} from "../../../api/detail";

export default function HotPlace() {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.HotPlaceReducer.data);
  const latitude = useSelector((state: RootState) => state.HotPlaceReducer.latitude);
  const longitude = useSelector((state: RootState) => state.HotPlaceReducer.longitude);
  const userId = useSelector((state: RootState) => state.LoginReducer.userId);

  useEffect(() => {
    getHotPlaceData(latitude, longitude, (newData) => dispatch(HotPlaceAction.setData(newData)));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    variableWidth: true,
    draggable: false,
  };

  const handleClickPlaceCard = (data: PlaceCardProps) => {
    dispatch(PlaceDialogAction.setOpenPlaceDialog(true));
    dispatch(PlaceDialogAction.setPlaceId(data.id));
    dispatch(PlaceDialogAction.setLoading(true));

    getDetailDialogData(data.id, userId, latitude, longitude, (newData) => {
      dispatch(PlaceDialogAction.setPlaceName(newData.placeName));
      dispatch(PlaceDialogAction.setAddress(newData.placeAddress));
      // 전화번호는 UI 생략해서 데이터 안 씀
      dispatch(PlaceDialogAction.setVisitCount(newData.visitNum));
      dispatch(PlaceDialogAction.setReviewContent(newData.reviewContent));
      dispatch(PlaceDialogAction.setDistance(newData.distance));
      dispatch(PlaceDialogAction.setSky(newData.weather.sky));
      dispatch(PlaceDialogAction.setDegree(newData.weather.degree));
      dispatch(PlaceDialogAction.setRainyProb(newData.weather.rainyProb));
      dispatch(PlaceDialogAction.setRainyType(newData.weather.rainyType));
      dispatch(PlaceDialogAction.setWindSpeed(newData.weather.windSpeed));
      dispatch(PlaceDialogAction.setPictureId(newData.pictureId));
      dispatch(PlaceDialogAction.setRating(newData.rating));
      dispatch(PlaceDialogAction.setIsVisit(newData.visitSelected));
      dispatch(PlaceDialogAction.setLoading(false));
    });
  };

  return (
    <div>
      <HotPlaceTitle/>
      <Slider {...settings}>
        {data.map((data, index) =>
          <PlaceCard key={index} name={data.name} simpleAddress={data.name} totalRating={data.totalRating}
                     wantToVisit={data.wantToVisit} distanceString={data.distanceString} isHotPlaceCard={true}
                     id={data.id} reviewId={data.reviewId}
                     onClick={() => handleClickPlaceCard(data)}/>)}
      </Slider>
    </div>
  );
}

const HotPlaceTitle = () => {
  return (
    <Typography
      variant="h6"
      color="primary"
      sx={{textDecoration: 'underline', mt: 3}}>
      &nbsp;&nbsp;오늘의 핫플&nbsp;&nbsp;
    </Typography>
  );
};