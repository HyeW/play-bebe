import {
  Box,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Grid,
  Typography
} from "@mui/material";
import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../store";
import PlaceCard from "./PlaceCard";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import {pink, grey} from "@mui/material/colors";

interface PlaceDialogProps {
  handleClose: () => void,
}

export default function PlaceDialog({handleClose}: PlaceDialogProps) {
  const openPlaceDialog = useSelector((state: RootState) => state.PlaceDialogReducer.openPlaceDialog);
  const placeName = useSelector((state: RootState) => state.PlaceDialogReducer.placeName);
  const address = useSelector((state: RootState) => state.PlaceDialogReducer.address);
  const rating = useSelector((state: RootState) => state.PlaceDialogReducer.rating);
  const visitCount = useSelector((state: RootState) => state.PlaceDialogReducer.visitCount);
  const distance = useSelector((state: RootState) => state.PlaceDialogReducer.distance);

  return (
    <Dialog
      open={openPlaceDialog}
      onClose={handleClose}
    >
      <DialogContent>
        <PlaceCard placeName={placeName} address={address} rating={rating} visitCount={visitCount} distance={distance}/>
        <WeatherInfo/>
        <DialogContentText mt={3}>
          {'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'}
        </DialogContentText>

      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>{'닫기'}</Button>
      </DialogActions>
    </Dialog>
  );
};

function WeatherInfo() {
  return (
    <Box bgcolor={grey[200]} borderRadius={1} p={1.5} mt={3}>
      <Chip label="이곳의 현재 날씨" sx={{mb: 1.5}} color="primary"/>
      <Grid container direction="row" spacing={1.5}>
        <Grid item xs><WeatherCard mainText="13C" subText="맑음"/></Grid>
        <Grid item xs><WeatherCard mainText="10%" subText="강수확률"/></Grid>
        <Grid item xs><WeatherCard mainText="10m/s" subText="풍속"/></Grid>
      </Grid>
    </Box>
  );
}

function WeatherCard(props: { mainText: string, subText: string }) {
  return (
    <Grid container direction="row" bgcolor="#fff" borderRadius={1} p={1}>
      <Grid item xs={4} sx={{display: 'flex', alignItems: 'center'}}>
        <WbSunnyIcon sx={{color: pink[500], fontSize: 43}}/>
      </Grid>
      <Grid item xs container direction="column">
        <Typography variant="h6">{props.mainText}</Typography>
        <Typography variant="body2">{props.subText}</Typography>
      </Grid>
    </Grid>
  )
}