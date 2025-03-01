import React from 'react';
import './Certificates.css';
import sql from '../../assets/Certificates/sql.png';  
import java from '../../assets/Certificates/java.png';  
import js_meta from '../../assets/Certificates/js-meta.jpeg';  
import oop from '../../assets/Certificates/oop.jpeg';  
import sb from '../../assets/Certificates/spring-boot.jpeg';  
import python from '../../assets/Certificates/python.jpeg';  


const Certificates = () => {
  const certificateData = [
    { id: 1, image: sql, name: "React Developer", issued: "January 2024" },
    { id: 2, image: java, name: "Java Spring Boot", issued: "March 2023" },
    { id: 3, image: js_meta, name: "Full-Stack Web Dev", issued: "December 2022" },
    { id: 4, image: oop, name: "React Developer", issued: "January 2024" },
    { id: 5, image: sb, name: "Java Spring Boot", issued: "March 2023" },
    { id: 6, image: python, name: "Full-Stack Web Dev", issued: "December 2022" },
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
                <p>Issued: {cert.issued}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
