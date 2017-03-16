import React, { Component, PropTypes } from 'react'
import css from './workers_list.scss'

export default class WorkersList extends Component {
  static propTypes = {
    list: PropTypes.array.isRequired
  }

  renderWorkersList = () => {
    this.props.list.map(worker => {
      return (
        <WorkerItem workDetails={worker} />
      )
    })
  }

  renderEmptyTitle = () => (<h2 className={css['workers-empty-title']}>taboola workers list is empty</h2>)

  handleAddWorker = (worker) => {
    console.log(worker)
  }

  render () {
    const {list} = this.props
    return (
      <div className={css['workers-container']}>
        {list.length ? this.renderWorkersList() : this.renderEmptyTitle()}
        <AddWorkerBtn handleAddWorker={this.handleAddWorker} />
      </div>
    )
  }
}
