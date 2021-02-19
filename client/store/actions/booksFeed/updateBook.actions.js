export const ADD_BOOK = "ADD_BOOK";
export const ADD_BOOK_SUCCESS = "ADD_BOOK_SUCCESS";
export const ADD_BOOK_ERROR = "ADD_BOOK_ERROR";

export const EDIT_BOOK = "EDIT_BOOK";
export const EDIT_BOOK_SUCCESS = "EDIT_BOOK_SUCCESS";
export const EDIT_BOOK_ERROR = "EDIT_BOOK_ERROR";

export const addBook = (data) => {
    return {
        type : ADD_BOOK,
        payload: data
    }
}

export const editBook = (data) => {
    return {
        type : EDIT_BOOK,
        payload: data
    }
}