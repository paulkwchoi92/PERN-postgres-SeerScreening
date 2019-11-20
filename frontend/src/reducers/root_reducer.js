import { combineReducers } from "redux";
import user from "./users_reducer";

const RootReducer = combineReducers({
  user
});

export default RootReducer;
