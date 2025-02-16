import React from 'react'
import './Hero.css'

import bg_image from '../../assets/Hero/background.png'

const Hero = () => {
  return (
    <div className='hero'>
      <img src={bg_image} alt="Background Image" class="background-image"/>
    
        <div class="header-text">
            <p>Fullstack Developer</p>
            <h1><span id="animate">Hi, I'm Tharindu Madushanka </span> </h1>
        </div>
    </div>
  )
}

export default Hero
