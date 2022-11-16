import React, {ChangeEvent} from "react";
import {Box, Rating, TextField, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store";
import {WriteReviewAction} from "./WriteReviewReducer";

export default function ReviewInput() {
  const dispatch = useDispatch();
  const where = useSelector((state: RootState) => state.WriteReviewReducer.where);
  const when = useSelector((state: RootState) => state.WriteReviewReducer.when);
  const rating = useSelector((state: RootState) => state.WriteReviewReducer.rating);

  return (
    <>
      <WhereTextField onChange={e => dispatch(WriteReviewAction.setWhere(e.target.value))}
                      value={where}/>
      <WhenTextField onChange={e => dispatch(WriteReviewAction.setWhen(e.target.value))}
                     value={when}/>
      <StarRating onChange={(e, newValue) => dispatch(WriteReviewAction.setRating(newValue))}
                  value={rating}/>
    </>
  );
}

const WhereTextField = (props: {
  onChange: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void,
  value: string
}) => {
  return <>
    <Typography mb={1}>{'어디를 방문하셨나요?'}</Typography>
    <TextField
      id="where"
      label="장소 검색"
      variant="outlined"
      autoComplete="off"
      type="text"
      size="small"
      onChange={props.onChange}
      value={props.value}
      fullWidth
    />
  </>
};

const WhenTextField = (props: {
  onChange: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void,
  value: string
}) => {
  return <Box mt={3}>
    <Typography mb={1}>{'언제 방문하셨나요?'}</Typography>
    <TextField
      id="when"
      variant="outlined"
      autoComplete="off"
      type="date"
      size="small"
      onChange={props.onChange}
      value={props.value}
      fullWidth
    />
  </Box>
};

const StarRating = (props: {
  onChange: (e: React.SyntheticEvent, newValue: number | null) => void,
  value: number | null
}) => {
  return (
    <Box mt={3}>
      <Typography mb={1}>{'별점을 매겨주세요'}</Typography>
      <Rating
        id="rating"
        precision={0.5}
        size="large"
        onChange={props.onChange}
        value={props.value}
      />
    </Box>
  )
};