import React from 'react'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import './contactus.css'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {AiOutlineMail} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import {CiLinkedin} from 'react-icons/ci'



function Contactus() {


// const form = useRef();
  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('service_5n0id7q', 'service_5n0id7q', form.current, 'hDeRlK-5jXDd9ZbDm')
  //   e.target.reset();
  // };

  // export const ContactUs = () => {
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_qlnl0il ', 'template_lc91loj', form.current, 'p5H5C3LoGJySZ_d0d')
       e.target.reset()
    };


  return (
    <div className='bg_event' id='contact'>
        <div className='space'></div>
        <div className='space'></div>
    <div className='heading'>
        <h1>Get in Touch</h1>
      </div>
      <p className='text-center contact_p'>Feel free to contact us in case of any queries</p>
    <div className="section">
        
    <div className="contact_container">
        <div className="contactInfo"> 
            <div>
                <h2>Contact Info</h2>
                <ul className="info">
                    <li>
                        <span><HiOutlineLocationMarker className='contact_icon'/></span>
                        <span>ABES Engineering College,<br/>
                        Vishwakarma Block,<br/>
                         19th Km stone,<br/>
                          NH-09,Ghaziabad (U.P.) <br/>
                          201009</span>
                    </li>
                    <li>
                        <span><AiOutlineMail className='contact_icon'/></span>
                        <span><a href = "mailto:ecell@abes.ac.in">ecell@abes.ac.in</a></span>
                    </li>

                </ul>
            </div>
            <ul className="sci">
                <li><a href="emailto:ecell@abes.ac.in"  className='contact_icon'><AiOutlineMail/></a></li>
                <li><a href="https://instagram.com/ecell_abesec?igshid=MDM4ZDc5MmU=" target="_blank" className='contact_icon'><BsInstagram/></a></li>
                <li><a href="https://www.linkedin.com/in/ecell-abes-ec-4a4240172?trk=contact-info" target="_blank" className='contact_icon'><CiLinkedin/></a></li>
                
            </ul>
        </div>
        <form ref={form} onSubmit={sendEmail}>
            <div className="contactForm">
                <div className="formBox">
                <div className="inputBox w50">
                <input type="text" name='name'  required />
                    <span>First Name</span>
                </div>
                
                <div className="inputBox w50">
                <input type="email" name='email'  required />
                <span>Email Address</span>
                </div>
                <div className="inputBox w100">
                <textarea name="message" rows="7"  required></textarea>
                    <span>Write your message here...</span>
                </div>
                <div className="inputBox w100">
                    <input type="submit" value="Send"/>
                </div>
            </div>
        </div>
        </form>
            
    </div>
</div>
</div>
  )
}

export default Contactus