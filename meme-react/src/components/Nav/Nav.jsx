import React, { useState }  from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import './nav.css'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <a href="/#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
    </nav>
  )
}

export default Nav