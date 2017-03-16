import React, { Component, PropTypes } from 'react'
import WorkerItem from './WorkerItem'
import css from './workers_list.scss'

export default class WorkersList extends Component {
  static propTypes = {
    list: PropTypes.array.isRequired,
    formState: PropTypes.bool,
    actions: PropTypes.object
  }

  renderWorkersList = () => {
    return this.props.list.map((worker, index) => {
      return (
        <WorkerItem workDetails={worker} key={index} />
      )
    })
  }

  renderEmptyTitle = () => (<h2 className={css['workers-empty-title']}>taboola workers list is empty</h2>)

  handleAddClick = () => {
    const {formState, actions} = this.props
    if (!formState) actions.changeFormState()
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
