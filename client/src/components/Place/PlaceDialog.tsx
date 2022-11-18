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
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import PlaceCard from "./PlaceCard";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import OpacityIcon from '@mui/icons-material/Opacity';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import CloudIcon from '@mui/icons-material/Cloud';
import UmbrellaIcon from '@mui/icons-material/Umbrella';
import AirIcon from '@mui/icons-material/Air';
import {pink, grey} from "@mui/material/colors";
import {PlaceDialogAction} from "./PlaceDialogReducer";

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

const WEATHER_ICON_TYPE = {
  SUNNY: 0,
  CLOUDY: 1,
  RAINY: 2,
  SNOWY: 3,
  WATER_DROP: 4,
  WIND: 5,
};

function WeatherInfo() {
  const dispatch = useDispatch();
  const weather = useSelector((state: RootState) => state.PlaceDialogReducer.weather);
  const weatherIcon = useSelector((state: RootState) => state.PlaceDialogReducer.weatherIcon);

  useEffect(()=> {
    decideWeatherType("3", "0");
  }, []);

  const decideWeatherType = (skyType: string, rainyType: string) => {
    if (skyType === "1") {
      dispatch(PlaceDialogAction.setWeather("맑음"));
      dispatch(PlaceDialogAction.setWeatherIcon(WEATHER_ICON_TYPE.SUNNY));
    } else if (skyType === "3") {
      dispatch(PlaceDialogAction.setWeather("구름 많음"));
      dispatch(PlaceDialogAction.setWeatherIcon(WEATHER_ICON_TYPE.CLOUDY));
    } else {
      if (rainyType === "1" || rainyType === "2") {
        dispatch(PlaceDialogAction.setWeather("비"));
        dispatch(PlaceDialogAction.setWeatherIcon(WEATHER_ICON_TYPE.RAINY));
      } else if (rainyType === "3") {
        dispatch(PlaceDialogAction.setWeather("눈"));
        dispatch(PlaceDialogAction.setWeatherIcon(WEATHER_ICON_TYPE.SNOWY));
      } else {
        dispatch(PlaceDialogAction.setWeather("흐림"));
        dispatch(PlaceDialogAction.setWeatherIcon(WEATHER_ICON_TYPE.CLOUDY));
      }
    }
  };

  return (
    <Box bgcolor={grey[200]} borderRadius={1} p={1.5} mt={3}>
      <Chip label="이곳의 현재 날씨" sx={{mb: 1.5}} color="primary"/>
      <Grid container direction="row" spacing={1.5}>
        <Grid item xs><WeatherCard mainText="13C" subText={weather} iconType={weatherIcon}/></Grid>
        <Grid item xs><WeatherCard mainText="10%" subText="강수확률" iconType={WEATHER_ICON_TYPE.WATER_DROP}/></Grid>
        <Grid item xs><WeatherCard mainText="10m/s" subText="풍속" iconType={WEATHER_ICON_TYPE.WIND}/></Grid>
      </Grid>
    </Box>
  );
}

function WeatherCard(props: { mainText: string, subText: string, iconType: number }) {
  const renderIcon = (iconType: number) => {
    if(iconType === WEATHER_ICON_TYPE.SUNNY) {
      return <WbSunnyIcon sx={{color: pink[500], fontSize: 45}}/>
    } else if(iconType === WEATHER_ICON_TYPE.CLOUDY) {
      return <CloudIcon sx={{color: pink[500], fontSize: 45}}/>
    } else if(iconType === WEATHER_ICON_TYPE.RAINY) {
      return <UmbrellaIcon sx={{color: pink[500], fontSize: 45}}/>
    } else if(iconType === WEATHER_ICON_TYPE.SNOWY) {
      return <AcUnitIcon sx={{color: pink[500], fontSize: 45}}/>
    } else if(iconType === WEATHER_ICON_TYPE.WATER_DROP) {
      return <OpacityIcon sx={{color: pink[500], fontSize: 45}}/>
    } else if(iconType === WEATHER_ICON_TYPE.WIND) {
      return <AirIcon sx={{color: pink[500], fontSize: 45}}/>
    }
  };

  return (
    <Grid container direction="row" bgcolor="#fff" borderRadius={1} p={1}>
      <Grid item xs={4} sx={{display: 'flex', alignItems: 'center'}}>
        {renderIcon(props.iconType)}
      </Grid>
      <Grid item xs container direction="column">
        <Typography variant="h6">{props.mainText}</Typography>
        <Typography variant="body2">{props.subText}</Typography>
      </Grid>
    </Grid>
  )
}