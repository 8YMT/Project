
import React, { useEffect } from 'react';


import '../Css/TestCss.css';

import '../Css/Header.css';
import '../Css/HeaderMobile.css';
import '../Css/Footer.css';
import '../Css/FooterMobile.css';
import '../Css/Scenes.css';
import '../Css/ScenesMobile.css';
import Three from './Three';


import sofaImage from '../picture/Sofa.svg';

import Header from './Header';
import Footer from './Footer';
import HeaderVariant from './HeaderVariant';

function Gallery() {
    return (
  <div className="App">
   <HeaderVariant/>
    <div className='scenes-menu'>
      <div className='scenes-content'>
        <div className='scenes-title'>
            <h1>Scenes</h1>
        </div>
        <div className='scenes-main'>
            <div className='scenes-Type'> 
                <div className='scenes-picture'>
                  <Three/>
                </div>
                <p><b>Name:</b>  description</p>       
            </div>
            <div className='Type'>
                <div className='scenes-picture'>
                </div>
                <p><b>Name:</b>  description</p>
            </div>
            <div className='Type'>
            <div className='scenes-picture'>
            </div>
            <p><b>Name:</b>  description</p> 
            </div>
        </div>
        <div className='scenes-main'>
            <div className='scenes-Type'> 
                <div className='scenes-picture'>
                </div>
                <p><b>Name:</b>  description</p>       
            </div>
            <div className='Type'>
                <div className='scenes-picture'>
                </div>
                <p><b>Name:</b>  description</p>
            </div>
            <div className='Type'>
            <div className='scenes-picture'>
            </div>
            <p><b>Name:</b>  description</p> 
            </div>
        </div>
      </div>
    </div>
    <Footer/>
    
  </div>
    );
  }
  
  export default Gallery;