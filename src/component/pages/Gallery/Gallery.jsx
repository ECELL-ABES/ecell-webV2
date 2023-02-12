import React, {useState} from 'react'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

import img1 from '../../assets/GalleryImage/1.JPG'
import img2 from '../../assets/GalleryImage/2.JPG'
import img3 from '../../assets/GalleryImage/3.JPG'
import img4 from '../../assets/GalleryImage/4.JPG'
import img5 from '../../assets/GalleryImage/5.jpg'
import img6 from '../../assets/GalleryImage/6.JPG'
import img7 from '../../assets/GalleryImage/7.JPG'
import img8 from '../../assets/GalleryImage/8.JPG'
import img9 from '../../assets/GalleryImage/9.JPG'
import img10 from '../../assets/GalleryImage/10.JPG'
import img11 from '../../assets/GalleryImage/11.JPG'
// import Carousel from '../carousel/ResposiveCarousel'
import ResposiveCarousel from '../carousel/ResposiveCarousel'
// import img8 from '../../assets/GalleryImage/8.jpg'

function Gallery() {
    const images=[
        img1,
        img2,
        img8,
        img3,
        img4,
        img5,
        img6,
        img7,
        img11,
        img9,
        img10,
        // img8
    ]
   
  return (
   <>
    <div className='container max-width' id='gallery'>
        <div className='heading'>
          <h1>Gallery</h1>
        </div>
        <div classname="max-width text-center">
            <ResposiveCarousel/>
        </div>
        <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
                <Masonry gutter='10px'>
                    {images.map((image, i) => (
                        <img
                            key={i}
                            src={image}
                            style={{width: "100%", display: "block"}}
                            alt=""
                        />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
    </div>
    </>
  )
}

export default Gallery
