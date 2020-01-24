import {actionTypes} from '../ActionTypes/UI';

export const initialState = {
    pageSize: 5,
    pageNumber: 1,
    pageContentType : "announcement",
}

export function UIReducer(state = initialState, action) {
    switch(action.type) {
        case actionTypes.PAGE_CONTENT_TYPE_CHANGED: 
            return {
                ...state,
                pageNumber: 1,
                pageContentType : action.payload
            }
        case actionTypes.PAGE_SIZE_CHANGED:
            return {
                ...state,
                pageSize: action.payload,
                pageNumber: 1,
            }

        default: 
            return state;
    }
}
