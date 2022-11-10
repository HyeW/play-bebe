import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HotPlace.css";
import {Typography} from "@mui/material";

export default function HotPlace() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div>
      <HotPlaceTitle/>
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
        <div>
          <h3>7</h3>
        </div>
        <div>
          <h3>8</h3>
        </div>
        <div>
          <h3>9</h3>
        </div>
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
        &nbsp;&nbsp;이번 주 핫플&nbsp;&nbsp;
      </Typography>
  );
};