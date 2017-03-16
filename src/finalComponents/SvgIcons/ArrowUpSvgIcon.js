'use strict'
/**
 * Generic remove svg icon
 */
import React, { Component } from 'react'

export default class ArrowUpSvgIcon extends Component {
  render () {
    const {width, color, className} = this.props
    return (
      <svg
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        x='0px'
        y='0px'
        width={`${width}px`}
        height={`${width}px`}
        fill={color}
        className={className}
        viewBox='0 0 386.257 386.257'
        style={{enableBackground: 'new 0 0 386.257 386.257'}}
        xmlSpace='preserve'>
        <polygon points='193.129,96.879 0,289.379 386.257,289.379 ' />
      </svg>

    )
  }
}

ArrowUpSvgIcon.propTypes = {
  width: React.PropTypes.number,
  color: React.PropTypes.string,
  className: React.PropTypes.string
}

ArrowUpSvgIcon.defaultProps = {
  color: '#000000',
  width: 25,
  className: ''
}
