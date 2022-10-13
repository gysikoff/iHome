import React from 'react'
import Logo from '../assets/Logo.png'

const Header = () => {
  return (
    <div className='top-bar'>
      <div className='logo'>
        <img src={Logo} height='100px'></img>
     </div>
    </div>
  )
}

export default Header