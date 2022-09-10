import React from 'react'
import "./css/work.css"

function Work() {
  return (
    <section className='work'>
      <div className='work-header'>
      <p>Work Experience</p>
      <h1>Companies I have worked <br/>
      for in the past
      </h1>
      </div>
      <br/>
      <br/>
      <br/>
      <div className='flex-wrapper'>
            <div className='container container1'>
            <h1><a className='number'>01</a><br/>
            <p><a>Artive</a>, Web - UI/UX developer</p><br/>
            <h3>Developed and designed the whole UI of chatbot interface, Fixed design bugs on the web page and made it responsive, Handling routing in registration, Created a sign in and sing up page component.</h3>
            </h1>
            </div>
 

            <div className='container container2'>
            <h1><a className='number'>02</a><br/>
            <p><a>Opera</a>, Technical Support Staff</p><br/>
            <h3>Dealing with Support tickets, Solid understanding about the Opera Browser, Knowledge about Crypto and Block Chain(NFTs) and Web 3.0</h3>
            </h1>
            </div>


            <div className='container container3'>
            <h1><a className='number'>03</a><br/>
            <p><a>DI-ON.solutions</a>, Web Developer</p><br/>
            <h3>Working with new technology and frameworks, developing UI of an website, building backend services of a website, adding routing to a website</h3>
            </h1>
            </div>
            </div>
    </section>
  )
}

export default Work