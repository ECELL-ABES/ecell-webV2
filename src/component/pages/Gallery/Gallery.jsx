import React, { useEffect, useState } from "react";
import { initializeApp } from 'firebase/app';
import Masonry from "react-responsive-masonry";
import { ResponsiveMasonry } from "react-responsive-masonry";
import { getFirestore, collection, query, onSnapshot } from 'firebase/firestore';
import OnScrollReveal from '../../onscrolleffect/OnScrollReveal';
import "./gallery.css"

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyA-9lQTOeAgL8ElP2nJ8Fj3EIKOHEJQwmk",
  authDomain: "ecell-2704e.firebaseapp.com",
  projectId: "ecell-2704e",
  storageBucket: "ecell-2704e.appspot.com",
  messagingSenderId: "576322627480",
  appId: "1:576322627480:web:b3aed16aa0667863fd6ded"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const Gallery = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const collectionRef = collection(db, "images");
      const q = query(collectionRef);

      const unsubscribe = onSnapshot(q, (snapshot) => {
        const fetchedData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        setData(fetchedData);
      });

      return unsubscribe;
    };

    fetchData();
  }, []);

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1
  };



  
  const [selectedImage, setSelectedImage] = useState(null);
      
  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        handleCloseModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (

      
      
   <>
  <div className='space'></div>
   <div className='dcontainer max- underline'  id='gallery'>
   <div className='space'></div>
       <div className='heading'>
         <h1>Gallery</h1>
       </div>
        {/* <div className="image-masonry-gallery">
       {data.map((imageUrl, index) => (
         <div key={index} className="image-masonry-gallery__item">
            <OnScrollReveal>
           <img src={imageUrl.downloadURL}  alt={`Image ${index + 1}`} />
           </OnScrollReveal>
         </div>
       ))}
     </div>  */}

     <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
     <Masonry
      breakpointCols={breakpointColumnsObj}
      columnClassName="my-masonry-grid_column"
    >
      {data.map((imageUrl, index) => (
        <div key={index}>
            <OnScrollReveal>
          <img src={imageUrl.downloadURL} 
          style={{width: "100%", display: "block"}} alt={`Image ${index}`}  onClick={() => handleImageClick(imageUrl)} />
          </OnScrollReveal>
        </div>
      ))}
    </Masonry>
    </ResponsiveMasonry>
     </div>

     {selectedImage && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content">
            <img
              src={selectedImage.downloadURL}
              alt="Selected Image"
              className="modal-image"
            />
          </div>
        </div>
      )}


     </>
  );
};

export default Gallery;

