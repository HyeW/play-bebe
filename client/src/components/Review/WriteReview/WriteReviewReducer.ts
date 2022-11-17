// action
const HEADER = 'WriteReviewReducer';
const TYPE = {
  SET_WHERE: `${HEADER}/SET_WHERE` as const,
  SET_WHEN: `${HEADER}/SET_WHEN` as const,
  SET_RATING: `${HEADER}/SET_RATING` as const,
};

export const WriteReviewAction = {
  setWhere: (where: string) => ({type: TYPE.SET_WHERE, payload: where}),
  setWhen: (when: string) => ({type: TYPE.SET_WHEN, payload: when}),
  setRating: (rating: number | null) => ({type: TYPE.SET_RATING, payload: rating}),
};

type WriteReviewActionType = |
  ReturnType<typeof WriteReviewAction.setWhere> |
  ReturnType<typeof WriteReviewAction.setWhen> |
  ReturnType<typeof WriteReviewAction.setRating>;


// state
type WriteReviewState = {
  where: string,
  when: string,
  rating: number | null,
}

const INIT_WRITE_REVIEW_STATE: WriteReviewState = {
  where: '',
  when: '',
  rating: 0,
};


// reducer
export default function WriteReviewReducer(state: WriteReviewState = INIT_WRITE_REVIEW_STATE, action: WriteReviewActionType): WriteReviewState {
  switch (action.type) {
    case TYPE.SET_WHERE:
      return {...state, where: action.payload};
    case TYPE.SET_WHEN:
      return {...state, when: action.payload};
    case TYPE.SET_RATING:
      return {...state, rating: action.payload};
    default:
      return state;
  }
}