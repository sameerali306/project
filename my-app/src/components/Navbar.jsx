import React from 'react'
import { useState } from 'react'
// import { GiHamburgerMenu } from 'react-icons/gi'
// import { MdClose } from 'react-icons/md'
// import { ImSun } from 'react-icons/im'
// import { BsFillMoonFill } from 'react-icons/bs'

function Navbar() {
  const [navstate , setnavstate]=useState(false)
  return (
    <nav>
      <div className="brand-container">
        <div className="brand">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZCZvDWyfgxVTPfGlpHatIV3qMglNyPglKxA&s" alt="" />
        </div>
        <div className="toggle-container">
          <div className="toggle">
          </div>
          <div className="mode"></div>
        </div>
      </div>
      <div className="link-container">
        <ul className='link'>
          <li><a href='#'>features</a></li>
          <li><a href='#'>About</a></li>
          <li><a href='#'>launch</a></li>
          <li><a href='#'>sign up</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
