import React, { useState }  from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { MdOutlineCreate } from 'react-icons/md'
import { SlMagnifier } from 'react-icons/sl'
import { AiOutlineBulb } from 'react-icons/ai'
import './nav.css'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav className='sticky'>
      <a href="/#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#create" onClick={() => setActiveNav('#create')} className={activeNav === '#create' ? 'active' : ''}><MdOutlineCreate/></a>
      <a href="#search" onClick={() => setActiveNav('#search')} className={activeNav === '#search' ? 'active' : ''}><SlMagnifier/></a>
      <a href=""><AiOutlineBulb/></a>
    </nav>
  )
}

export default Nav