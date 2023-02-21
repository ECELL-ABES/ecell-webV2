import React from 'react'
import './team.css'
import { BsLinkedin } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { HiMail } from 'react-icons/hi';
import { Cordinators, mentor, team, teamData } from './teamData';






function Team() {
  return (
    <div className='dcontainer underline max-width' id='teams'>
        <div className='space'></div>
        <div className='heading'>
          <h1>Working Committee</h1>
        </div>
      <div className="team-col">
      {/* <h1 className='text-center'>Mentors</h1> */}
      <div className='card_container'>
        {
          mentor.map((item)=>{
            return(
              <div className='card__'>
                <div className='card__Img'>
                  <img src={item.image} />
                  <div className='card__Body'>
                    <h2 className='card__Title'>{item.name}</h2>
                    <p className='card__Text'>
                      {item.position}
                    </p>
                    <div className="icon">
                    <a  href={item.mail} className='card_icon'><HiMail/></a>
                    <a href={item.linkedIn} className='card_icon' _blank><BsLinkedin/></a>
                    {/* <a href={item.instagram} className='card_icon' _blank><AiFillInstagram/></a> */}
                    </div>
                  </div>
                </div>
              </div>
            )
          }
          )

        }
        </div> 
        </div>
        <div className="team-col">
      <h1 className='text-center'>Co-Ordinators</h1>

        <div className='card_container'>        {
          Cordinators.map((item)=>{
            return(
              <div className='card__'>
                <div className='card__Img'>
                  <img src={item.image} />
                  <div className='card__Body'>
                    <h2 className='card__Title'>{item.name}</h2>
                    <p className='card__Text'>
                      {item.position}
                    </p>
                    <div className="icon">
                    <a  href={item.mail} className='card_icon'><HiMail/></a>
                    <a href={item.linkedIn} className='card_icon' _blank><BsLinkedin/></a>
                    {/* <a href={item.instagram} className='card_icon' _blank><AiFillInstagram/></a> */}
                    </div>
                  </div>
                </div>
              </div>
            )
          }
          )

        }
        </div>
        </div>
        <div className="team-col">
      <h1 className='text-center'>Core Members</h1>

        <div className='card_container'>        {
          team.map((item)=>{
            return(
              <div className='card__'>
                <div className='card__Img'>
                  <img src={item.image} />
                  <div className='card__Body'>
                    <h2 className='card__Title'>{item.name}</h2>
                    <p className='card__Text'>
                      {item.position}
                    </p>
                    <div className="icon">
                    <a  href={item.mail} className='card_icon'><HiMail/></a>
                    <a href={item.linkedIn} className='card_icon' _blank><BsLinkedin/></a>
                    {/* <a href={item.instagram} className='card_icon' _blank><AiFillInstagram/></a> */}
                    </div>
                  </div>
                </div>
              </div>
            )
          }
          )

        }
        </div>
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
  )
}

export default Team