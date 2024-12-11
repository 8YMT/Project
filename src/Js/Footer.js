import React from 'react';
import facebook from '../picture/facebook.svg';
import instagram from '../picture/insta.svg';
import linkedin from '../picture/lin.svg';


function Footer() {
  return (
    <div>
      <div className='BlackFootFixed'>
      
      </div>
      <div className='BlackFoot'>
        <div className='foot-Section'>
          <h1>Agency</h1>
        </div>
        <div className='foot-Section'>
          <h4>Get in Touch</h4>
          <p>Mohamed@gmail.com</p> 
          <div className='SocialMedia'>
            <div className='media'>
            <img
                 src={facebook}
                 className="facebook"
                 alt="Static Sofa"
                 style={{
                    position:'relative',
                    objectFit: 'cover', // Adjusts how the image fits into the container
                     }}
            />
            </div>
            <div className='media'>
            <img
                 src={instagram}
                 className="instagram"
                 alt="Static Sofa"
                 style={{
                    position:'relative',
                    objectFit: 'cover', // Adjusts how the image fits into the container
                     }}
            />
              
            </div>
            <div className='media'>
            <img
                 src={linkedin}
                 className="linkedin"
                 alt="Static Sofa"
                 style={{
                    position:'relative',
                    objectFit: 'cover', // Adjusts how the image fits into the container
                     }}
            />
              
            </div>
          </div>  
          </div>
        <div className='foot-Section'>
          <h4>Tunisia</h4>
          <p>785, Ariana
  Rue Immem Sahnoun
  Nahj el Imem Shanou</p> 
  <p className='copydate' >©2024 </p>  
        </div>
        
        </div>
    </div>
  );
}

export default Footer;
