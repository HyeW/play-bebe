import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HotPlace.css";
import {Typography} from "@mui/material";
import HotPlaceCard from "./HotPlaceCard";

export default function HotPlace() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    variableWidth: true,
  };
  return (
    <div>
      <HotPlaceTitle/>
      <Slider {...settings}>
        <HotPlaceCard/>
        <HotPlaceCard/>
        <HotPlaceCard/>
        <HotPlaceCard/>
        <HotPlaceCard/>
        <HotPlaceCard/>
        <HotPlaceCard/>
        <HotPlaceCard/>
        <HotPlaceCard/>
        <HotPlaceCard/>
        <HotPlaceCard/>
        <HotPlaceCard/>
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