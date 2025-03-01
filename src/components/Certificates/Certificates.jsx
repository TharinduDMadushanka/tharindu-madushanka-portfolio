import React from 'react';
import './Certificates.css';
import cert1 from '../../assets/Projects/blog-site.jpg';  
import cert2 from '../../assets/Projects/blog-site.jpg'; 
import cert3 from '../../assets/Projects/blog-site.jpg'; 

const Certificates = () => {
  const certificateData = [
    { id: 1, image: cert1, name: "React Developer", issued: "January 2024" },
    { id: 2, image: cert2, name: "Java Spring Boot", issued: "March 2023" },
    { id: 3, image: cert3, name: "Full-Stack Web Dev", issued: "December 2022" },
    { id: 1, image: cert1, name: "React Developer", issued: "January 2024" },
    { id: 2, image: cert2, name: "Java Spring Boot", issued: "March 2023" },
    { id: 3, image: cert3, name: "Full-Stack Web Dev", issued: "December 2022" },
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
