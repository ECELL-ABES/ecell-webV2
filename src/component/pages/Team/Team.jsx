import React from 'react'
import './team.css'
import { BsLinkedin } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { HiMail } from 'react-icons/hi';
import { Cordinators, DigitalInfrastructure, alumni, members, mentor, team, teamData } from './teamData';
import TCard from '../card/TCard';






function Team() {
  return (
    <div className='bg_team'>
    <div className='dcontainer underline max-width ' id='teams'>
        <div className='space'></div>
        <div className='space'></div>
        <div className='heading'>
          <h1>Meet Our Team</h1>
        </div>
      {/* <div className="team-col">
      <h1 className='text-center'>Mentors</h1>
      <div className='card_container'>
        {
          
          mentor.map((item)=>{
            return(
           <TCard name={item.name}
            position={item.position}
            image={item.image}
            />)
          }
          )

        }
        </div> 
        </div> */}
        <div className="team-col">
      <h1 className='text-center text'>Executives</h1>
      <div className="space"></div>

        <div className='card_container'>    
            {
          Cordinators.map((item)=>{
            return(
           <TCard name={item.name}
            position={item.position}
            image={item.image}
            />)
          }
          )
        }
        </div>
        </div>
        <div className="team-col">
      <h1 className='text-center text'>Alumni</h1>
      <div className="space"></div>

        <div className='card_container'>    
            {
          alumni.map((item)=>{
            return(
           <TCard name={item.name}
            position={item.position}
            image={item.image}
            />)
          }
          )
        }
        </div>
        </div>
        <div className="team-col">
        <h1 className='text-center text'>Alumni</h1>
      <div className="space"></div>

        <div className='Textcard_container'>    
        {
          members.map((item, index)=>{
            return(
              <div key={index} class="textcard">
        <div class="textcard-header">
            <h2>{item.name}</h2>
            <p>{item.year}</p>
            <p>{item.department}</p>
        </div>
        
    </div>
            )
          })
        }
          <div className="textcard_content">
            <h2>
            </h2>
          </div>
        </div>
        </div>
    
   
    </div>
    </div>
  )
}

export default Team