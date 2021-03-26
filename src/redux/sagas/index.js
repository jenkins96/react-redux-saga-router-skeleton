import { all } from 'redux-saga/effects';
import search, { searchMovie } from "./search.js";

export default function* rootSaga() {
	yield all( [
        search()
    ] );
}
