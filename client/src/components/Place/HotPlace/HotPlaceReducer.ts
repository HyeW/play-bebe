// action
import {PlaceCardProps} from "../PlaceCard";

const HEADER = 'HotPlaceReducer';
const TYPE = {
  SET_DATA: `${HEADER}/SET_DATA` as const,
  SET_LATITUDE: `${HEADER}/SET_LATITUDE` as const,
  SET_LONGITUDE: `${HEADER}/SET_LONGITUDE` as const,
};

export const HotPlaceAction = {
  setData: (data: PlaceCardProps[]) => ({type: TYPE.SET_DATA, payload: data}),
  setLatitude: (lat: number) => ({type: TYPE.SET_LATITUDE, payload: lat}),
  setLongitude: (lng: number) => ({type: TYPE.SET_LONGITUDE, payload: lng}),
};

type HotPlaceActionType =
  ReturnType<typeof HotPlaceAction.setData> |
  ReturnType<typeof HotPlaceAction.setLatitude> |
  ReturnType<typeof HotPlaceAction.setLongitude>;


// state
type HotPlaceState = {
  data: PlaceCardProps[],
  latitude: number,
  longitude: number,
}

const INIT_HOT_PLACE_STATE: HotPlaceState = {
  data: [],
  latitude: 0,
  longitude: 0,
};


// reducer
export default function HotPlaceReducer(state: HotPlaceState = INIT_HOT_PLACE_STATE, action: HotPlaceActionType): HotPlaceState {
  switch (action.type) {
    case TYPE.SET_DATA:
      return {...state, data: action.payload};
    case TYPE.SET_LATITUDE:
      return {...state, latitude: action.payload};
    case TYPE.SET_LONGITUDE:
      return {...state, longitude: action.payload};
    default:
      return state;
  }
}