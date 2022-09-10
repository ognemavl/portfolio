import React from 'react'
import "./css/project.css"
import Watch from "./img/github-watch.png"
import Ts from "./img/github-ts.png"
import Crypto from "./img/github-crypto.png"
const Projects = () => {
  return (
    <section className='projects'>
      <div className='intro'>
      <p>Projects</p>
      <h1>One of my favorite projects<br/>
      I've had done for the past few years</h1>
      </div>
      <div className='style'/>
      {/*  */}

            <div className='div-class'>
            <div className='card card1'>
                  <div className='img-section'>
                  <img src={ Watch } className='img-holder'/>
                  </div>
                  <h1 className='text-head'>WatchSite</h1>
                  <p className='text-description'>
                  A modern e-commerce watch website<br/>
                  with dark and light mode, and a cart to<br/>
                  pick up you watch and fully responsive
                  </p>
                  <div className='buttons'>
                  <a className='btn1'>Code</a>
                  <a className='btn2'>Live</a>
                  </div>
            </div>

            <div className='space'/>

            <div className='card card2'>
                  <div className='img-section'>
                  <img src={ Ts } className='img-holder'/>
                  </div>
                  <h1 className='text-head'>WatchSite</h1>
                  <p className='text-description'>
                  A modern e-commerce watch website<br/>
                  with dark and light mode, a cart to<br/>
                  pick up you watch and fully responsive
                  </p>
                  <div className='buttons'>
                  <a className='btn1'>Code</a>
                  <a className='btn2'>Live</a>
                  </div>
            </div>

            <div className='space'/>

            <div className='card card3'>
                  <div className='img-section'>
                  <img src={ Crypto } className='img-holder'/>
                  </div>
                  <h1 className='text-head'>WatchSite</h1>
                  <p className='text-description'>
                  A modern e-commerce watch website<br/>
                  with dark and light mode, and a cart to<br/>
                  pick up you watch and fully responsive
                  </p>
                  <div className='buttons'>
                  <a className='btn1'>Code</a>
                  <a className='btn2'>Live</a>
                  </div>
            </div>
            </div>

      {/*  */}
    </section>
  )
}

export default Projects