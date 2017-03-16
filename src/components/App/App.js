import React, { Component } from 'react'
import TaboolaLogoSvg from './TaboolaLogoSvg'
import css from './app.scss'

export default class App extends Component {
  render () {
    return (
      <div className={css['main-title']}>
        <div className={css['taboola-logo']}><TaboolaLogoSvg width={250} /></div>
        Taboola workshop - Redux React simple starter
      </div>
    )
  }
}
