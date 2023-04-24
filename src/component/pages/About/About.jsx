import React from 'react'
import './about.css'
import OnScrollReveal from '../../onscrolleffect/OnScrollReveal'
 

const moto =[
  {
    name: "Mindset",
    image: "https://assets2.lottiefiles.com/packages/lf20_iqbweiiz.json",
    text: <div>
       <ul>
                  <li>Embrace creativity, risk-taking, innovation, and learning from mistakes as part of our rich mindset.</li>
                  <li>Question the status quo and consider alternative solutions to drive change.</li>
                  <li>Drive towards making a meaningful impact and changing the world with our ideas.</li>
                  <li>Embrace a culture of continuous learning and improvement, valuing creativity and innovation.</li>
                  </ul>
    </div>
   },
  {
    name: "Mission",
    image: "https://assets6.lottiefiles.com/packages/lf20_Twpva09nPz.json",
    text: <div>
      <ul>
                <li>Inspire and motivate students to pursue their entrepreneurial dreams! </li>
                <li>Empower students with skills and knowledge for entrepreneurship success!</li>
                <li>Foster connections with mentors, investors, experts in the ecosystem!</li>
                <li>Support and celebrate the achievements and successes of student entrepreneurs</li></ul>
    </div>
  },
  {
    name: "Vision",
    image:'https://assets1.lottiefiles.com/packages/lf20_ieemc0fs.json',
    text: <div>
      <ul>
                <li>Create a vibrant and dynamic entrepreneurial culture on campus and beyond! </li>
                <li>Nurture and develop a pool of talented and innovative entrepreneurs who can contribute to the economic and social development of the nation. </li>
                <li>Become a leading entrepreneurship cell that sets benchmarks for excellence and impact! </li></ul>
    </div>
  }
]

function About() {
  return (
      <OnScrollReveal>
    <div className='dcontainer  max-width' id='about'>

      <div className='space'></div>
        <div className='heading'>
            <h1 className='text-center'>Who We Are!</h1>
            </div>
            <div className='about-content'>
            <p className='text-center text'>We are the ABES Engineering College Entrepreneurship Cell, a group run by students with the mission of promoting entrepreneurship among students and the general public. We think that being an entrepreneur involves more than just starting a firm; it also involves adding value, resolving issues, and having a good influence. 
            </p>

        </div>
          </div>

        <div className="mission_vision">

          {
            moto.map((item)=>{
              return(
                <div className="moto">
              <div className="moto_img">
              <lottie-player src={item.image} background="transparent"  speed="1"  style={{width: "150px", height: "150px"}} loop  autoplay></lottie-player>
              </div>
              <div className="moto_text">
                <h1 className='text-center'>{item.name}</h1>
                <p className='text-center text list'>
                  {item.text}
                </p>
                </div>
                </div>
              )
            }
            )
          }
            {/* <div className="moto">
              <div className="moto_img">
              <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_iqbweiiz.json" background="transparent"  speed="1"  style={{width: "150px", height: "150px"}} loop  autoplay></lottie-player>
              </div>
              <div className="moto_text">
                <h1 className='text-center'>Mindset</h1>
                <p className='text-center text list'>
                  <ul>
                  <li>Embrace creativity, risk-taking, innovation, and learning from mistakes as part of our rich mindset.</li>
                  <li>Question the status quo and consider alternative solutions to drive change.</li>
                  <li>Drive towards making a meaningful impact and changing the world with our ideas.</li>
                  <li>Embrace a culture of continuous learning and improvement, valuing creativity and innovation.</li>
                  </ul>
                  </p>
                </div>
                </div>

                <div className="moto">
              <div className="moto_img">
              <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_Twpva09nPz.json" background="transparent"  speed="1"  style={{width: "150px", height: "150px"}} loop  autoplay></lottie-player>
              </div>
              <div className="moto_text">
                <h1 className='text-center'>Mission</h1>
                <p className='text-center text list'><ul>
                <li>Inspire and motivate students to pursue their entrepreneurial dreams! </li>
                <li>Empower students with skills and knowledge for entrepreneurship success!</li>
                <li>Foster connections with mentors, investors, experts in the ecosystem!</li>
                <li>Support and celebrate the achievements and successes of student entrepreneurs</li></ul>.</p>
                </div>
                </div>
            <div className="moto">
              <div className="moto_img">
              <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_ieemc0fs.json" background="transparent"  speed="1"  style={{width: "150px", height: "150px"}}loop  autoplay></lottie-player>
              </div>
              <div className="moto_text">
                <h1 className='text-center'>Vision </h1>
                <p className='text-center text list'><ul>
                <li>Create a vibrant and dynamic entrepreneurial culture on campus and beyond! </li>
                <li>Nurture and develop a pool of talented and innovative entrepreneurs who can contribute to the economic and social development of the nation. </li>
                <li>Become a leading entrepreneurship cell that sets benchmarks for excellence and impact! </li></ul></p>
                </div>
                </div> */}
           
        </div>
      </OnScrollReveal>
  )
}

export default About
