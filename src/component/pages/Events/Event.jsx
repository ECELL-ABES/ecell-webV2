import React from 'react'
import './event.css'
import { eventData } from './Eventdata'
import { BiLeaf } from 'react-icons/bi';
import leaf from "../../assets/logos/leaf.png"
import eventbg from '../../assets/bg/eventBg.png'
import tes from '../../assets/Tes/1.JPG'
import OnScrollReveal from '../../onscrolleffect/OnScrollReveal';
import { Link } from 'react-router-dom';

function Event() {
  return (

    <OnScrollReveal>
      <div className="eventcontainer">
      <div className="space"></div>
        <div className="event_herosection">
          <div className="event_heroText">
              <h6 className="contact_p">All About Our</h6><br />
              <h1>Events</h1>
          </div>
          <div className="event_heroImg">
            <img src={eventbg} alt="" />
          </div>
        </div>
        <div className="space"></div>
        <div className="heading_event">
        <div className="heading">
        <h1>Our Events</h1>
      </div>
      <p className="text-center contact_p">We don’t just talk Entrepreneurship, we show </p>
      </div>
        </div>
        <div className="eventList">
          {
            eventData.map(({id, name,imgurl})=>{
              return(
                <div key={id} className="Eventcard">
                <img src={imgurl} alt="Card Image"/>
                <div className="overlay">
                  <div className="Eventtext">
                  <h1>{name}</h1>
                  <Link to = {`${id}`} className='button'>Explore</Link>
                  </div>
                </div>
              </div>
              )
            }
            )
          }
        </div>
    
    </OnScrollReveal>





//     <OnScrollReveal> 
//         <div className="events_cont">    
//     <div className='dcontainer underline max-width 'id='event'>
//     <div className='space'></div>
//         <div className='heading'>
//           <h1>Events</h1>
//           <p className="text-center contact_p"> Join Us for an Exciting Lineup!</p>
//         </div>
//       <div className='event_card_container'>
//       { eventData.map((item)=>{
//         return(
//     <div className="flip-card">
//          <div className="flip-card-inner">
//             <div className="flip-card-front">
//                 <div className='cardiconfront'>
//                   <img src={leaf} alt="" />
//                   </div>
//                 <h1>{item.name}</h1>
//               {/* <img src="img_avatar.png" alt="Avatar" style={{width:'300px',height:'300px'}}/> */}
//             </div>
//             <div className="flip-card-back">
//               <p>{item.Desc}</p>
//             </div>
//           </div>   
// </div>
//         )
//     })
//   }
//         </div> 
//       {/* <div className='event_card_container'>
//         {
//           eventData.map((item)=>{
//             return(
//               <div className='event_card'>
//                   <div className='event_cardBody'>
//                     <h2 className='cardTitle underline'>{item.name}</h2>
//                     <p className='cardText'>
//                       {item.Desc}
//                     </p>
//                   </div>
//               </div>
              
//             )
//           }
//           )

//         }
//         </div>  */}
//     {/* <div className='card'>
//     <div className='cardImg'>
//   <img src={ReactImg} />
//   <div className='cardBody'>
//     <h2 className='cardTitle'>Card title</h2>
//     <p className='classText'>
//       Some quick example text to build on the card title and make up the bulk of the card's content.
//     </p>
//     <Button href="#">Go somewhere</Button>
//   </div>
// </div>
//     </div> */}
    
   
//     </div>
//     </div>
//     </OnScrollReveal>
  )
}

export default Event
