export const GET_BOOKS_FEED = "GET_BOOKS_FEED";
export const GET_BOOKS_FEED_SUCCESS = "GET_BOOKS_FEED_SUCCESS";
export const GET_BOOKS_FEED_ERROR = "GET_BOOKS_FEED_ERROR";

export const getBooksFeed = (data) => {
    return {
        type : GET_BOOKS_FEED,
        payload: data
    }
}