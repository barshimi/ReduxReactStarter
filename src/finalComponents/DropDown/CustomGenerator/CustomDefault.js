import React from 'react'
/**
 * custom default drop down list generator
 * items example = [
 *  {'layer_id': 'ALL_TABOOLA', 'layer_display_name': 'All Taboola'}
 * ]
 */
export default function (items, selected, css, cssSelected, onclick, onKeyPress) {
  if (!items.length) return null
  return items.map((item, index) => (
    <span key={index} className={`dropdownItem ${css} ${index === selected ? cssSelected : ''}`} onClick={onclick.bind(null, index)}>{item.layer_display_name}</span>
  ))
}
