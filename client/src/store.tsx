import {combineReducers} from "redux";
import MenuBarReducer from "./components/MenuBar/MenuBarReducer";
import LoginReducer from "./components/Login/LoginReducer";
import SignUpReducer from "./components/SignUp/SignUpReducer";
import NormalPlaceReducer from "./components/Place/NormalPlace/NormalPlaceReducer";

const rootReducer = combineReducers({
  MenuBarReducer,
  LoginReducer,
  SignUpReducer,
  NormalPlaceReducer,
})

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;