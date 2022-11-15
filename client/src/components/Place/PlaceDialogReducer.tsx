// action
const HEADER = 'PlaceDialogReducer';
const TYPE = {
  SET_OPEN_PLACE_DIALOG: `${HEADER}/SET_OPEN_PLACE_DIALOG` as const,
  SET_PLACE_NAME: `${HEADER}/SET_PLACE_NAME` as const,
  SET_ADDRESS: `${HEADER}/SET_ADDRESS` as const,
  SET_RATING: `${HEADER}/SET_RATING` as const,
  SET_VISIT_COUNT: `${HEADER}/SET_VISIT_COUNT` as const,
  SET_DISTANCE: `${HEADER}/SET_DISTANCE` as const,
};

export const PlaceDialogAction = {
  setOpenPlaceDialog: (open: boolean) => ({type: TYPE.SET_OPEN_PLACE_DIALOG, payload: open}),
  setPlaceName: (placeName: string) => ({type: TYPE.SET_PLACE_NAME, payload: placeName}),
  setAddress: (address: string) => ({type: TYPE.SET_ADDRESS, payload: address}),
  setRating: (rating: number) => ({type: TYPE.SET_RATING, payload: rating}),
  setVisitCount: (visitCount: number) => ({type: TYPE.SET_VISIT_COUNT, payload: visitCount}),
  setDistance: (distance: string) => ({type: TYPE.SET_DISTANCE, payload: distance}),
};

type PlaceDialogActionType =
  ReturnType<typeof PlaceDialogAction.setOpenPlaceDialog> |
  ReturnType<typeof PlaceDialogAction.setPlaceName> |
  ReturnType<typeof PlaceDialogAction.setAddress> |
  ReturnType<typeof PlaceDialogAction.setRating> |
  ReturnType<typeof PlaceDialogAction.setVisitCount> |
  ReturnType<typeof PlaceDialogAction.setDistance>;


// state
type PlaceDialogState = {
  openPlaceDialog: boolean,
  placeName: string,
  address: string,
  rating: number,
  visitCount: number,
  distance: string,
}

const INIT_PLACE_DIALOG_STATE: PlaceDialogState = {
  openPlaceDialog: false,
  placeName: '',
  address: '',
  rating: 0,
  visitCount: 0,
  distance: '',
};


// reducer
export default function PlaceDialogReducer(state: PlaceDialogState = INIT_PLACE_DIALOG_STATE, action: PlaceDialogActionType): PlaceDialogState {
  switch (action.type) {
    case TYPE.SET_OPEN_PLACE_DIALOG:
      return {...state, openPlaceDialog: action.payload};
    case TYPE.SET_PLACE_NAME:
      return {...state, placeName: action.payload};
    case TYPE.SET_ADDRESS:
      return {...state, address: action.payload};
    case TYPE.SET_RATING:
      return {...state, rating: action.payload};
    case TYPE.SET_VISIT_COUNT:
      return {...state, visitCount: action.payload};
    case TYPE.SET_DISTANCE:
      return {...state, distance: action.payload};
    default:
      return state;
  }
}