import React, {PropTypes} from 'react'
import {CustomDefault} from './CustomGenerator'
import cssDef from './style/dropDown_default.scss'
import {ArrowUpSvgIcon, ArrowDownSvgIcon} from '../svgIcons'

export default class DropDown extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      css: Object.assign({}, cssDef, props.style),
      listStatus: false,
      items: props.items
    }
  }

  componentDidMount () {
    window.addEventListener('click', this.closeDropDown)
    // window.addEventListener('keydown', this.manualSelection)
  }

  componentWillUnmount () {
    window.removeEventListener('click', this.closeDropDown)
    // window.removeEventListener('keydown', this.manualSelection)
  }

  closeDropDown = (event) => {
    if (typeof event.target.className === 'string' && event.target.className.indexOf('dropdown') === -1 && this.state.listStatus) this.setState({listStatus: false})
  }

  toggleDropDown = () => {
    this.setState({listStatus: !this.state.listStatus})
  }

  selectNewFromClick = (index) => {
    this.setState({
      listStatus: false
    })
    this.props.returnValue(index)
  }

  render () {
    const {placeHolder, customGenerator, items, selected} = this.props
    const {css, listStatus} = this.state
    return (
      <div className={css['dropdown-container']}>
        <div className={`${css['clearfix']} ${css['dropdown-selection']}`} onClick={this.toggleDropDown}>
          <span className={css['dropdown-selection-txt']}>{selected !== -1 && items.length ? items[selected]: placeHolder}</span>
          <span className={css['dropdown-arrow']}>
            {listStatus
              ? <ArrowUpSvgIcon width={10} />
              : <ArrowDownSvgIcon width={10} />}
          </span>
        </div>
        <div className={`${css['dropdown-list']} ${listStatus ? '' : css['dropdown-hidden']}`}>
          {customGenerator
            ? customGenerator(items, selected, css['dropdown-item'], css['dropdown-selected'], this.selectNewFromClick)
            : CustomDefault(items, selected, css['dropdown-item'], css['dropdown-selected'], this.selectNewFromClick)}
        </div>
      </div>
    )
  }
}

DropDown.propTypes = {
  style: PropTypes.object,
  selected: PropTypes.number,
  items: PropTypes.any,
  returnValue: PropTypes.func,
  placeHolder: PropTypes.string,
  customGenerator: PropTypes.func
}

DropDown.defaultProps = {
  style: {},
  placeHolder: 'Choose'
}
