import { all, fork } from 'redux-saga/effects'

import rootLogin from './login'

export default function* rootSaga() {
    yield all([
        fork(rootLogin)
    ])
}