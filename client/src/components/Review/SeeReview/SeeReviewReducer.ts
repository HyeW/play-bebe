// action
import {ReviewCardProps} from "./ReviewCard";

const HEADER = 'SeeReviewReducer';
const TYPE = {
  SET_REVIEW_DATA: `${HEADER}/SET_REVIEW_DATA` as const,
  SET_SEE_MORE_COUNT: `${HEADER}/SET_SEE_MORE_COUNT` as const,
};

export const SeeReviewAction = {
  setReviewData: (data: ReviewCardProps[]) => ({type: TYPE.SET_REVIEW_DATA, payload: data}),
  setSeeMoreCount: (count: number) => ({type: TYPE.SET_SEE_MORE_COUNT, payload: count}),
};

type SeeReviewActionType = |
  ReturnType<typeof SeeReviewAction.setReviewData> |
  ReturnType<typeof SeeReviewAction.setSeeMoreCount>;


// state
type SeeReviewState = {
  reviewData: ReviewCardProps[],
  seeMoreCount: number,
}

const INIT_SEE_REVIEW_STATE: SeeReviewState = {
  reviewData: [],
  seeMoreCount: 0,
};


// reducer
export default function SeeReviewReducer(state: SeeReviewState = INIT_SEE_REVIEW_STATE, action: SeeReviewActionType): SeeReviewState {
  switch (action.type) {
    case TYPE.SET_REVIEW_DATA:
      return {...state, reviewData: action.payload};
    case TYPE.SET_SEE_MORE_COUNT:
      return {...state, seeMoreCount: action.payload};
    default:
      return state;
  }
}