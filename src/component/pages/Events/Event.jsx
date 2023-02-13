import React from 'react'
import './event.css'

const TeamData=[
  {
    id: 1,
    name: 'TES',
    Desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dicta repellat iusto, totam blanditiis beatae corrupti, voluptate impedit veritatis, voluptatum dolore voluptatem placeat consequuntur perferendis architecto ad? Adipisci aut neque deserunt magnam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquam adipisci unde, dolor pariatur molestias in nemo numquam amet cumque sit repellat, dolores tenetur repellendus ut deserunt! Quasi cupiditate illum fugit numquam architecto dicta, atque nihil. Praesentium quidem fugit quo consectetur dicta doloremque consequuntur amet similique velit! Quia adipisci maiores eveniet, doloremque quis, praesentium consequuntur debitis, numquam quisquam tenetur et.',
  },
  {
    id: 2,
    name: 'E-Summit',
    Desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dicta repellat iusto, totam blanditiis beatae corrupti, voluptate impedit veritatis, voluptatum dolore voluptatem placeat consequuntur perferendis architecto ad? Adipisci aut neque deserunt magnam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquam adipisci unde, dolor pariatur molestias in nemo numquam amet cumque sit repellat, dolores tenetur repellendus ut deserunt! Quasi cupiditate illum fugit numquam architecto dicta, atque nihil. Praesentium quidem fugit quo consectetur dicta doloremque consequuntur amet similique velit! Quia adipisci maiores eveniet, doloremque quis, praesentium consequuntur debitis, numquam quisquam tenetur et.',
  },
  {
    id: 3,
    name: 'Indian Navy Visit',
    Desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dicta repellat iusto, totam blanditiis beatae corrupti, voluptate impedit veritatis, voluptatum dolore voluptatem placeat consequuntur perferendis architecto ad? Adipisci aut neque deserunt magnam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquam adipisci unde, dolor pariatur molestias in nemo numquam amet cumque sit repellat, dolores tenetur repellendus ut deserunt! Quasi cupiditate illum fugit numquam architecto dicta, atque nihil. Praesentium quidem fugit quo consectetur dicta doloremque consequuntur amet similique velit! Quia adipisci maiores eveniet, doloremque quis, praesentium consequuntur debitis, numquam quisquam tenetur et.',
  },
]

function Event() {
  return (
    <div className='container max-width' id='event'>
        <div className='heading'>
          <h1>Insights</h1>
        </div>

      <div className='event_card_container'>
        {
          TeamData.map((item)=>{
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
