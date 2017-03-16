'use strict'
/**
 * Generic remove svg icon
 */
import React, { Component } from 'react'

export default class RemoveSvgIcon extends Component {
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
        className={className}
        fill={color}
        viewBox='0 0 612 612'
        style={{enableBackground: 'new 0 0 612 612'}}
        xmlSpace='preserve'>
        <g>
          <polygon points='612,36.004 576.521,0.603 306,270.608 35.478,0.603 0,36.004 270.522,306.011 0,575.997 35.478,611.397
            306,341.411 576.521,611.397 612,575.997 341.459,306.011' />
        </g>
      </svg>
    )
  }
}

RemoveSvgIcon.propTypes = {
  width: React.PropTypes.number,
  color: React.PropTypes.string,
  className: React.PropTypes.string
}

RemoveSvgIcon.defaultProps = {
  color: '#000000',
  width: 25,
  className: ''
}
