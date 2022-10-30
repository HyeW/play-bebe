import {combineReducers} from "redux";
import MenuBarReducer from "./components/MenuBar/MenuBarReducer";

const rootReducer = combineReducers({
  MenuBarReducer,
})

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;