import { combineReducers } from 'redux'
import {
  ADD_WORKER,
  REMOVE_WORKER,
  DISABLE_WORKER,
  FORM_STATE
} from '../constants'

const createReducer = () => {

}

const InitialState = {
  workersList: [],
  formState: false
}

const rootReducer = {
  workersList: createReducer(InitialState.workersList, {
    [ADD_WORKER]: (state, payload) => Object.assign({}, state, {
      workersList: state.workersList.concat(payload)
    }),
    [DISABLE_WORKER]: (state, payload) => Object.assign({}, state, {
      workersList: state.workersList.concat(payload)
    }),
    [REMOVE_WORKER]: (state, payload) => Object.assign({}, state, {
      workersList: state.workersList.concat(payload)
    })
  }),
  formState: createReducer(InitialState.formState, {
    [FORM_STATE]: (state) => Object.assign({}, state, {
      formState: !state.formState
    })
  })
}

export default rootReducer
