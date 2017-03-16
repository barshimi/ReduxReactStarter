import React, { Component } from 'react'
import TaboolaLogoSvg from './TaboolaLogoSvg'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actionCreator from '../../actions'
import WorkersList from '../WorkersList'
import css from './app.scss'

export default class App extends Component {
  render () {
    return (
      <div className={css['main-container']}>
        <div className={css['taboola-logo']}><TaboolaLogoSvg width={250} /></div>
        <WorkersList list={} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Object.assign({}, actionCreator), dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
