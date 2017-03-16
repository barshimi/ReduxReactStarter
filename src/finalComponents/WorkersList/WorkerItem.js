import React, { Component, PropTypes } from 'react'
import css from './worker_item.scss'

export default class WorkerItem extends Component {
  static propTypes = {
    workDetails: PropTypes.object.isRequired
  }

  render () {
    const {workDetails} = this.props
    return (
      <div className={`clearfix ${css['worker-item']}`}>
        <span className={css['worker-name']}>{workDetails.name}</span>
        <span className={css['worker-title']}>{workDetails.title}</span>
        <span className={css['worker-position']}>{workDetails.position}</span>
      </div>
    )
  }
}
