import {combineReducers} from "redux";
import booksFeedReducer from "./booksFeed.reducer";
import bookDetailReducer from "./bookDetail.reducer";
import updateBookReducer from "./updateBook.reducer";

const booksFeed = combineReducers({
    booksFeedReducer,
    bookDetailReducer,
    updateBookReducer
})

export default booksFeed;