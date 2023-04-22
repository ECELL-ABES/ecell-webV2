import React from 'react'
import './card.css'
// import img1 from '../../assets/team/AnshikaSingh.jpg'
// import img2 from '../../assets/team/ShubhanshMahawar.jpg'
// import img3 from '../../assets/team/BhaskarDev.jpg'
function TCard(props) {
  return (
    <div>
         {/* <!------------------ Hover Effect Style : Demo - 6 ---------------> */}
       <div class="Tcard_container">
            {/* <h3 class="text-center">Hover Effect Style : Demo - 6</h3> */}
            <div class="card_row ">
                <div class="card_col">
                    <div class="box6">
                        <img class="pic-1"  src={props.image}/>
                        <div class="box-content">
                            <h3 class="title">{props.name}</h3>
                            <span class="post">{props.position}</span>
                            {/* <ul class="icon">
                                <li><a href="#" class="fa fa-search"></a></li>
                                <li><a href="#" class="fa fa-link"></a></li>
                            </ul> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default TCard