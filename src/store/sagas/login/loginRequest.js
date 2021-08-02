import { delay, put, takeLatest } from 'redux-saga/effects'

import { Types, Creators } from '../../reducers/login'

function* loginRequest({ data }) {
    try {
        yield delay(3000)
        yield put(Creators.loginSuccess(data))
    } catch (error) {
        throw new Error(error)
    }
}

export function* watchLoginRequest() {
    yield takeLatest(Types.LOGIN_REQUEST, loginRequest)
}