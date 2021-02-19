import {call, put, takeLatest} from "redux-saga/effects";
import {GET_BOOKS_FEED, GET_BOOKS_FEED_SUCCESS, GET_BOOKS_FEED_ERROR} from "../../actions/booksFeed";

function* booksFeedSaga(action) {
    try{
        const data = yield call(fetchBooksData, action.payload);
        yield put({
            type: GET_BOOKS_FEED_SUCCESS, payload: data.all
        })
    }catch(error) {
        yield put({
            type: GET_BOOKS_FEED_ERROR, payload: error
        })
    }
}

async function fetchBooksData(payload) {
    try {
        let res = await fetch("/api/fetchBooks");
        return await res.json();
        //return {all: [{id:101, title: "Ikigai", count: 4},{id:102, title: "Shoe Dog", count: 0}]};
    }catch(err) {
        return err; 
    }
}

export function* getBooksFeedSagaWatcher() {
    yield takeLatest(GET_BOOKS_FEED, booksFeedSaga)
}