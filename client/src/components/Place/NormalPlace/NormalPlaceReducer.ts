// action
import {PlaceCardProps} from "../PlaceCard";

const HEADER = 'NormalPlaceReducer';
const TYPE = {
  SET_TAB_VALUE: `${HEADER}/SET_TAB_VALUE` as const,
  SET_DATA: `${HEADER}/SET_DATA` as const,
  SET_SEE_MORE_COUNT: `${HEADER}/SET_SEE_MORE_COUNT` as const,
};

export const NormalPlaceAction = {
  setTabValue: (value: number) => ({type: TYPE.SET_TAB_VALUE, payload: value}),
  setData: (data: PlaceCardProps[]) => ({type: TYPE.SET_DATA, payload: data}),
  setSeeMoreCount: (count: number) => ({type: TYPE.SET_SEE_MORE_COUNT, payload: count}),
};

type NormalPlaceActionType =
  ReturnType<typeof NormalPlaceAction.setTabValue> |
  ReturnType<typeof NormalPlaceAction.setData> |
  ReturnType<typeof NormalPlaceAction.setSeeMoreCount>;


// state
type NormalPlaceState = {
  tabValue: number,
  data: PlaceCardProps[],
  seeMoreCount: number,
}

const INIT_NORMAL_PLACE_STATE: NormalPlaceState = {
  tabValue: 0,
  data: [],
  seeMoreCount: 0,
};


// reducer
export default function NormalPlaceReducer(state: NormalPlaceState = INIT_NORMAL_PLACE_STATE, action: NormalPlaceActionType): NormalPlaceState {
  switch (action.type) {
    case TYPE.SET_TAB_VALUE:
      return {...state, tabValue: action.payload};
    case TYPE.SET_DATA:
      return {...state, data: action.payload};
    case TYPE.SET_SEE_MORE_COUNT:
      return {...state, seeMoreCount: action.payload};
    default:
      return state;
  }
}