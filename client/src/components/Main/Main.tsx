import HotPlace from "../Place/HotPlace/HotPlace";
import {Container} from "@mui/material";
import React, {useEffect} from "react";
import {getLocation} from "../../utils/location";
import SearchBar from "../SearchBar/SearchBar";
import NormalPlace from "../Place/NormalPlace/NormalPlace";
import PlaceDialog from "../Place/PlaceDialog";
import {useDispatch} from "react-redux";
import {PlaceDialogAction} from "../Place/PlaceDialogReducer";

export default function () {
  const dispatch = useDispatch();

  useEffect(() => {
    const gsLocation = getLocation();
    console.info(`gsLocation: ${JSON.stringify(gsLocation)}`);
  }, []);

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