import axios from "axios";
import {PlaceCardProps} from "../components/Place/PlaceCard";

const getHotPlaceData = (latitude: number, longitude: number, callback: (data: PlaceCardProps[]) => void) => {
  const url = `/api/places/${latitude}/${longitude}`;
  axios.get(url)
    .then(response => {
      callback(response.data);
    })
    .catch(error => {
      alert(error);
      callback([]);
    });
};

const getNormalPlaceDistanceData = (seeMoreCount: number, latitude: number, longitude: number,
                                    callback: (data: PlaceCardProps[]) => void) => {
  const url = `/api/places/distance/${seeMoreCount}/${latitude}/${longitude}`;
  axios.get(url)
    .then(response => {
      callback(response.data);
    })
    .catch(error => {
      alert(error);
      callback([]);
    });
};

const getNormalPlaceStarsData = (seeMoreCount: number, latitude: number, longitude: number,
                                 callback: (data: PlaceCardProps[]) => void) => {
  const url = `/api/places/stars/${seeMoreCount}/${latitude}/${longitude}`;
  axios.get(url)
    .then(response => {
      callback(response.data);
    })
    .catch(error => {
      alert(error);
      callback([]);
    });
};

export {getHotPlaceData, getNormalPlaceDistanceData, getNormalPlaceStarsData};