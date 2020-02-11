import { createStore } from "redux";
import moviereducers from "./MovieReducers/moviereducers";

const store = createStore(
  moviereducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
