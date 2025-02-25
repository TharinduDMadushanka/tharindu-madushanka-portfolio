import React from "react";
import "./MyServices.css";
import { FaCode, FaLayerGroup, FaDatabase, FaCogs, FaPencilRuler, FaRobot } from "react-icons/fa";

const services = [
    { 
      icon: <FaCode />, 
      title: "Frontend Development", 
      description: "Expert in HTML, CSS, JavaScript, React, Bootstrap, and Tailwind CSS to create responsive and modern UIs." 
    },
    { 
      icon: <FaLayerGroup />, 
      title: "Backend Development", 
      description: "Skilled in Java, Spring Boot, Python-Flask, and API development for robust backend solutions." 
    },
    { 
      icon: <FaPencilRuler />, 
      title: "Figma Designer", 
      description: "Designing modern UI/UX prototypes and wireframes using Figma for seamless user experiences." 
    },
    { 
      icon: <FaDatabase />, 
      title: "Database Management", 
      description: "Experience in MySQL, PostgreSQL, and MongoDB for efficient data handling and storage solutions." 
    },
    { 
      icon: <FaCogs />, 
      title: "Data Structures & Algorithms", 
      description: "Proficient in DSA concepts, problem-solving, and optimizing code for efficiency." 
    },
    { 
      icon: <FaRobot />, 
      title: "Problem-Solving & Critical Thinking", 
      description: "Strong analytical and logical reasoning skills to tackle complex coding challenges and optimize solutions." 
  }
  ];
  

const MyServices = () => {
  return (
    <section className="services-section">
      <h2 className="services-title">What I Bring to the Table</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-box">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyServices;
