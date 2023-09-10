import React, {useState} from 'react'
import './pitchidea.css'
import { Link, NavLink } from "react-router-dom";
import OverlayForm from './OverlayForm';



function PitchIdea() {

  const [showModal, setShowModal] = useState(false);


  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className='dcontainer max-width underline  'id='event'>
    <div className='space'></div>
        <div className='heading'>
          <h1>Make it happen!</h1>
          {/* <p className="text-center contact_p"> Join Us for an Exciting Lineup!</p> */}
          
          <div className="pitchcontainer">
          <div className="pitchidea_row">
          <div className="moto_img">
              <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_Ugmwktgw7h.json" background="transparent"  speed="1" className="lottie-player_pitch"loop  autoplay></lottie-player>
              </div>
          </div>
          <div className="pitchidea_row">
              <p className='text-center text'>Got a fantastic business idea? Do you want to make it happen? Join us for a pitch event where you may share your concept with a group of industry professionals and receive input, counsel, and assistance. Find out how to create an effective pitch, draw in investors, and deal with obstacles. Don't let this chance to make it happen pass you by!</p>
              <div>
              <button onClick={handleOpenModal}  className='button-pitchidea text-center'>Pitch Your Idea</button>
              {
                // <OverlayForm/>
              }
              {showModal && <OverlayForm onClose={handleCloseModal} />}
              </div>
          </div>
          </div>
        </div>
        </div>
  )
}

export default PitchIdea