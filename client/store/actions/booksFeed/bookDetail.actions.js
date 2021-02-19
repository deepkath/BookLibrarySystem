export const GET_BOOK_DETAIL = "GET_BOOK_DETAIL";
export const GET_BOOK_DETAIL_SUCCESS = "GET_BOOK_DETAIL_SUCCESS";
export const GET_BOOK_DETAIL_ERROR = "GET_BOOK_DETAIL_ERROR";

export const getBookDetails = (data) => {
    return {
        type : GET_BOOK_DETAIL,
        payload: data
    }
}