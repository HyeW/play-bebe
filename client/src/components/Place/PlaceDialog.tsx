import {Button, Dialog, DialogActions, DialogContent, DialogContentText} from "@mui/material";
import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../store";
import PlaceCard from "./PlaceCard";

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