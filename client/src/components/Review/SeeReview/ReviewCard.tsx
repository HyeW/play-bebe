import {Box, Grid, Rating, Stack, Typography} from "@mui/material";
import React from "react";

export interface ReviewCardProps extends ReviewTitleProps, ReviewContentProps, ReviewInfoProps, ReviewImageProps {
  isOnePlace?: boolean,
}

export default function ReviewCard({
                                     establishmentName,
                                     address,
                                     content,
                                     visitDate,
                                     createDate,
                                     nickname,
                                     rating,
                                     index,
                                     isOnePlace,
                                     reviewId
                                   }: ReviewCardProps) {
  return (
    <Box my={5}>
      {!isOnePlace && <ReviewTitle establishmentName={establishmentName} address={address}/>}
      <Grid container spacing={3}>
        {index !== undefined && index % 2 === 0 &&
            <Grid item xs>
                <ReviewImage reviewId={reviewId}/>
            </Grid>}
        <Grid item xs>
          <ReviewContent content={content}/>
          <ReviewInfo visitDate={visitDate} createDate={createDate} nickname={nickname} rating={rating}
                      index={index}></ReviewInfo>
        </Grid>
        {index !== undefined && index % 2 === 1 &&
            <Grid item xs>
                <ReviewImage reviewId={reviewId}/>
            </Grid>}
      </Grid>
    </Box>
  );
}

interface ReviewTitleProps {
  establishmentName: string,
  address: string,
}

export const ReviewTitle = ({establishmentName, address}: ReviewTitleProps) => {
  return (
    <Box mb={1}>
      <Typography
        variant="h6"
        color="primary"
        sx={{textDecoration: 'underline'}}>
        &nbsp;&nbsp;{establishmentName}&nbsp;&nbsp;
      </Typography>
      <Typography>
        &nbsp;&nbsp;{address}
      </Typography>
    </Box>
  );
};

interface ReviewImageProps {
  reviewId: number,
}

const ReviewImage = ({reviewId}: ReviewImageProps) => {
  return (
    <Box mt={1}>
      <img src={`/api/review/image/${reviewId}`} width="100%" height={500} alt=""></img>
    </Box>
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
    <Stack sx={{display: 'flex', alignItems: index && (index % 2 === 1) ? 'start' : 'end', mt: 3}}>
      <Typography color="text.secondary">방문일자 {visitDate}</Typography>
      <Typography color="text.secondary">작성일자 {createDate}</Typography>
      <Typography color="text.secondary">작성자 {nickname}</Typography>
      <Rating name="read-only" value={rating} readOnly/>
    </Stack>
  );
};