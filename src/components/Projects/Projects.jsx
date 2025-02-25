import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./Projects.css"; // Custom CSS file

import project from '../../assets/Projects/project1.jpg'

const projects = [
  {
    title: "Alana - live data app",
    image: project,
    link: "#",
  },
  {
    title: "Wohoo - weather app",
    image: project,
    link: "#",
  },
  {
    title: "Pagee - real estate UI kit",
    image: project,
    link: "#",
  },
  {
    title: "Keikoko - agency web",
    image: project,
    link: "#",
  },
];

const Projects = () => {
  return (
    <section className="projects-section">
      <div className="container-fluid">
        <h6 className=" fw-bold">Recent Work</h6>
        <h2 className="text-white fw-bold mb-4">Some of my favorite projects.</h2>
        <div className="row g-4">
          {projects.map((project, index) => (
            <div key={index} className="col-sm-6 col-md-4 d-flex">
              <div className="project-card w-100">
                <img src={project.image} alt={project.title} className="img-fluid" />
                <div className="project-info">
                  <h5 className="text-white fw-bold">{project.title}</h5>
                  <a href={project.link} className="fw-bold">See project ↗</a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <a href="#" className="btn all-proj-btn px-4 py-2">View All Projects</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
