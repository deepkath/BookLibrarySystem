import * as Actions from "../../actions";
const initialState = {
    isLoading : false, 
    detail: {},
    error: false
}

const bookDetailReducer = (state = initialState, action) => {
    switch(action.type) {
        case Actions.GET_BOOK_DETAIL: {
            return {
                ...state,
                isLoading: true,
                error: false
            }
        }
        case Actions.GET_BOOK_DETAIL_SUCCESS: {
            return {
                ...state,
                detail: action.payload,
                isLoading: false,
                error: false
            }
        }
        case Actions.GET_BOOK_DETAIL_ERROR: {
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        }
        case Actions.EDIT_BOOK: {
            return {
                ...state,
                isLoading: true,
                error: false
            }
        }
        case Actions.EDIT_BOOK_SUCCESS: {
            return {
                ...state,
                detail: action.payload,
                isLoading: false,
                error: false
            }
        }
        case Actions.EDIT_BOOK_ERROR: {
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
export default bookDetailReducer;