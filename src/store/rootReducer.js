import { combineReducers } from "redux";
import { dataReducer, infoReducer } from "./reducers";

export const rootReducer = combineReducers({
  info: infoReducer,
  data: dataReducer,
});
