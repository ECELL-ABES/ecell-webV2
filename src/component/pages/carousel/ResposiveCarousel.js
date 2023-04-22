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
import img16 from '../../assets/GalleryImage/16.JPG'

function ResposiveCarousel() {
  return (
    <div className='dcontainer max-width'>
     <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img1} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={img14} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={img3} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={img16} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={img5} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={img21} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={img10} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={img9} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>    
    </div>

    //code a auto slider carousel?
  )
}

export default ResposiveCarousel