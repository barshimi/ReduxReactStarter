import React,{PropTypes} from 'react'
import Actions from '../../actions'
import css from './style.scss'
import { DropDown } from '../DropDown'
import {RemoveSvgIcon} from '../svgIcons'
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
    changeFormState: PropTypes.func,
    addWorker: PropTypes.func
  }

  constructor (props) {
    super(props)
    this.state = {
      name: '',
      title: -1,
      position: -1
    }
  }


  nameChange = (event) => {
    this.setState({ name : event.target.value})
  }

  dropDownChange = (type, index) => {
    this.setState({[type]: index})
  }

  handleAddClick = () => {
    const {title, position, name} = this.state
    if (title === -1 || position === -1 || !name.length) return false
    this.props.addWorker({
      name: name,
      position: POSITIONS[position],
      title: TITLES[title]
    })
    this.setState({
      name: '',
      title: -1,
      position: -1
    })
  }

  closeWorkerDetails = () => {
    this.props.changeFormState()
  }

  render () {
    const {title, position, name} = this.state
    return (
      <div className={css['worker-details-container']}>
        <div className={css['close-icon']} onClick={this.closeWorkerDetails}><RemoveSvgIcon color={'#888'} width={15} /></div>
        <div className={css['sub-input']}>
          <span className={css['titles']}> Name: </span>
          <span>
            <input type='text' id='workerName' onChange={this.nameChange} value={name}></input>
          </span>
        </div>
        <div className={css['sub-input']}>
          <span className={css['titles']}> Title: </span>
          <span>
            <DropDown style={css} items={TITLES} returnValue={this.dropDownChange.bind(null, 'title')} selected={title} />
          </span>
        </div>
        <div className={css['sub-input']}>
          <span className={css['titles']}> Position: </span>
          <span>
            <DropDown style={css} items={POSITIONS} returnValue={this.dropDownChange.bind(null, 'position')} selected={position}/>
          </span>
        </div>
        <div>
          <button className={css['add-btn']} onClick={this.handleAddClick}>add </button>
        </div>
      </div>
    )
  }
}
