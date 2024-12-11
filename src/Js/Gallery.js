
import React, { useEffect } from 'react';


import '../Css/TestCss.css';

import '../Css/Header.css';
import '../Css/HeaderMobile.css';
import '../Css/Footer.css';
import '../Css/FooterMobile.css';
import '../Css/Gallery.css';
import '../Css/GalleryMobile.css';


import sofaImage from '../picture/Sofa.svg';

import HeaderVariant from './HeaderVariant';
import Footer from './Footer';

import { Link } from 'react-router-dom';

function Gallery() {
    return (
  <div className="App">
   <HeaderVariant/>
    <div className='gallery-menu'>
      <div className='gallery-content'>
        <div className='gallery-title'>
            <h1>Gallery</h1>
        </div>
        <div className='gallery-main'>
            <div className='Type'>
            <Link to="/scenes">
                <h1>Scenes</h1>
                <div className='gallery-picture'>
                <img
        src={sofaImage}
        className="photo"
        alt="Static Sofa"
        style={{
          position: 'relative',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover', // Adjusts how the image fits into the container
        }}
      />
                </div>
                </Link>
            </div>
            <div className='Type'>
            <Link to="/objects">
                <h1>Objects</h1>
                <div className='gallery-picture'>
                <img
        src={sofaImage}
        className="photo"
        alt="Static Sofa"
        style={{
          position: 'relative',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover', // Adjusts how the image fits into the container
        }}
      />
                </div>
              </Link>
            </div>

            <div className='Type'>
            <Link to="/sofa">
            <h1>Sofa</h1>
            <div className='gallery-picture'>
            <img
        src={sofaImage}
        className="photo"
        alt="Static Sofa"
        style={{
          position: 'relative',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover', // Adjusts how the image fits into the container
        }}
      />
            </div>
            </Link>
            </div>
        </div>
      </div>
    </div>
    <Footer/>
    
  </div>
    );
  }
  
  export default Gallery;