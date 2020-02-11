import {
  ADD_MOVIE,
  DELETE_MOVIE,
  EDIT_MOVIE,
  FILTER_MOVIE,
  RATE_MOVIE,
  FETCH_MOVIE
} from "./const";

export const addmovie = payload => {
  return { type: ADD_MOVIE, payload };
};
export const deletemovie = payload => {
  return { type: DELETE_MOVIE, payload };
};
export const editmovie = payload => {
  return { type: EDIT_MOVIE, payload };
};
export const filtermovie = payload => {
  return { type: FILTER_MOVIE, payload };
};
export const ratemovie = payload => {
  return { type: RATE_MOVIE, payload };
};
export const fetchmovie = payload => {
  return { type: FETCH_MOVIE, payload };
};
