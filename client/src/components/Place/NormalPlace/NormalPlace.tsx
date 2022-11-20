import {Box, Button, Grid, Tab, Tabs} from "@mui/material";
import {a11yProps, TabPanel} from "./TabPanel";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store";
import {NormalPlaceAction} from "./NormalPlaceReducer";
import React, {useEffect} from "react";
import PlaceCard, {PlaceCardProps} from "../PlaceCard";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {PlaceDialogAction} from "../PlaceDialogReducer";
import {getNormalPlaceDistanceData, getNormalPlaceStarsData} from "../../../api/place";

export default function NormalPlace() {
  const dispatch = useDispatch();
  const tabValue = useSelector((state: RootState) => state.NormalPlaceReducer.tabValue);
  const data = useSelector((state: RootState) => state.NormalPlaceReducer.data);
  const seeMoreCount = useSelector((state: RootState) => state.NormalPlaceReducer.seeMoreCount);
  const latitude = useSelector((state: RootState) => state.HotPlaceReducer.latitude);
  const longitude = useSelector((state: RootState) => state.HotPlaceReducer.longitude);

  useEffect(() => {
    getNormalPlaceDistanceData(seeMoreCount, latitude, longitude,
      (newData) => dispatch(NormalPlaceAction.setData(newData)));
  }, []);


  const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    if (newValue === 0) {
      getNormalPlaceDistanceData(seeMoreCount, latitude, longitude,
        (newData) => dispatch(NormalPlaceAction.setData(newData)));
    } else {
      getNormalPlaceStarsData(seeMoreCount, latitude, longitude,
        (newData) => dispatch(NormalPlaceAction.setData(newData)));
    }
    dispatch(NormalPlaceAction.setTabValue(newValue));
    dispatch(NormalPlaceAction.setSeeMoreCount(0));
  };

  const handleClickSeeMoreButton = () => {
    if (tabValue === 0) {
      getNormalPlaceDistanceData(seeMoreCount, latitude, longitude,
        (newData) => {
          dispatch(NormalPlaceAction.setData(data.concat(newData)));
          dispatch(NormalPlaceAction.setSeeMoreCount(seeMoreCount + 1));
        });
    } else {
      getNormalPlaceStarsData(seeMoreCount, latitude, longitude,
        (newData) => {
          dispatch(NormalPlaceAction.setData(data.concat(newData)));
          dispatch(NormalPlaceAction.setSeeMoreCount(seeMoreCount + 1));
        });
    }
  };

  return (
    <Box mt={5}>
      <Tabs value={tabValue} onChange={handleChangeTab} aria-label="place tabs">
        <Tab label="거리순" value={0} {...a11yProps(0)}/>
        <Tab label="별점순" value={1} {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={tabValue} index={0}>
        <NormalPlaceCardList/>
        <SeeMoreButton handleClickSeeMoreButton={handleClickSeeMoreButton}/>
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        <NormalPlaceCardList/>
        <SeeMoreButton handleClickSeeMoreButton={handleClickSeeMoreButton}/>
      </TabPanel>
    </Box>
  );
}

const NormalPlaceCardList = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.NormalPlaceReducer.data);

  const handleClickPlaceCard = (data: PlaceCardProps) => {
    dispatch(PlaceDialogAction.setOpenPlaceDialog(true));
    dispatch(PlaceDialogAction.setPlaceName(data.name));
    dispatch(PlaceDialogAction.setAddress(data.simpleAddress));
    dispatch(PlaceDialogAction.setRating(data.totalRating));
    dispatch(PlaceDialogAction.setDistance(data.distanceString));
    dispatch(PlaceDialogAction.setVisitCount(data.wantToVisit));
    dispatch(PlaceDialogAction.setPlaceId(data.placeId));
  };

  return (
    <Grid container spacing={3}>
      {data.map((data, index) =>
        <Grid item xs={4} key={index}>
          <PlaceCard name={data.name} simpleAddress={data.simpleAddress} totalRating={data.totalRating}
                     wantToVisit={data.wantToVisit} distanceString={data.distanceString} isHotPlaceCard={false}
                     onClick={() => handleClickPlaceCard(data)}/>
        </Grid>)}
    </Grid>
  )
}

interface SeeMoreButtonProps {
  handleClickSeeMoreButton: () => void,
}

export const SeeMoreButton = ({handleClickSeeMoreButton}: SeeMoreButtonProps) => {
  return (
    <Box sx={{display: 'flex', justifyContent: 'center'}} my={5}>
      <Button variant="contained" disableElevation size="large"
              sx={{borderRadius: 10, px: 10, py: 1.5}}
              endIcon={<KeyboardArrowDownIcon/>}
              onClick={handleClickSeeMoreButton}>{'더보기'}</Button>
    </Box>
  );
}