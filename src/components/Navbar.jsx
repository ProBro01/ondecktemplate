import React from 'react'
import { Trybutton } from './Trybutton'
import logo from "../Assets/Logo.svg"
import "../stylesheets/navbar.css"

export const Navbar = () => {
  return (
    <div className='header'>
        <div className='header__logo'>
            <img src={logo} className='header__logo-img'/>
        </div>
        <nav className='header__navigation'>
            <li className='header__nav-item'>Products</li>
            <li className='header__nav-item'>Challenges</li>
            <li className='header__nav-item'>Resources</li>
            <li className='header__nav-item'>Other Links</li>
        </nav>
        <div className='header__buttons'>
            <li className='header__buttons-item'>Sign in</li>
            <Trybutton/>
        </div>
        <div className='hamburgur'>
          <div className='hamburgur__slice'></div>
          <div className='hamburgur__slice'></div>
          <div className='hamburgur__slice'></div>
        </div>
    </div>
  )
}
