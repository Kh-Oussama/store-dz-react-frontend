import UserActionTypes from "./user.types";

const INITIAL_STATE = {
    currentUser: null,
    sign_in_error : null,
    sign_up_error : null,
    error : null,
    loading : false,
    checkLoading : true,
};
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        // case UserActionTypes.CHECK_USER_SESSION:
        //     return {
        //         ...state,
        //         checkLoading: true,
        //     };
        case UserActionTypes.SIGN_UP_START :
        case UserActionTypes.SIGN_IN_START :
            return {
                ...state,
                loading: true,
            };
        case UserActionTypes.SIGN_IN_SUCCESS :

            return {
                ...state,
                currentUser: action.payload,
                loading: false,
                checkLoading : false,
                sign_up_error: null,
                sign_in_error: null,
            };
        case UserActionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
                error: null,
            };
        case UserActionTypes.SIGN_IN_FAILURE :
            return {
                ...state,
                sign_in_error: action.payload,
                loading: false,
                checkLoading : false,

            };
        case UserActionTypes.SIGN_UP_FAILURE:
            return {
                ...state,
                sign_up_error: action.payload,
                loading: false,
                checkLoading : false,
            };
        case UserActionTypes.SIGN_OUT_FAILURE :
            return {
                ...state,
                error : action.payload,
                currentUser: null,
                loading: false,
            };
        default :
            return state;
    }
};

export default userReducer;
