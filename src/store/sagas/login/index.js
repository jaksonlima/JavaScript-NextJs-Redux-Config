import { all, fork } from 'redux-saga/effects'

import { watchLoginRequest } from './loginRequest'

export default function* rootLogin() {
    yield all([
        fork(watchLoginRequest)
    ])
}