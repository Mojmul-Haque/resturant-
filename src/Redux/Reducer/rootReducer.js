import { combineReducers } from "redux";
import shopReducer from "../Reducer/ShopReducer/shopReducer"
export const rootReducer = combineReducers({
    shop: shopReducer,
})