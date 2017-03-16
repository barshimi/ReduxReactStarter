import {
  ADD_WORKER,
  REMOVE_WORKER,
  DISABLE_WORKER,
  FORM_STATE
} from '../constants'

const actionCreator = {
  addWorker: (value) => ({type: ADD_WORKER, payload: value}),
  removeWorker: (value) => ({type: REMOVE_WORKER, payload: value}),
  disableWorker: (value) => ({type: DISABLE_WORKER, payload: value}),
  changeFormState: () => ({type: FORM_STATE})
}

export default actionCreator
