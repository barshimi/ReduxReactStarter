import React, { Component, PropTypes } from 'react'
import TaboolaLogoSvg from './TaboolaLogoSvg'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actionCreator from '../../actions'
import {WorkersList} from '../WorkersList'
import css from './app.scss'

export class App extends Component {
  static propTypes = {
    workersList: PropTypes.array.isRequired,
    actions: PropTypes.object
  }
  render () {
    const {workersList} = this.props
    return (
      <div className={`clearfix ${css['main-container']}`}>
        <div className={css['taboola-logo']}><TaboolaLogoSvg width={250} /></div>
        <WorkersList list={workersList} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    workersList: state.workersList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Object.assign({}, actionCreator), dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
