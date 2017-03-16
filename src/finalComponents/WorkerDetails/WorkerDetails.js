import React,{PropTypes} from 'react'
import Actions from '../../actions'
import css from './style.scss'
import { DropDown } from '../DropDown'
import { dispatch } from 'react-redux'

const TITLES = [
 'Full Stack Developer',
 'DBA',
 'Front End Developer'
]

const POSITIONS = [
  'Team Leader',
  'Junior Developer',
  'Feature Master'
]


export default class WorkerDetails extends React.Component {
  static propTypes = {
    actions: PropTypes.object
  }

  worker = {
    name: '',
    title: '',
    position: ''
  }

  constructor (props) {
    super(props)
    this.state = {
      changed : false
    }
  }


  nameChange = (event) => {
    this.setState({ name : event.target.value})
  }

  titleChange = (index) => {
    this.worker.title = TITLES[index]
    // this.setState({ title : TITLES[index]})
  }

  positionChange = (index) => {
    this.worker.position = POSITIONS[index]
    // this.setState({ position : POSITIONS[index]})
  }

  handleAddClick = () => {
    this.props.addWorker(this.state)
    this.setState({changed : !this.state.changed})
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
            <DropDown style={css} items={TITLES} returnValue={this.titleChange} selected={-1} />
          </span>
        </div>
        <div className={css['sub-input']}>
          <span className={css['titles']}> Position: </span>
          <span>
            <DropDown style={css} items={POSITIONS} returnValue={this.positionChange} selected={-1}/>
          </span>
        </div>
        <div>
          <button className={css['add-btn']} onClick={this.handleAddClick}>add </button>
        </div>
      </div>
    )
  }
}
