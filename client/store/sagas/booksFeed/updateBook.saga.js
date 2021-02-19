import {call, put, takeLatest} from "redux-saga/effects";
import {ADD_BOOK, ADD_BOOK_SUCCESS, ADD_BOOK_ERROR, EDIT_BOOK, EDIT_BOOK_SUCCESS, EDIT_BOOK_ERROR} from "../../actions/booksFeed";

function* addBookSaga(action) {
    try{
        const data = yield call(postNewBookData, action.payload);
        yield put({
            type: ADD_BOOK_SUCCESS, payload: data
        })
    }catch(error) {
        yield put({
            type: ADD_BOOK_ERROR, payload: error
        })
    }
}

async function postNewBookData(payload) {
    try {
        const reqOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        }
        let res = await fetch("/api/addBook", reqOptions);
        return await res.json();
    }catch(err) {
        return err; 
    }
}

function* editBookSaga(action) {
    try{
        const data = yield call(editBookData, action.payload);
        yield put({
            type: EDIT_BOOK_SUCCESS, payload: data
        })
    }catch(error) {
        yield put({
            type: EDIT_BOOK_ERROR, payload: error
        })
    }
}

async function editBookData(payload) {
    try {
        const reqOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        }
        let res = await fetch("/api/editBook", reqOptions);
        return await res.json();
    }catch(err) {
        return err; 
    }
}

export function* updateBookSagaWatcher() {
    yield takeLatest(ADD_BOOK, addBookSaga);
    yield takeLatest(EDIT_BOOK, editBookSaga);
}