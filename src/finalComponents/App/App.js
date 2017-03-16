import React, { Component, PropTypes } from 'react'
import TaboolaLogoSvg from './TaboolaLogoSvg'
import { connect, dispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import actionCreator from '../../actions'
import {WorkerDetails} from '../WorkerDetails'
import {WorkersList} from '../WorkersList'
import css from './app.scss'

export class App extends Component {
  static propTypes = {
    workersList: PropTypes.array.isRequired,
    formState: PropTypes.bool,
    actions: PropTypes.object
  }
  render () {
    const {workersList, actions, formState} = this.props
    console.log(this.props)
    return (
      <div>
        <div className={`clearfix ${css['main-container']}`}>
          <div className={css['taboola-logo']}><TaboolaLogoSvg width={250} /></div>
            <WorkersList list={workersList} formState={formState} actions={actions} />
            {formState ? <WorkerDetails addWorker={actions.addWorker} /> : null}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    workersList: state.workersList,
    formState: state.formState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Object.assign({}, actionCreator), dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
