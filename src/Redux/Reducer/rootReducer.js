import { combineReducers } from "redux";
import shopReducer from "../Reducer/ShopReducer/shopReducer";
import { userAuthReducer } from "./userAuthReducer/userAuthReducer";
export const rootReducer = combineReducers({
  shop: shopReducer,
  user: userAuthReducer,
});
