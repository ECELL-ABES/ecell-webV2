import React from 'react'
import './pastspeaker.css'
import TCard from '../card/TCard'
import {  speakerdata } from './speakerdata';
import OnScrollReveal from '../../onscrolleffect/OnScrollReveal';


function PastSpeaker() {
  return (

  <OnScrollReveal>
    <div className='dcontainer underline max-width '>
        <div className='space'></div>
        <div className='space'></div>
        <div className='heading'>
          <h1>Past Speakers</h1>
        </div>
        
    <div className='card_container'>    
            {
                     speakerdata.map((item)=>{
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
</OnScrollReveal>

  )
}

export default PastSpeaker