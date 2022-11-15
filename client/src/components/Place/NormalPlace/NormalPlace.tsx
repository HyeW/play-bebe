import {Box, Button, Grid, Tab, Tabs} from "@mui/material";
import {a11yProps, TabPanel} from "./TabPanel";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store";
import {NormalPlaceAction} from "./NormalPlaceReducer";
import React, {useEffect} from "react";
import PlaceCard, {PlaceCardProps} from "../PlaceCard";
import {tempData} from "../HotPlace/HotPlace";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {PlaceDialogAction} from "../PlaceDialogReducer";

export default function NormalPlace() {
  const dispatch = useDispatch();
  const tabValue = useSelector((state: RootState) => state.NormalPlaceReducer.tabValue);
  const data = useSelector((state: RootState) => state.NormalPlaceReducer.data);

  useEffect(() => {
    dispatch(NormalPlaceAction.setData(tempData));
  }, []);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    dispatch(NormalPlaceAction.setData(tempData));
    dispatch(NormalPlaceAction.setTabValue(newValue));
  };

  const handleClickSeeMoreButton = () => {
    dispatch(NormalPlaceAction.setData(data.concat(tempData)));
  };

  return (
    <Box mt={5}>
      <Tabs value={tabValue} onChange={handleChange} aria-label="place tabs">
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
    dispatch(PlaceDialogAction.setPlaceName(data.placeName));
    dispatch(PlaceDialogAction.setAddress(data.address));
    dispatch(PlaceDialogAction.setRating(data.rating));
    dispatch(PlaceDialogAction.setDistance(data.distance));
    dispatch(PlaceDialogAction.setVisitCount(data.visitCount));
  };

  return (
    <Grid container spacing={3}>
      {data.map(data =>
        <Grid item xs={4} key={data.placeName}>
          <PlaceCard placeName={data.placeName} address={data.address} rating={data.rating}
                     visitCount={data.visitCount} distance={data.distance} isHotPlaceCard={false}
                     onClick={() => handleClickPlaceCard(data)}/>
        </Grid>)}
    </Grid>
  )
}

interface SeeMoreButtonProps {
  handleClickSeeMoreButton: () => void,
}

const SeeMoreButton = ({handleClickSeeMoreButton}: SeeMoreButtonProps) => {
  return (
    <Box sx={{display: 'flex', justifyContent: 'center'}} my={5}>
      <Button variant="contained" disableElevation size="large"
              sx={{borderRadius: 10, px: 10, py: 1.5}}
              endIcon={<KeyboardArrowDownIcon/>}
              onClick={handleClickSeeMoreButton}>{'더보기'}</Button>
    </Box>
  );
}