import Immutable from 'seamless-immutable'
import { createReducer, createActions } from 'reduxsauce'

export const { Types, Creators} = createActions({
    loadingHomeSuccesss: { loadingHome: false }
})

const INITIAL_STATE = Immutable({
    loadingHome: false
})

const success = (state, { loadingHome }) => state.merge({...state, loadingHome})

export default createReducer(INITIAL_STATE, {
    [Types.LOADING_HOME_SUCCESSS]: success
})