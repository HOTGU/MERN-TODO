import { combineReducers } from "redux";
import { todoReducer } from "./todo";
import { searchReducer } from "./search";

const rootReducer = combineReducers({
  todoReducer,
  searchReducer,
});

export default rootReducer;
