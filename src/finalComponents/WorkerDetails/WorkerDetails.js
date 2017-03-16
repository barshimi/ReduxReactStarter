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
   'Full Stack Developer',
   'DBA',
   'Front End Developer'
  ]

  POSITIONS = [
    'Team Leader',
    'Junior Developer',
    'Feature Master'
  ]

  nameChange (event) {
    this.setState({ name : event.target.value})
  }

  extractDisplayName () {

  }

  titleChange (index) {
    this.setState({ title : this.TITLES[index]})
  }

  positionChange (index) {
    this.setState({ position : this.POSITIONS[index]})
  }

  handleAddClick = () => {
    this.state;
  }

  render () {
    return (
      <div className={css['worker-details-container']}>
        <div className={css['sub-input']}>
          <span className={css['titles']}> Name: </span>
          <span>
            <input id='workerName' onChange={this.nameChange.bind(this)}></input>
          </span>
        </div>
        <div className={css['sub-input']}>
          <span className={css['titles']}> Title: </span>
          <span>
            <DropDown  style={css} items={this.TITLES} returnValue={this.titleChange.bind(this)} />
          </span>
        </div>
        <div className={css['sub-input']}>
          <span className={css['titles']}> Position: </span>
          <span>
            <DropDown style={css} items={this.POSITIONS} returnValue={this.positionChange.bind(this)} />
          </span>
        </div>
        <div>
          <button className={css['add-btn']} onClick={this.handleAddClick}>add </button>
        </div>
      </div>
    )
  }
}
