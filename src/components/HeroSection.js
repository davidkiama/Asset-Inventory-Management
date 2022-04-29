import React from 'react';
import '../App.css'; /*Importing global css*/
import { Button } from './Button';
import './HeroSection.css';


function HeroSection() {
  return (
    <>
    <div className='hero-container'>
      <video src="/videos/video-2.mp4" autoPlay loop muted />
          <h1> EASY WAY TO MANAGE YOUR ASSETS! </h1>
          <p> What are you waiting for? </p>
          <div className='hero-btns'>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                EXPLORE!
            </Button>
            
          </div>
    </div>
  </>
    
  );
}

export default HeroSection;
