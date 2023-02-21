import React from 'react'
import'./massage.css'
import MahendraGupta from '../../assets/team/MahendraGupta.JPG'

function Massage() {
  return (
    <div className='dcontainer max-width'>
      <div className='space'></div>
            <div className='heading'>
                <h1>Message From Mentor</h1></div>
        <div className='massage-container'>
                <div className='massage-img'> 
                    <img src={MahendraGupta} alt="" />
                </div>
                <div className='massage-text'>
                    <p>
                        “The need to act is clear. Entrepreneurs have the power to create jobs and drive growth –
                        but first we need to give them the tools and the environment that will enable them to
                        succeed.”
                        <br/>
                        <i>— Maria Pinelli, Global Vice Chair, Strategic Growth Markets, EY</i>
                        <br />
                        <br />
                        The demand to become entrepreneur is already know and widely accepted by the society, especially when it comes to developing countries with no population control it’s become urgency to develop & nurture potential Entrepreneurs, Technopreneur and Startups. 
                        <br />
                        <br />   
                        The journey from Startup to Public ltd. company is not overnight task. Many people drop the idea to become Entrepreneur or didn’t start the venture due to associated risk. 
                        <br />
                        <br />
                        To ignite the young minds and develop entrepreneurial culture in the Institute and then society, the E-Cell play an important role, where planning to execution has done by students. We do multiple programmes and events to motivate youth and help them to think about entrepreneurship as career option, through E-Summit, MeetUps, Workshops, The Entrepreneur Show (TES) and many more. 
                        <br />
                        <br />
                        I wish to invite students to join E-Cell. 
                        <br />
                        <br />
                        Best wishes!
                        <br />
                        <br />
                        <b>
                        Mahendra Kumar Gupta
                        <br />
                        Mentor, E-CELL,
                        <br />
                        ABES Engineering College,
                        <br/>
                        Ghaziabad.
                        </b>
                    </p>
                    </div>
                </div>
    </div>
  )
}

export default Massage