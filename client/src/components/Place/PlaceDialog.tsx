import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../store";

interface PlaceDialogProps {
  handleClose: () => void,
}

export default function PlaceDialog({handleClose}: PlaceDialogProps) {
  const openPlaceDialog = useSelector((state: RootState) => state.PlaceDialogReducer.openPlaceDialog);
  const placeName = useSelector((state: RootState) => state.PlaceDialogReducer.placeName);

  return (
    <Dialog
      open={openPlaceDialog}
      onClose={handleClose}
      aria-labelledby="place-dialog-title"
      aria-describedby="place-dialog-description"
    >
      <DialogTitle id="place-dialog-title">
        {placeName}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="place-dialog-description">
          {'리뷰 내용...?'}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>{'닫기'}</Button>
      </DialogActions>
    </Dialog>
  );
};