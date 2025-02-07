import { all, call } from 'redux-saga/effects';
import {userSagas} from "./users/user.sagas";
import {cartSagas} from "./cart/cart.sagas";


export default function* rootSaga() {
    yield all([
        call(userSagas),
        call(cartSagas)
    ])
};
