import React from 'react'
import { Link } from 'react-router-dom'

const nav = () => {
  return (
    <div>
      <ul id='Navbar'>
        <li><Link to="/stationary">stationary</Link></li>
        <li><Link to="/printing">printing</Link></li>
        <li><Link to="/invoice">invoice</Link></li>
      </ul>
    </div>
  )
}

export default nav
