// action
const HEADER = 'MenuBarReducer';
const TYPE = {
  SET_ANCHOR_ELEMENT_NAV: `${HEADER}/SET_ANCHOR_ELEMENT_NAV` as const,
  SET_ANCHOR_ELEMENT_USER: `${HEADER}/SET_ANCHOR_ELEMENT_USER` as const,
};

export const MenuBarAction = {
  setAnchorElementNav: (element: null | HTMLElement) => ({type: TYPE.SET_ANCHOR_ELEMENT_NAV, payload: element}),
  setAnchorElementUser: (element: null | HTMLElement) => ({type: TYPE.SET_ANCHOR_ELEMENT_USER, payload: element}),
};

type MenuBarActionType =
  ReturnType<typeof MenuBarAction.setAnchorElementNav> |
  ReturnType<typeof MenuBarAction.setAnchorElementUser>;


// state
type MenuBarState = {
  anchorElementNav: null | HTMLElement,
  anchorElementUser: null | HTMLElement,
}

const INIT_MENU_BAR_STATE: MenuBarState = {
  anchorElementNav: null,
  anchorElementUser: null,
};


// reducer
export default function MenuBarReducer(state: MenuBarState = INIT_MENU_BAR_STATE, action: MenuBarActionType): MenuBarState {
  switch (action.type) {
    case TYPE.SET_ANCHOR_ELEMENT_NAV:
      return {...state, anchorElementNav: action.payload};
    case TYPE.SET_ANCHOR_ELEMENT_USER:
      return {...state, anchorElementUser: action.payload};
    default:
      return state;
  }
}