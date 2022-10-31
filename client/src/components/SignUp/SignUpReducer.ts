// action
const HEADER = 'SignUpReducer';
const TYPE = {
  SET_EMAIL: `${HEADER}/SET_EMAIL` as const,
  SET_NAME: `${HEADER}/SET_NAME` as const,
  SET_PASSWORD: `${HEADER}/SET_PASSWORD` as const,
  SET_EMAIL_VALIDATION: `${HEADER}/SET_EMAIL_VALIDATION` as const,
};

export const SignUpAction = {
  setEmail: (email: string) => ({type: TYPE.SET_EMAIL, payload: email}),
  setName: (name: string) => ({type: TYPE.SET_NAME, payload: name}),
  setPassword: (password: string) => ({type: TYPE.SET_PASSWORD, payload: password}),
  setEmailValidation: (emailValidation: boolean) => ({type: TYPE.SET_EMAIL_VALIDATION, payload: emailValidation}),
};

type SignUpActionType =
  ReturnType<typeof SignUpAction.setEmail> |
  ReturnType<typeof SignUpAction.setName> |
  ReturnType<typeof SignUpAction.setPassword> |
  ReturnType<typeof SignUpAction.setEmailValidation>;


// state
type SignUpState = {
  email: string,
  name: string,
  password: string,
  emailValidation: boolean,
}

const INIT_SIGN_UP_STATE: SignUpState = {
  email: '',
  name: '',
  password: '',
  emailValidation: true,
};


// reducer
export default function SignUpReducer(state: SignUpState = INIT_SIGN_UP_STATE, action: SignUpActionType): SignUpState {
  switch (action.type) {
    case TYPE.SET_EMAIL:
      return {...state, email: action.payload};
    case TYPE.SET_NAME:
      return {...state, name: action.payload};
    case TYPE.SET_PASSWORD:
      return {...state, password: action.payload};
    case TYPE.SET_EMAIL_VALIDATION:
      return {...state, emailValidation: action.payload};
    default:
      return state;
  }
}