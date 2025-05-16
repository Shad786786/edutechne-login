import React from 'react';
import './App.css';
import Video2 from '../src/Social-Media-Icons-[remix] (online-video-cutter.com).mp4';


 function Vide2(){
  return (  
    <>
    <div className="video-animation2">
      <video autoPlay loop muted>
  <source src={Video2} type="video/mp4" />
</video>

    </div>
    </>
  );
}

export default Vide2;