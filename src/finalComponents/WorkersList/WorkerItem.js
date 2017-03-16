import React, { Component, PropTypes } from 'react'
import css from './workers_list.scss'

export default class App extends Component {
  static propTypes = {
    workDetails: PropTypes.object.isRequired
  }

  render () {
    const {workDetails} = this.props
    return (
      <div className={css['worker-item']}>
        <span className={css['worker-name']}>{workDetails.name}</span>
        <span className={css['worker-status']}>{workDetails.status ? 'active' : 'inactive'}</span>
        <span className={css['worker-title']}>{workDetails.title}</span>
        <span className={css['worker-position']}>{workDetails.position}</span>
      </div>
    )
  }
}
