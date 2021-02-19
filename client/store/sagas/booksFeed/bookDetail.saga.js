import {call, put, takeLatest} from "redux-saga/effects";
import {GET_BOOK_DETAIL, GET_BOOK_DETAIL_SUCCESS, GET_BOOK_DETAIL_ERROR} from "../../actions/booksFeed";

function* bookDetailSaga(action) {
    try{
        const data = yield call(fetchBookDetails, action.payload);
        yield put({
            type: GET_BOOK_DETAIL_SUCCESS, payload: data
        })
    }catch(error) {
        yield put({
            type: GET_BOOK_DETAIL_ERROR, payload: error
        })
    }
}

async function fetchBookDetails(bId) {
    try {
        let res = await fetch(`/api/fetchInfo/${bId}`);
        return await res.json();
    }catch(err) {
        return err; 
    }
}

export function* getBookDetailSagaWatcher() {
    yield takeLatest(GET_BOOK_DETAIL, bookDetailSaga)
}