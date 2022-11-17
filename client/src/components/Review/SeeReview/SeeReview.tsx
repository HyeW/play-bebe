import {Alert, Box, Button, Container} from "@mui/material";
import CreateIcon from '@mui/icons-material/Create';
import React from "react";
import {useNavigate} from "react-router-dom";
import ReviewList from "./ReviewList";

export default function SeeReview() {
  const navigate = useNavigate();

  const handleClickGoToWriteReviewButton = () => {
    navigate('/write-review');

  };

  return (
    <Container maxWidth="lg">
      <GoToWriteReviewButton handleClickGoToWriteReviewButton={handleClickGoToWriteReviewButton}/>
      <Alert severity="info">{'다른 플베 회원님들은 최근에 이런 곳을 다녀왔대요!'}</Alert>
      <ReviewList/>
    </Container>
  )
}

interface GoToWriteReviewButtonProps {
  handleClickGoToWriteReviewButton: ()=>void,
}
const GoToWriteReviewButton = ({handleClickGoToWriteReviewButton}: GoToWriteReviewButtonProps) => {
  return (
    <Box sx={{display: 'flex', justifyContent: 'center'}} my={5}>
      <Button variant="outlined" size="large"
              sx={{borderRadius: 10, px: 10, py: 1.5}}
              startIcon={<CreateIcon/>}
              onClick={handleClickGoToWriteReviewButton}>{'나도 리뷰 쓰기'}</Button>
    </Box>
  );
}