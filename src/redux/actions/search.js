import { SEARCH_MOVIE_START } from "../../consts/actionTypes.js";

export const searchMovie = payload => ({
    type: SEARCH_MOVIE_START,
    payload
});