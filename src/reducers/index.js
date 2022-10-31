import { combineReducers } from "redux";

import shellReducer from "../containers/App/reducer";
import postShareReducer from "../pages/PostShare/reducer";

export default combineReducers({
  shellReducer,
  postShareReducer
});
