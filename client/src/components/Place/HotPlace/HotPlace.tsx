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

export default function HotPlace() {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.HotPlaceReducer.data);
  const latitude = useSelector((state: RootState) => state.HotPlaceReducer.latitude);
  const longitude = useSelector((state: RootState) => state.HotPlaceReducer.longitude);

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
    dispatch(PlaceDialogAction.setPlaceName(data.name));
    dispatch(PlaceDialogAction.setAddress(data.simpleAddress));
    dispatch(PlaceDialogAction.setRating(data.totalRating));
    dispatch(PlaceDialogAction.setDistance(data.distanceString));
    dispatch(PlaceDialogAction.setVisitCount(data.wantToVisit));
    dispatch(PlaceDialogAction.setPlaceId(data.placeId));
  };

  return (
    <div>
      <HotPlaceTitle/>
      <Slider {...settings}>
        {data.map(data =>
          <PlaceCard key={data.name} name={data.name} simpleAddress={data.name} totalRating={data.totalRating}
                     wantToVisit={data.wantToVisit} distanceString={data.distanceString} isHotPlaceCard={true}
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