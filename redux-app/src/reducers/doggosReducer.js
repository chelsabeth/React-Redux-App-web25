import {
    FETCH_DOGGOS_START,
    FETCH_DOGGOS_SUCCESS,
    FETCH_DOGGOS_FAIL,
} from "../actions";

const initialState = {
    doggos: [],
    isFetching: false,
    error: ""
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_DOGGOS_START:
            return {
                ...state,
                isFetching: true
            };
            case FETCH_DOGGOS_SUCCESS:
                return {
                    ...state,
                    doggos: action.payload,
                    isFetching: false,
                    error: ""
                };
                case FETCH_DOGGOS_FAIL:
                    return {
                        ...state,
                        isFetching: false,
                        error: action.payload
                    };
                    default: 
                    return state;
    }
}

export default reducer;