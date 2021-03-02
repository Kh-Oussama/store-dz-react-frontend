import UserActionTypes from "./user.types";
import {takeLatest, put, all, call} from 'redux-saga/effects';
import Axios from "axios";
import cookie from 'js-cookie';

import {
    signInFailure,
    signInSuccess,
    signOutFailure,
    signOutSuccess,
    signUpFailure,
    signUpSuccess
} from "./user.actions";


export function* signIn({payload: {email, password}}) {
    const data = {email, password};
    try {
        const response = yield Axios.post("http://store-dz.com/api/login", data);
        cookie.set("access_token", response.data.access_token);
        const user = response.data.user;
        yield put(signInSuccess({id: user.id, ...user}));
    } catch (error) {
        yield put(signInFailure(error.response.data));
    }
}

// export function* isUserAuthenticated() {
//     try{
//         const token = cookie.get("access_token");
//         const response = yield Axios.get("http://laravel-react.com/api/auth/profile");
//         const user = response.data;
//         yield put(signInSuccess({id: user.id, ...user}));
//     }catch (error) {
//         yield put(signInFailure(error.response.data.message));
//     }
// }

// export function* refreshUserSession() {
//     try{
//         const  tokenExpiration = jwt_decode(cookie.get("access_token")).exp;
//         console.log(tokenExpiration*1000-Date.now());
//         if ((tokenExpiration*1000-Date.now()) < 300000){
//             const response = yield Axios.post("http://laravel-react.com/api/auth/refresh");
//             cookie.set("access_token", response.data.access_token);
//         }
//
//     }catch (error) {
//         yield put(signInFailure(error.response.data.message));
//     }
// }

export function* signUp({payload: { name, email, password}}) {
    const data = { name, email, password};
    try {
        const response = yield Axios.post("http://store-dz.com/api/register", data );
        const user = response.data.user;
        const password = response.data.password;
        yield put(signUpSuccess({id: user.id, password: password, ...user}));
    }catch (error) {
        yield put(signUpFailure(error.response.data));
    }
}

export function* signOut() {
    try {
        const token = cookie.get("access_token");
        yield Axios.post("http://store-dz.com/api/auth/logout",null,token);
        yield (put(signOutSuccess()))
    }catch (error) {
        yield put(signOutFailure())
    }
}

export function* signInAfterSignUp({payload: { email, password}}) {
    yield signIn({payload: {email, password}});
}

export function* onSignInStart() {
    yield takeLatest(UserActionTypes.SIGN_IN_START, signIn)

}
// export function* onCheckUserSession() {
//     yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
// }

// export function* onRefreshUserSession() {
//     yield takeLatest(UserActionTypes.REFRESH_USER_SESSION, refreshUserSession)
// }
//
export function* onSignOutStart() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut)
}

export function* onSignUpStart() {
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUp)
}

export function* onSignUpSuccess() {
    yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* userSagas() {
    yield all([
        call(onSignInStart),
        // call(onCheckUserSession),
        // call(onRefreshUserSession),
        call(onSignOutStart),
        call(onSignUpStart),
        call(onSignUpSuccess),
    ]);
}
