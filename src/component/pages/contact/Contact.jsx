import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {AiOutlineMail} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import {CiLinkedin} from 'react-icons/ci'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import {SiBuymeacoffee} from 'react-icons/si'

const Contact = () => {

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
    <section className="container max-width" id='contact'>
<div className='heading'>
        <h1>Get in Touch</h1>
      </div>
      <p className='text-center contact_p'>Feel free to contact us in case of any queries</p>
      <div className="contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5 style={{fontSize:'0.8rem'}}>ecell@abes.ac.in</h5>
            <a href="mailto:ecell@abes.ac.in">Send a Message</a>
          </article>          
          <article className="contact__option">
            <HiOutlineLocationMarker className='contact__option-icon' />
            <h4>Address</h4>
            <h5 style={{fontSize:'0.8rem'}}>ABES Engineering College, 19th Km stone, NH-09,
Vishwakarma Block, Ghaziabad (U.P.)-201009</h5>
            {/* <a href="mailto:ecell@abes.ac.in">Send a Message</a> */}
          </article>          
                    
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='contact-btn btn-primary'>Send Message</button>
        </form>

      </div>
    </section>
  )
}

export default Contact
