import { combineReducers } from "redux";
import {questionAll,questionUpdate} from "./questionReducer.js"

const rootReducer = combineReducers({
  questionState: questionAll,
  userState: questionUpdate
});

export default rootReducer;