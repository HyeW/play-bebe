// action
import {PlaceCardProps} from "../PlaceCard";

const HEADER = 'NormalPlaceReducer';
const TYPE = {
  SET_TAB_VALUE: `${HEADER}/SET_TAB_VALUE` as const,
  SET_DATA: `${HEADER}/SET_DATA` as const,
};

export const NormalPlaceAction = {
  setTabValue: (value: number) => ({type: TYPE.SET_TAB_VALUE, payload: value}),
  setData: (data: PlaceCardProps[]) => ({type: TYPE.SET_DATA, payload: data}),
};

type NormalPlaceActionType =
  ReturnType<typeof NormalPlaceAction.setTabValue> |
  ReturnType<typeof NormalPlaceAction.setData>;


// state
type NormalPlaceState = {
  tabValue: number,
  data: PlaceCardProps[],
}

const INIT_NORMAL_PLACE_STATE: NormalPlaceState = {
  tabValue: 0,
  data: [],
};


// reducer
export default function NormalPlaceReducer(state: NormalPlaceState = INIT_NORMAL_PLACE_STATE, action: NormalPlaceActionType): NormalPlaceState {
  switch (action.type) {
    case TYPE.SET_TAB_VALUE:
      return {...state, tabValue: action.payload};
    case TYPE.SET_DATA:
      return {...state, data: action.payload};
    default:
      return state;
  }
}