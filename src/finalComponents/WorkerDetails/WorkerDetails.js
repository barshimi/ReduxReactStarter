import React from 'react'
import Actions from '../../actions'
import css from 'style.scss'
import DropDown from './DropDown'

export default class WorkerDetails extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      title: '',
      position: '',

    }
  }

  const TITLES = ['Full Stack Developet', 'DBA', 'Front End Developer',]

  const POSITIONS = ['Team Leader', 'Junior Developer', 'Feature Master']

  nameChange (event) {
    this.setState({ name : event.target.value})
  }

  titleChange (index) {
    this.setState({ title : this.TITLES[index]})
  }

  positionChange (index) {
    this.setState({ position : this.POSITIONS[index]})
  }

  render () {
    return (
      <div className={css['worker-details-container']}>
        <div>
          <span> Name: </span>
          <span>
            <input id='workerName' onChange={this.nameChange}></input>
          </span>
        </div>
        <div>
          <span> Title: </span>
          <span>
            <DropDown items={this.TITLES} selected={0} returnValue={titleChange} />
          </span>
        </div>
        <div>
          <span> Position: </span>
          <span>
            <DropDown items={this.POSITIONS} selected={0} returnValue={positionChange} />
          </span>
        </div>
      </div>
    )
  }
}
