import React from 'react'
import './team.css'
import { BsLinkedin } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { HiMail } from 'react-icons/hi';
import { Cordinators, alumni, mentor, team, teamData } from './teamData';
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
      {/* <h1 className='text-center'>Core Members</h1>

        <div className='card_container'>    
            {
          team.map((item)=>{
            return(
           <TCard name={item.name}
            position={item.position}
            image={item.image}
            />)
          }
          )

        }
        </div> */}
        </div>
    {/* <div className='card'>
    <div className='cardImg'>
  <img src={ReactImg} />
  <div className='cardBody'>
    <h2 className='cardTitle'>Card title</h2>
    <p className='classText'>
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </p>
    <Button href="#">Go somewhere</Button>
  </div>
</div>
    </div> */}
   
    </div>
    </div>
  )
}

export default Team