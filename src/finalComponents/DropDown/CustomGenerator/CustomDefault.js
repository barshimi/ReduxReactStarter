import React from 'react'
/**
 * custom default drop down list generator
 * items example = [
 *  {'layer_id': 'ALL_TABOOLA', 'layer_display_name': 'All Taboola'}
 * ]
 */
export default function (items, selected, css, cssSelected, onclick, onKeyPress) {
  let newArr = []
  items.forEach((item, index) => (
    newArr.push(<span key={index} className={`dropdownItem ${css} ${index === selected ? cssSelected : ''}`} onClick={onclick.bind(null, index)}>{item}</span>)
  ))
  if (!newArr.length) return null
  return newArr
}
