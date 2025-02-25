import React from "react";
import "./Projects.css";
import project from '../../assets/Projects/project1.jpg';
import interview_suite from '../../assets/Projects/interview-suite.png';
import blog_site from '../../assets/Projects/blog-site.jpg';
import real_estate from '../../assets/Projects/real-estate.png';
import library_ms from '../../assets/Projects/library-ms.jpg';

const projects = [
  {
    title: "Interview Suite - AI Mock Interview Platform",
    description: "An AI-powered mock interview practice platform designed to help interns prepare for real-world interviews. Features include AI-generated questions, automated answer evaluation, and real-time feedback. Built using Python Flask for the backend and React.js for the frontend.",
    image: interview_suite,  
    link: "#", 
  },
  {
    title: "TechBlogs - A Blogging Platform",
    description: "A full-stack blog website that allows users to create, edit, and manage blog posts. Supports user authentication, rich-text editing, and SEO optimization. Built with Spring Boot for the backend and React.js for the frontend.",
    image: blog_site, 
    link: "#", 
  },
  {
    title: "EstateFinder - Real Estate Search App",
    description: "A modern real estate search application that enables users to find properties using advanced filtering options such as location, price range, property type, and amenities. Provides a seamless UI for an enhanced user experience.",
    image: real_estate,  
    link: "#", 
  },
  {
    title: "LibraPro - Library Management System",
    description: "A JavaFX-based library management system that streamlines book borrowing, returns, and inventory management. Built using a layered architecture in Java, ensuring maintainability and scalability.",
    image: library_ms,  
    link: "#", 
  },
];

const Projects = () => {
  return (
    <section className="projects-section">
      <div className="container">
        <h6 className="fw-bold featured-title">Featured Projects</h6>
        <h2 className="text-white fw-bold mb-4">My Work</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-row">
              {/* Left Side: Project Image */}
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
              </div>

              {/* Right Side: Project Description */}
              <div className="project-description-box">
                <h5 className="project-title">{project.title}</h5>
                <p className="project-description">{project.description}</p>
                <a href={project.link} className="project-link">View Project</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
