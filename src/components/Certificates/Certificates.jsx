import React from 'react';
import './Certificates.css';
import sql from '../../assets/Certificates/sql.png';  
import java from '../../assets/Certificates/java.png';  
import js_meta from '../../assets/Certificates/js-meta.jpeg';  
import oop from '../../assets/Certificates/oop.jpeg';  
import sb from '../../assets/Certificates/spring-boot.jpeg';  
import ijse from '../../assets/Certificates/ijse.jpeg';  


const Certificates = () => {
  const certificateData = [
    { id: 1, image: ijse, name: " Comprehensive Master Java Developer", issued: "IJSE" },
    { id: 2, image: sql, name: "SQL (Basic) Certificate", issued: "HackerRank" },
    { id: 3, image: java, name: "Java (Basic) Certificate", issued: "HackerRank" },
    { id: 4, image: js_meta, name: "Programming with JavaScript", issued: "Meta" },
    { id: 5, image: oop, name: "Object-Oriented Programming with Java", issued: "Universidad de Palermo" },
    { id: 6, image: sb, name: "Spring: Framework in Depth", issued: "Linkedin Learning" }
  ];

  return (
    <div className="container mt-5" id="certificates">
      <h2 className="text-center mb-5">My Certifications</h2>
      <div className="row">
        {certificateData.map((cert) => (
          <div key={cert.id} className="col-md-4">
            <div className="certificate-card mb-4">
              <img src={cert.image} alt={cert.name} className="certificate-image" />
              <div className="certificate-overlay">
                <h5>{cert.name}</h5>
                <p>{cert.issued}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
