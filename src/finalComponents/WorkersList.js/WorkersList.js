import React, { Component } from 'react'
import css from './workers_list.scss'

export default class App extends Component {
  static propsTypes = {
    list: React.propsTypes.array.isRequired
  }

  renderEmptyList = () => {

  }

  renderWorkersList = () => {
    
  }

  render () {
    const {list} = this.props
    return (
      <div className={css['list-container']}>
        {list.length ? this.renderEmptyList() : this.renderWorkersList()}
      </div>
    )
  }
}
