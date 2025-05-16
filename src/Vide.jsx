import React from 'react';
import './App.css';
import Video from '../src/newvid.webm';

 function Vide(){
  return (  
    <>
    <div className="video-animation">
      <video autoPlay loop muted>
  <source src={Video} type="video/webm" />
</video>

    </div>
    </>
  );
}

export default Vide;
