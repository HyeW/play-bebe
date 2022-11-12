import {Box, Button, Grid, Tab, Tabs} from "@mui/material";
import {a11yProps, TabPanel} from "./TabPanel";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {NormalPlaceAction} from "./NormalPlaceReducer";
import React, {useEffect} from "react";
import HotPlaceCard from "../HotPlace/HotPlaceCard";
import {tempData} from "../HotPlace/HotPlace";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


export default function NormalPlace() {
  const dispatch = useDispatch();
  const value = useSelector((state: RootState) => state.NormalPlaceReducer.value);
  const data = useSelector((state: RootState) => state.NormalPlaceReducer.data);

  useEffect(() => {
    dispatch(NormalPlaceAction.setData(tempData));
  }, []);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    dispatch(NormalPlaceAction.setData(tempData));
    dispatch(NormalPlaceAction.setValue(newValue));
  };

  const handleClickSeeMoreButton = () => {
    dispatch(NormalPlaceAction.setData(data.concat(tempData)));
  };

  return (
    <Box mt={5}>
      <Tabs value={value} onChange={handleChange} aria-label="place tabs">
        <Tab label="거리순" value={0} {...a11yProps(0)}/>
        <Tab label="별점순" value={1} {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <PlaceCardList/>
        <SeeMoreButton handleClickSeeMoreButton={handleClickSeeMoreButton}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <PlaceCardList/>
        <SeeMoreButton handleClickSeeMoreButton={handleClickSeeMoreButton}/>
      </TabPanel>
    </Box>
  );
}

const PlaceCardList = () => {
  const data = useSelector((state: RootState) => state.NormalPlaceReducer.data);
  return (
    <Grid container spacing={3}>
      {data.map(data =>
        <Grid item xs={4} key={data.placeName}>
          <HotPlaceCard placeName={data.placeName} address={data.address} rating={data.rating}
                        visitCount={data.visitCount} distance={data.distance} isHotPlaceCard={false}/>
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