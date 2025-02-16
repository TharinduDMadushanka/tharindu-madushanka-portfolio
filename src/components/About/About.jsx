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
    </div>
  );
};

export default About;
