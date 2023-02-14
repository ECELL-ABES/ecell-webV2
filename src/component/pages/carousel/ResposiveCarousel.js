import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../assets/GalleryImage/1.JPG'
import img21 from '../../assets/GalleryImage/21.jpg'
import img3 from '../../assets/GalleryImage/3.JPG'
import img14 from '../../assets/GalleryImage/14.JPG'
import img5 from '../../assets/GalleryImage/5.jpg'
import img6 from '../../assets/GalleryImage/6.JPG'
import img15 from '../../assets/GalleryImage/15.JPG'
import img7 from '../../assets/GalleryImage/7.JPG'
import img8 from '../../assets/GalleryImage/8.JPG'
import img9 from '../../assets/GalleryImage/9.JPG'
import img10 from '../../assets/GalleryImage/10.JPG'
import img11 from '../../assets/GalleryImage/11.JPG'

function ResposiveCarousel() {
  return (
        <div>
         <Carousel  autoplay>
                <div>
                    <img src={img1} />
                </div>
                <div>
                    <img src={img15} />
                    
                </div>
                <div>
                    <img src={img14} />
                    
                </div>
                <div>
                    <img src={img5} />
                    
                </div>
                <div>
                    <img src={img11} />
                   
                </div>
                <div>
                    <img src={img21} />
                    </div>
            </Carousel>

    </div>
  )
}

export default ResposiveCarousel