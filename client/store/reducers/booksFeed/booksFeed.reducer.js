import * as Actions from "../../actions";
const initialState = {
    isLoading : false, 
    books: [],
    error: false,
    isFreshAdded: false
}

const booksFeedReducer = (state = initialState, action) => {
    switch(action.type) {
        case Actions.GET_BOOKS_FEED: {
            return {
                ...state,
                isLoading: true,
                error: false,
                isFreshAdded: false
            }
        }
        case Actions.GET_BOOKS_FEED_SUCCESS: {
            return {
                ...state,
                books: action.payload || [],
                isLoading: false,
                error: false,
                isFreshAdded: false
            }
        }
        case Actions.GET_BOOKS_FEED_ERROR: {
            return {
                ...state,
                isLoading: false,
                error: action.payload,
                isFreshAdded: false
            }
        }
        case Actions.ADD_BOOK: {
            return {
                ...state,
                isLoading: true,
                error: false,
                isFreshAdded: false
            }
        }
        case Actions.ADD_BOOK_SUCCESS: {
            return {
                ...state,
                books: action.payload.all || [],
                isLoading: false,
                error: false,
                isFreshAdded: action.payload.success || false
            }
        }
        case Actions.ADD_BOOK_ERROR: {
            return {
                ...state,
                isLoading: false,
                error: action.payload,
                isFreshAdded: false
            }
        }
        default: {
            return state;
        }
    }
}
export default booksFeedReducer;