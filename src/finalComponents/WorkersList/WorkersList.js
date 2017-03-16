import React, { Component, PropTypes } from 'react'
import css from './workers_list.scss'

export default class WorkersList extends Component {
  static propTypes = {
    list: PropTypes.array.isRequired,
    actions: PropTypes.object
  }

  renderWorkersList = () => {
    this.props.list.map(worker => {
      return (
        <WorkerItem workDetails={worker} />
      )
    })
  }

  renderEmptyTitle = () => (<h2 className={css['workers-empty-title']}>taboola workers list is empty</h2>)

  handleAddClick = () => {
    console.log(this.props)
  }

  render () {
    const {list} = this.props
    return (
      <div className={css['workers-container']}>
        {list.length ? this.renderWorkersList() : this.renderEmptyTitle()}
        <button className={css['add-btn']} onClick={this.handleAddClick}>add new taboola worker</button>
      </div>
    )
  }
}
