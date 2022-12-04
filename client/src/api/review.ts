import axios from "axios";
import {ReviewCardProps} from "../components/Review/SeeReview/ReviewCard";

const getReviewData = (seeMoreCount: number, callback: (data: ReviewCardProps[]) => void) => {
  const url = `/api/review/${seeMoreCount}`;
  axios.get(url)
    .then(response => {
      const newData = response.data.latestReview;
      callback(newData);
      console.log(url)
      console.log(newData)
    }).catch(error => {
    alert(error);
    callback([]);
  })
};

const getOnePlaceReviewData = (placeId: number, callback: (data: ReviewCardProps[]) => void) => {
  const url = `/api/review/place/${placeId}`;
  axios.get(url)
    .then(response => {
      const newData = response.data.latestReview;
      console.log(newData)
      callback(newData);
    }).catch(error => {
    alert(error);
    callback([]);
  })
};

export {getReviewData, getOnePlaceReviewData};