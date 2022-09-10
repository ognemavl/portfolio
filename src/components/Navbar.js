import React, { useState } from 'react'
import "./css/navbar.css"

export const Sidebar = (props) => {
  return (
    <nav className='sidebar'>
        <p className='exit' onClick={props.onClick}>✖</p>
        <ul className='side-items'>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <a className='side-item box-regular'>Experience</a>
                <br/>
                <br/>
                <a className='side-item box-regular'>About</a>
                <br/>
                <br/>
                <a className='side-item box-regular'>Projects</a>
                <br/>
                <br/>
                <a className='side-item box'>Contact</a>
        </ul>
    </nav>
  )
}

function Navbar(props) {
    const [sidebar,setSidebar] = useState(false)

  return (
    <>
    <nav className='nav'>
            <p className='logo'>Ognen.V</p>
        <ul className='nav-items'>
                <a className='nav-item one'>Experience</a>
                <a className='nav-item two'>About</a>
                <a className='nav-item three'>Projects</a>
                <a className='nav-item four'>Contact</a>
        </ul>
        <p className='hamburger' onClick={() => setSidebar(true)}>☰</p>
    </nav>  
    {sidebar && <Sidebar onClick={() => setSidebar(false)}/>}
    </>
  )
}

export default Navbar;