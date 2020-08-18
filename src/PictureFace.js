import React from 'react';
import PictureContent from './PictureContent.js';

const text = "Sheldon Gilden, the man behind mobile kinetic art. This is the art the jiggles, and wiggles, moves, bounces and vibrates with every movement in the room. Subtle, yet captivating. Technologically powerful, yet power free. Plugs into your mind, not the wall."

class PictureFace extends React.Component {
  render(){
    return <div className="PictureFace">
              <img  className="Picture" src='images/ShelFace.jpg' />
              <PictureContent content={text}/>
    </div>;
  }

}

export default PictureFace;
