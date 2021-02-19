import {all} from "redux-saga/effects";
import {getBooksFeedSagaWatcher} from "./booksFeed.saga";
import {getBookDetailSagaWatcher} from "./bookDetail.saga";
import {updateBookSagaWatcher} from "./updateBook.saga";

export default function* newsFeedSaga() {
    yield all([
        getBooksFeedSagaWatcher(),
        getBookDetailSagaWatcher(),
        updateBookSagaWatcher()
    ])
}