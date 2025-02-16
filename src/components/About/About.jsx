import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      {/* Who am I Section */}
      <div className="accordion" id="aboutAccordion">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button 
              className="accordion-button collapsed" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#whoAmI">
              Who am I?
            </button>
          </h2>
          <div id="whoAmI" className="accordion-collapse collapse" data-bs-parent="#aboutAccordion">
            <div className="accordion-body">
              <p>
                I am Tharindu Madushanka, a highly motivated and aspiring software engineering
                student currently pursuing my degree at IJSE (Institute of Software Engineering).
                With a deep passion for technology and a keen interest in software development, I
                am dedicated to honing my skills and expanding my knowledge in this field.
              </p>
            </div>
          </div>
        </div>

        {/* Personal Info */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button 
              className="accordion-button collapsed" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#personalInfo">
              Personal Info
            </button>
          </h2>
          <div id="personalInfo" className="accordion-collapse collapse" data-bs-parent="#aboutAccordion">
            <div className="accordion-body">
              <p>Name: Tharindu Madushanka</p>
              <p>Email: tharindudmadushanka920@gmail.com</p>
              <p>Location: Sri Lanka</p>
            </div>
          </div>
        </div>

        {/* Vision */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button 
              className="accordion-button collapsed" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#vision">
              Vision
            </button>
          </h2>
          <div id="vision" className="accordion-collapse collapse" data-bs-parent="#aboutAccordion">
            <div className="accordion-body">
              <p>To become a skilled software engineer and contribute to innovative projects that make a difference.</p>
            </div>
          </div>
        </div>

        {/* Mission */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button 
              className="accordion-button collapsed" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#mission">
              Mission
            </button>
          </h2>
          <div id="mission" className="accordion-collapse collapse" data-bs-parent="#aboutAccordion">
            <div className="accordion-body">
              <p>To continuously learn and apply new technologies, solve problems, and develop impactful software solutions.</p>
            </div>
          </div>
        </div>
      </div>

      {/* My Journey Section */}
      <div className="journey-container">
        <h2 className="journey-title">My Journey</h2>
        <div className="journey-content">
          <div className="journey-column">
            <h3>Education</h3>

            <div className="journey-item">
              <span className="dot"></span>
              <h4>Informatics Institute of Technology | IIT Campus</h4>
              <p>BSc (Hons) Computer Science</p>
              <p className="journey-date">Sep 2023 - Current</p>
            </div>

            <div className="journey-item">
              <span className="dot"></span>
              <h4>IJSE - Institute of Software Engineering</h4>
              <p>CMJD Professional | Comprehensive Master Java Developer</p>
              <p className="journey-date">Mar 2024 - Oct 2024</p>
            </div>
            
            <div className="journey-item">
              <span className="dot"></span>
              <h4>Richmond College Galle</h4>
              <p>G.C.E Advanced Level Examination</p>
              <p className="journey-date">Sep 2007 - Feb 2021</p>
            </div>
          </div>
          
          <div className="journey-column">
            <h3>Experience</h3>
            <div className="journey-item">
              <span className="dot"></span>
              <h4>IJSE - Institute of Software Engineering</h4>
              <p>CMJD Professional | Comprehensive Master Java Developer</p>
              <p className="journey-date">Mar 2024 - Oct 2024</p>
            </div>
            <div className="journey-item">
              <span className="dot"></span>
              <h4>Richmond College Galle</h4>
              <p>G.C.E Advanced Level Examination</p>
              <p className="journey-date">Sep 2007 - Feb 2021</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
