import React from 'react'
import './team.css'
import ReactImg from '../../assets/photo-1594122230689-45899d9e6f69.jpg'
import { BsLinkedin } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { HiMail } from 'react-icons/hi';
import { teamData } from './teamData';






function Team() {
  return (
    <div className='container underline max-width' id='teams'>
        <div className='heading'>
          <h1>Working Committee</h1>
        </div>
      

      <div className='card_container'>
        {
          teamData.map((item)=>{
            return(
              <div className='card'>
                <div className='cardImg'>
                  <img src={item.image} />
                  <div className='cardBody'>
                    <h2 className='cardTitle'>{item.name}</h2>
                    <p className='cardText'>
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