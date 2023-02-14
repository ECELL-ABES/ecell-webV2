import React from 'react'
import './event.css'
import { eventData } from './Eventdata'


function Event() {
  return (
    <div className='container max-width underline' id='event'>
        <div className='heading'>
          <h1>Insights</h1>
        </div>

      <div className='event_card_container'>
        {
          eventData.map((item)=>{
            return(
              <div className='event_card'>
                  <div className='event_cardBody'>
                    <h2 className='cardTitle underline'>{item.name}</h2>
                    <p className='cardText'>
                      {item.Desc}
                    </p>
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

export default Event
