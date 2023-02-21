import {Container} from "@mui/material";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import ReviewList from "./ReviewList";
import {ReviewTitle} from "./ReviewCard";
import {GoToWriteReviewButton} from "./SeeReview";
import {SeeReviewAction} from "./SeeReviewReducer";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store";
import {getOnePlaceReviewData} from "../../../api/review";

export default function SeeReviewOnePlace() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const placeId = useSelector((state: RootState) => state.PlaceDialogReducer.placeId);

  const [establishmentName, setEstablishmentName] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    getOnePlaceReviewData(placeId, (newData) => {
      dispatch(SeeReviewAction.setReviewData(newData));
      setEstablishmentName(newData[0].establishmentName);
      setAddress(newData[0].address);
    });
  }, []);

  const handleClickGoToWriteReviewButton = () => {
    navigate('/write-review');
  };

  return (
    <Container maxWidth="lg">
      <GoToWriteReviewButton handleClickGoToWriteReviewButton={handleClickGoToWriteReviewButton}/>
      <ReviewTitle establishmentName={establishmentName}
                   address={address}/>
      <ReviewList isOnePlace={true}/>
    </Container>
  )
}