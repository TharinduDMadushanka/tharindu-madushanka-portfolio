import React, { useState, useEffect } from 'react';
import './Hero.css';

import bg_image from '../../assets/Hero/background.png';

const sentences = [
  "Fullstack Developer",
  "Transforming Ideas into Interactive User Experiences",
  "Critical Thinker Who Loves Debugging Complex Issues",
  "Problem Solver with a Passion for Clean Code",
  "Crafting Engaging UI with React & Figma"
];

const Hero = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentSentence = sentences[index];
    let typingSpeed = isDeleting ? 50 : 100; // Faster deleting

    const type = () => {
      if (!isDeleting && charIndex < currentSentence.length) {
        setText(prev => prev + currentSentence[charIndex]);
        setCharIndex(prev => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setText(prev => prev.slice(0, -1));
        setCharIndex(prev => prev - 1);
      } else {
        setIsDeleting(!isDeleting);

        if (!isDeleting) {
          setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
        } else {
          setIndex((prev) => (prev + 1) % sentences.length);
          setCharIndex(0);
        }
      }
    };

    const timer = setTimeout(type, typingSpeed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, index]);

  return (
    <div className="hero">
      <img src={bg_image} alt="Background Image" className="background-image"/>
      <div className="header-text">
        <p className="typing-text">{text}</p>
        <h1><span id="animate">Hi, I'm Tharindu Madushanka</span></h1>
      </div>
    </div>
  );
};

export default Hero;
