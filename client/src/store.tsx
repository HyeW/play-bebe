import {combineReducers} from "redux";
import MenuBarReducer from "./components/MenuBar/MenuBarReducer";
import LoginReducer from "./components/Login/LoginReducer";
import SignUpReducer from "./components/SignUp/SignUpReducer";

const rootReducer = combineReducers({
  MenuBarReducer,
  LoginReducer,
  SignUpReducer,
})

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;