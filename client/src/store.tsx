import {combineReducers} from "redux";
import MenuBarReducer from "./components/MenuBar/MenuBarReducer";
import LoginReducer from "./components/Login/LoginReducer";

const rootReducer = combineReducers({
  MenuBarReducer,
  LoginReducer,
})

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;