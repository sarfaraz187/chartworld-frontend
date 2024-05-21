import { combineReducers } from "redux";
import guiReducer from "./guiReducer";

const rootReducer = combineReducers({ gui: guiReducer });

export default rootReducer;
