import { combineReducers } from "redux";
import getcategoryreducer from "./getcategoryreducer";

const RootReducer = combineReducers({
  getcategory: getcategoryreducer,
});

export default RootReducer;
