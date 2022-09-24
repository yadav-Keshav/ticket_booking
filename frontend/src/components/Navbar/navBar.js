import './navbar.css'
import React from 'react'

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className='navbar__title navbar__item'>HOTEL BOOKING</div>
        <div className='navbar__item'>HOTELS</div>
        <div className='navbar__item'>Login</div>
        <div className='navbar__item'>Register</div>
    </div>
  )
}
