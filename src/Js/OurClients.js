import React, { useState } from "react";

// Import your pictures
import pic1 from '../picture2/pic1.svg';
import pic2 from '../picture2/pic2.svg';
import pic3 from '../picture2/pic3.svg';
import pic4 from '../picture2/pic4.svg';
import pic5 from '../picture2/pic5.svg';


const OurClients = () => {
  // State to hold the current picture
  const [currentPic, setCurrentPic] = useState(pic1);

  // Array of pictures
  const pictures = [pic1, pic2, pic3, pic4, pic5];

  // Handler for changing the picture
  const changePicture = (index) => {
    setCurrentPic(pictures[index]);
  };

  return (
    <div className="InsideBox">
      <div className="info-clients">
        <h2>Our Clients</h2>
      </div>

      <div className="BigScreen">
        <img
          src={currentPic}
          className="photo"
          alt="Static Sofa"
          style={{
            position: "relative",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover", // Adjusts how the image fits into the container
          }}
        />
      </div>

      <div className="Icons">
        {pictures.map((_, index) => (
          <div
            key={index}
            className="Icon1"
            onMouseEnter={() => changePicture(index)}
            onClick={() => changePicture(index)} // Change picture on click
           
          />
        ))}
      </div>
    </div>
  );
};

export default OurClients;
