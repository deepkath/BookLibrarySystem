import * as Actions from "../../actions";
const initialState = {
    isLoading : false, 
    allBooks: {},
    books: [],
    error: false
}

const updateBookReducer = (state = initialState, action) => {
    switch(action.type) {
        case Actions.ADD_BOOK: {
            return {
                ...state,
                isLoading: true,
                error: false
            }
        }
        case Actions.ADD_BOOK_SUCCESS: {
            return {
                ...state,
                allBooks: action.payload,
                books: action.payload.all,
                isLoading: false,
                error: false
            }
        }
        case Actions.ADD_BOOK_ERROR: {
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        }
        default: {
            return state;
        }
    }
}
export default updateBookReducer;