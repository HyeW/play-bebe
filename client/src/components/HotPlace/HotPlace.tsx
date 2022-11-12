import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HotPlace.css";
import {Typography} from "@mui/material";
import HotPlaceCard, {HotPlaceCardProps} from "./HotPlaceCard";

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
        {tempData.map(data =>
          <HotPlaceCard key={data.placeName} placeName={data.placeName} address={data.address} rating={data.rating}
                        visitCount={data.visitCount} distance={data.distance} isHotPlaceCard={true}/>)}
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

export const tempData: HotPlaceCardProps[] = [
  {placeName: '편백숲체험농장', address: '대구시 동구', rating: 4.7, visitCount: 136, distance: '8.6km'},
  {placeName: 'A장소', address: 'A주소', rating: 4.7, visitCount: 136, distance: '8.6km'},
  {placeName: 'B장소', address: 'B주소', rating: 4.7, visitCount: 136, distance: '8.6km'},
  {placeName: 'C장소', address: 'C주소', rating: 4.7, visitCount: 136, distance: '8.6km'},
  {placeName: 'D장소', address: 'D주소', rating: 4.7, visitCount: 136, distance: '8.6km'},
  {placeName: 'E장소', address: 'E주소', rating: 4.7, visitCount: 136, distance: '8.6km'},
]