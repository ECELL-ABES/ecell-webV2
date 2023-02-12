import React, {useState} from 'react'
import './footer.css'
import logo1 from "../../assets/logos/ecell_abes.png"
import logo2 from "../../assets/logos/INIF_LOGO.png"
import { BsFillArrowUpRightSquareFill } from 'react-icons/bs';
import { AiOutlineMail, AiOutlineArrowRight, AiOutlineLinkedin, AiOutlineInstagram} from 'react-icons/ai';
import { CiTwitter } from 'react-icons/ci';

function Footer() {
    const [email, setEmail] = useState('');
    const handleChange = (event) => {
        setEmail(event.target.value);
      };
    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform some action with the email value here
        console.log(email);
      };

  return (
    <section id='footer'>
        <div className='container container-footer'>
            <div className='row-upper'>
                <div className='col-upper'>
                        <p>Stay Connected With</p>
                        <h2>Entrepreneurship cell,<br /> ABES Engineering College </h2>
                        <span>
                        <form className="form-flex" onSubmit={handleSubmit}>
                            <input
                                type="email"
                                placeholder="Email"
                                className="subscribe-input"
                                value={email}
                                onChange={handleChange}
                                required
                            />
                            <button className="subscribe-btn" type="submit">
                                <AiOutlineArrowRight/>
                            </button>
                        </form>
                        </span>
                    </div>
                    <div className='col-logo'>
                        <img src={logo2} alt="" />
                        </div>
                </div>           
             <div className="row-bottom">
                <div className="col-bottom img1">
                <div className='col-logo'>
                        <img src={logo1} alt="" />
                        </div>
                    <h4>Fueling Innovative Business Ideas to Life.</h4>
                    </div>
                <div className="col-bottom">
                    <h4>Quick Links</h4>
                    <ul className="permalinks">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Gallery</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                <div className="col-bottom">
                    <h4>Terms and Conditions</h4>
                    <p>By using this website, you agree to our Terms and Conditions, Privacy Policy and Cookie Policy.</p>
                    </div>
                <div className="col-bottom">
                   <h4>Let's Chat</h4> 
                       <span><a href="#"><AiOutlineMail/></a></span>  
                       <span><a href="#"><CiTwitter/></a></span>  
                       <span><a href="#"><AiOutlineLinkedin/></a></span>  
                       <span><a href="#"><AiOutlineInstagram/></a></span>  
                    </div>
                    </div>
                    </div>

    </section>
  )
}

export default Footer