// action
import {PlaceCardProps} from "../PlaceCard";

const HEADER = 'NormalPlaceReducer';
const TYPE = {
  SET_VALUE: `${HEADER}/SET_VALUE` as const,
  SET_DATA: `${HEADER}/SET_DATA` as const,
};

export const NormalPlaceAction = {
  setValue: (value: number) => ({type: TYPE.SET_VALUE, payload: value}),
  setData: (data: PlaceCardProps[]) => ({type: TYPE.SET_DATA, payload: data}),
};

type NormalPlaceActionType =
  ReturnType<typeof NormalPlaceAction.setValue>|
  ReturnType<typeof NormalPlaceAction.setData>;


// state
type NormalPlaceState = {
  value: number,
  data: PlaceCardProps[],
}

const INIT_NORMAL_PLACE_STATE: NormalPlaceState = {
  value: 0,
  data: [],
};


// reducer
export default function NormalPlaceReducer(state: NormalPlaceState = INIT_NORMAL_PLACE_STATE, action: NormalPlaceActionType): NormalPlaceState {
  switch (action.type) {
    case TYPE.SET_VALUE:
      return {...state, value: action.payload};
    case TYPE.SET_DATA:
      return {...state, data: action.payload};
    default:
      return state;
  }
}