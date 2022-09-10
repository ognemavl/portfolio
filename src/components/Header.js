import React from 'react'
import "./css/header.css"
import IMG from "./img/ognenweb.jpg"

function Header(){
  return (
    <header className='header'>
        <div className="flex-wrapper">
            <div className='img-header'>
            <img src={ IMG } />
            </div>
            <div className="text-header">
                <h1 className='intro-header'>I'm Ognen Veljanovski<br/>
                A Web Developer
                </h1>
                <h1 className="place-header">
                    based in Germany 
                </h1>
                <p className="intrograph">I'm probably the most passionate developer you will ever get to work with. If you have <br />
                a great project that needs some of my amazing skills, I'm the guy.</p>
            </div>
        </div>
    </header>
  )
}

export default Header
