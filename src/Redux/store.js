import { createStore } from "redux";
import { reducer } from "./reducer";
const store = createStore(
  reducer
  // window.__REDUX_DEVTOOLS_EXTENSION_ || window.__REDUX_DEVTOOLS_EXTENSION__()
);
export { store };
