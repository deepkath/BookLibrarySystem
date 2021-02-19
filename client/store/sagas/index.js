import {all} from "redux-saga/effects";
import booksFeedSaga from "./booksFeed";

export default function* rootSaga() {
    yield all([
        booksFeedSaga()
    ]);
}