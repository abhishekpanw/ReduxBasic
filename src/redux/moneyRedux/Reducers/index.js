import { combineReducers } from "redux";
import reducer from "./Reducer";

const allReducers = combineReducers({
   counter : reducer
});
export default allReducers;