import UserActionTypes from "./user.types";

export const signInStart = emailAndPassword => ({
    type : UserActionTypes.SIGN_IN_START,
    payload : emailAndPassword,
});

export const signInSuccess = user => ({
   type : UserActionTypes.SIGN_IN_SUCCESS,
   payload : user,
});

export const signInFailure = error => ({
   type : UserActionTypes.SIGN_IN_FAILURE,
   payload : error,
});

export const checkUserSession = () => ({
    type: UserActionTypes.CHECK_USER_SESSION,
});

export const refreshUserSession = () => ({
    type: UserActionTypes.REFRESH_USER_SESSION,
});

export const signOutStart = () => ({
    type: UserActionTypes.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
    type: UserActionTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailure = error => ({
    type: UserActionTypes.SIGN_OUT_FAILURE,
    payload: error,
});

export const signUpStart = userCredentials => ({
    type : UserActionTypes.SIGN_UP_START,
    payload: userCredentials,
});

export const signUpSuccess = user => ({
    type: UserActionTypes.SIGN_UP_SUCCESS,
    payload: user
});

export const signUpFailure = error => ({
    type: UserActionTypes.SIGN_UP_FAILURE,
    payload: error,
});
