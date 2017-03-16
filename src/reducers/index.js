import { combineReducers } from 'redux'
import {
  ADD_WORKER,
  REMOVE_WORKER,
  DISABLE_WORKER,
  FORM_STATE
} from '../constants'

const createReducer = (initialState, reducerMap) => {
  return (state = initialState, action) => {
    const reducer = reducerMap[action.type]
    return reducer ? reducer(state, action.payload) : state
  }
}

const InitialState = {
  workersList: [],
  formState: false
}

const rootReducer = {
  workersList: createReducer(InitialState.workersList, {
    [ADD_WORKER]: (state, payload) => state.concat(payload),
    [DISABLE_WORKER]: (state, payload) => state.map(worker => {
      if (worker.name === payload.name && worker.position === payload.position) worker = Object.assign({}, worker, {status: false})
    }),
    [REMOVE_WORKER]: (state, payload) => state.workersList.filter(worker => (worker.name !== payload.name && worker.position !== payload.position))
  }),
  formState: createReducer(InitialState.formState, {
    [FORM_STATE]: (state) => !state
  })
}

export default rootReducer
