import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

export const { Types, Creators } = createActions({
    loginRequest: ['data'],
    loginSuccess: ['data'],
    loginFailed: null
})

const INITIAL_STATE = Immutable({
    loading: false
}) 

const success = (state, { data }) => state.merge({ ...data, loading: false })

const request = (state) => state.merge({ ...state, loading: true })

export default createReducer(INITIAL_STATE, {
    [Types.LOGIN_REQUEST]: request,
    [Types.LOGIN_SUCCESS]: success,
})