import React from 'react'
import { Link } from 'react-router-dom'
import stationary from './stationary'
import printing from './printing'
import invoice from './invoice'

const nav = () => {
  return (
    <div>
      <ul>
        <li><Link to={stationary}></Link></li>
        <li><Link to={printing}></Link></li>
        <li><Link to={invoice}></Link></li>
      </ul>
    </div>
  )
}

export default nav
