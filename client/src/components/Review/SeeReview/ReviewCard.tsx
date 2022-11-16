import {Box, Grid, Rating, Skeleton, Stack, Typography} from "@mui/material";
import React from "react";

export interface ReviewCardProps extends ReviewTitleProps, ReviewContentProps, ReviewInfoProps {}

export default function ReviewCard({placeName, address, content, visitDate, createDate, nickname, rating, index}: ReviewCardProps) {
  return (
    <Box my={5}>
      <ReviewTitle placeName={placeName} address={address}/>
      <Grid container spacing={3}>
        {index !== undefined && index%2 === 0 &&
            <Grid item xs>
                <ReviewImage/>
            </Grid>}
        <Grid item xs>
          <ReviewContent content={content}/>
          <ReviewInfo visitDate={visitDate} createDate={createDate} nickname={nickname} rating={rating} index={index}></ReviewInfo>
        </Grid>
        {index !== undefined && index%2 === 1 &&
            <Grid item xs>
                <ReviewImage/>
            </Grid>}
      </Grid>
    </Box>
  );
}

interface ReviewTitleProps {
  placeName: string,
  address: string,
}

const ReviewTitle = ({placeName, address}: ReviewTitleProps) => {
  return (
    <Box mb={1}>
      <Typography
        variant="h6"
        color="primary"
        sx={{textDecoration: 'underline'}}>
        &nbsp;&nbsp;{placeName}&nbsp;&nbsp;
      </Typography>
      <Typography>
        &nbsp;&nbsp;{address}
      </Typography>
    </Box>
  );
};

const ReviewImage = () => {
  return (
    <Skeleton variant="rectangular" width="100%" height={500} sx={{mt: 1}}/>
  )
}

interface ReviewContentProps {
  content: string,
}

const ReviewContent = ({content}: ReviewContentProps) => {
  return (
    <Typography>{content}</Typography>
  );
}

interface ReviewInfoProps {
  visitDate: string,
  createDate: string,
  nickname: string,
  rating: number,
  index?: number,
}

const ReviewInfo = ({visitDate, createDate, nickname, rating, index}: ReviewInfoProps) => {
  return (
    <Stack sx={{display: 'flex', alignItems: index && (index%2 === 1) ? 'start' : 'end', mt: 3}}>
      <Typography color="text.secondary">방문일자 {visitDate}</Typography>
      <Typography color="text.secondary">작성일자 {createDate}</Typography>
      <Typography color="text.secondary">작성자 {nickname}</Typography>
      <Rating name="read-only" value={rating} readOnly/>
    </Stack>
  );
};