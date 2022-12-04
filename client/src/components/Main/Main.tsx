import HotPlace from "../Place/HotPlace/HotPlace";
import {Container} from "@mui/material";
import React, {useEffect} from "react";
import SearchBar from "../SearchBar/SearchBar";
import NormalPlace from "../Place/NormalPlace/NormalPlace";
import PlaceDialog from "../Place/PlaceDialog";
import {useDispatch} from "react-redux";
import {PlaceDialogAction} from "../Place/PlaceDialogReducer";
import {useGeolocation} from "../../hooks/useGeolocation";
import {HotPlaceAction} from "../Place/HotPlace/HotPlaceReducer";

export default function () {
  const dispatch = useDispatch();
  const location = useGeolocation();

  useEffect(() => {
    if (location.loaded) {
      dispatch(HotPlaceAction.setLatitude(location.coordinates.lat));
      dispatch(HotPlaceAction.setLongitude(location.coordinates.lng));
    }
  })

  const handleClosePlaceDialog = () => {
    dispatch(PlaceDialogAction.setOpenPlaceDialog(false));
  }

  return (
    <Container maxWidth="lg">
      <HotPlace/>
      <SearchBar/>
      <NormalPlace/>
      <PlaceDialog handleClose={handleClosePlaceDialog}/>
    </Container>
  );
}