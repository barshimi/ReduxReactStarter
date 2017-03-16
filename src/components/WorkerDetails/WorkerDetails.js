import React from 'react'
import Actions from '../../actions'
import css from 'style.scss'

export default class WorkerDetails extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      title: '',
      position: '',

    }
  }
  nameChange (event) {
    this.setState({ name : event.target.value})
  }
  render () {
    return (
      <div className={css['worker-details-container']}>
        <div className='worker-controllers'>

        </div>
        <div>
          <span> Name: </span>
          <span>
            <input id='workerName' onChange={this.nameChange}></input>
          </span>
        </div>

      </div>
    )
  }
}
