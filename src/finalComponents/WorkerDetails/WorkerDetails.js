import React,{PropTypes} from 'react'
import Actions from '../../actions'
import css from './style.scss'
import {DropDown} from '../DropDown'

export default class WorkerDetails extends React.Component {
  static propTypes = {
    actions: PropTypes.object
  }

  constructor (props) {
    super(props)
    this.state = {
      name: '',
      title: '',
      position: ''
    }
  }

  TITLES = [
      {'layer_id': 1, 'layer_display_name': 'Full Stack Developer'},
      {'layer_id': 2, 'layer_display_name': 'DBA'},
      {'layer_id': 3, 'layer_display_name': 'Front End Developer'}
    ]

  POSITIONS = [
    {'layer_id': 1, 'layer_display_name': 'Team Leader'},
    {'layer_id': 2, 'layer_display_name': 'Junior Developer'},
    {'layer_id': 3, 'layer_display_name': 'Feature Master'}
  ]

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
        <div className={css['sub-input']}>
          <span className={css['titles']}> Name: </span>
          <span>
            <input id='workerName' onChange={this.nameChange}></input>
          </span>
        </div>
        <div className={css['sub-input']}>
          <span className={css['titles']}> Title: </span>
          <span>
            <DropDown  style={css} items={this.TITLES} returnValue={this.titleChange} />
          </span>
        </div>
        <div className={css['sub-input']}>
          <span className={css['titles']}> Position: </span>
          <span>
            <DropDown style={css} items={this.POSITIONS} returnValue={this.positionChange} />
          </span>
        </div>
        <div>
          <button className={css['add-btn']} onClick={this.handleAddClick}>add </button>
        </div>
      </div>
    )
  }
}
