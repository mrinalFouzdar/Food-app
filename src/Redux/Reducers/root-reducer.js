import { combineReducers } from "redux";
import { foodReducers } from "./Food-fetch-reducer/reducer";
export const rootReducer = combineReducers({
  food: foodReducers,
});
