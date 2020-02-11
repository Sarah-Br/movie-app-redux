import {
  ADD_MOVIE,
  DELETE_MOVIE,
  EDIT_MOVIE,
  FILTER_MOVIE,
  RATE_MOVIE,
  FETCH_MOVIE
} from "../Actions/const";

import { data } from "../data";

const initstate = {
  Movie: data,
  rate: 3,
  titleFilter: "",
  loading: true
};

const moviereducers = (state = initstate, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return {
        ...state,
        Movie: [...state.Movie, action.payload]
      };
    case DELETE_MOVIE:
      return {
        ...state,
        Movie: state.Movie.filter(el => el.id !== action.payload)
      };
    case EDIT_MOVIE:
      return {
        ...state,
        Movie: state.Movie.map(el =>
          el.id === action.payload.id ? action.payload : el
        )
      };
    case FILTER_MOVIE:
      return {
        ...state,
        titleFilter: action.payload
      };
    case RATE_MOVIE:
      return { ...state, rate: action.payload };
    
      case FETCH_MOVIE:
    return { ...state,Movie: action.payload };
 

    default:
      return state;
  }
};



export default moviereducers;
