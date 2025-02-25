import React from "react";
import "./Projects.css";
import project from '../../assets/Projects/project1.jpg';

const projects = [
  {
    title: "Alana - live data app",
    description: "A web app for visualizing personalized Spotify data. View your top artists, top tracks, and recently played tracks with detailed audio information about each track.",
    image: project,
    link: "#",
  },
  {
    title: "Wohoo - weather app",
    description: "A real-time weather application providing instant updates on current conditions, forecasts, and severe weather alerts worldwide.",
    image: project,
    link: "#",
  },
  {
    title: "Pagee - real estate UI kit",
    description: "A complete UI kit for real estate platforms, featuring interactive property listings, search filters, and user-friendly layouts.",
    image: project,
    link: "#",
  },
  {
    title: "Keikoko - agency web",
    description: "A modern agency website template with a sleek design, optimized performance, and seamless user experience.",
    image: project,
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
