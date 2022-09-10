import React from 'react'
import "./css/about.css"
import Future from "./img/value.jpg"
import CV from "./CV.pdf"
function About() {
  return (
    <section className='about'>
      <div className='flex-wrap'>
            <div className='contain contain1'>
                  <h1>Entrepreneurship & values</h1>
                  <p>Through out my journey I had many opportunities to work and <br/>
                  collaborate with wonderful people. We learned from eachother and<br/>
                  shared knowledge, I also left special memories and gave value to
                  <br/> my clients and companies I worked with<br/></p>

                  <div className='btn-style'>
                  <a className='btn' href={ CV }>Download CV</a>
                  </div>
            </div>
            <div className='contain contain2'>
                  <img className='future' src={ Future }/>
            </div>
      </div>
    </section>
  )
}

export default About