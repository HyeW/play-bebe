import {Box, Button, Container} from "@mui/material";
import ReviewInput from "./ReviewInput";
import ReviewTextEditor from "./ReviewTextEditor";
import "./WriteReview.css";
import CreateIcon from "@mui/icons-material/Create";
import React from "react";

export default function WriteReview() {
  return (
    <Container maxWidth="md">
      <Box my={7} p={6} sx={{border: 1, borderRadius: 1, borderColor: 'secondary.dark'}}>
        <ReviewInput/>
        <ReviewTextEditor/>
        <WriteButton handleClickWriteButton={()=>{}}/>
      </Box>
    </Container>
  );
}

function WriteButton(props: {
  handleClickWriteButton: ()=>void,
}) {
  return (
    <Box sx={{display: 'flex', justifyContent: 'center'}} mt={5}>
      <Button variant="contained" size="large" disableElevation
              sx={{borderRadius: 10, px: 10, py: 1.5}}
              startIcon={<CreateIcon/>}
              onClick={props.handleClickWriteButton}>{'등록하기'}</Button>
    </Box>
  )
}