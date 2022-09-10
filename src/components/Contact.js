import React from 'react'
import "./css/contact.css"
import Plane from './img/plane.png'
import Gmail from "./img/gmail.svg"
import Github from "./img/github.svg"
import LinkedIn from "./img/linkedin.svg"
import Twitter from "./img/twitter.svg"

const Contact = () => {
  return (
    <section className='contact'>
      <div className='flex-wrap'>
            <div className='contain contain1'>
                  <h1>Contact me!</h1>
                  <p>At the moment I am free to work with freelance projects<br/>
                  and collaborate with other developers on a Web / App project.<br/>
                  Feel free to contact me through my social media and<br/> 
                  check out my linktree website<br/></p>

                  <div className='btn-style'>
                  <a className='btn' href='https://linktr.ee/veljanovski'>Visit me</a>
                  </div>
            </div>
            <div className='contain contain2'>
                  <img className='future' src={ Plane }/>
            </div>
      </div>
    </section>
  )
}

export default Contact