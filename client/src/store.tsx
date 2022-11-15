import {combineReducers} from "redux";
import MenuBarReducer from "./components/MenuBar/MenuBarReducer";
import LoginReducer from "./components/Login/LoginReducer";
import SignUpReducer from "./components/SignUp/SignUpReducer";
import NormalPlaceReducer from "./components/Place/NormalPlace/NormalPlaceReducer";
import PlaceDialogReducer from "./components/Place/PlaceDialogReducer";
import SeeReviewReducer from "./components/Review/SeeReview/SeeReviewReducer";

const rootReducer = combineReducers({
  MenuBarReducer,
  LoginReducer,
  SignUpReducer,
  NormalPlaceReducer,
  PlaceDialogReducer,
  SeeReviewReducer,
})

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;