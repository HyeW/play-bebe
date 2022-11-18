import {Container} from "@mui/material";
import React from "react";
import {useNavigate} from "react-router-dom";
import ReviewList from "./ReviewList";
import {ReviewTitle} from "./ReviewCard";
import {GoToWriteReviewButton} from "./SeeReview";

export default function SeeReviewOnePlace() {
  const navigate = useNavigate();

  const handleClickGoToWriteReviewButton = () => {
    navigate('/write-review');

  };

  return (
    <Container maxWidth="lg">
      <GoToWriteReviewButton handleClickGoToWriteReviewButton={handleClickGoToWriteReviewButton}/>
      <ReviewTitle placeName={'무슨 장소'} address={'무슨 주소'}/>
      <ReviewList isOnePlace={true}/>
    </Container>
  )
}