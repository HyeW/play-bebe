// action
const HEADER = 'PlaceDialogReducer';
const TYPE = {
  SET_OPEN_PLACE_DIALOG: `${HEADER}/SET_OPEN_PLACE_DIALOG` as const,
  SET_PLACE_NAME: `${HEADER}/SET_PLACE_NAME` as const,
};

export const PlaceDialogAction = {
  setOpenPlaceDialog: (open: boolean) => ({type: TYPE.SET_OPEN_PLACE_DIALOG, payload: open}),
  setPlaceName: (placeName: string) => ({type: TYPE.SET_PLACE_NAME, payload: placeName}),
};

type PlaceDialogActionType =
  ReturnType<typeof PlaceDialogAction.setOpenPlaceDialog>|
  ReturnType<typeof PlaceDialogAction.setPlaceName>;


// state
type PlaceDialogState = {
  openPlaceDialog: boolean,
  placeName: string,
}

const INIT_PLACE_DIALOG_STATE: PlaceDialogState = {
  openPlaceDialog: false,
  placeName: '',
};


// reducer
export default function PlaceDialogReducer(state: PlaceDialogState = INIT_PLACE_DIALOG_STATE, action: PlaceDialogActionType): PlaceDialogState {
  switch (action.type) {
    case TYPE.SET_OPEN_PLACE_DIALOG:
      return {...state, openPlaceDialog: action.payload};
    case TYPE.SET_PLACE_NAME:
      return {...state, placeName: action.payload};
    default:
      return state;
  }
}