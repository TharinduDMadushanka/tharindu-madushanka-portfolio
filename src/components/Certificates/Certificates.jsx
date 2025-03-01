import React from 'react';
import './Certificates.css';
import { BsArrowRight } from 'react-icons/bs';
import sql from '../../assets/Certificates/sql.png';
import java from '../../assets/Certificates/java.png';
import js_meta from '../../assets/Certificates/js-meta.jpeg';
import oop from '../../assets/Certificates/oop.jpeg';
import sb from '../../assets/Certificates/spring-boot.jpeg';
import ijse from '../../assets/Certificates/ijse.jpeg';

const Certificates = () => {
  const certificateData = [
    { id: 1, image: ijse, name: "Comprehensive Master Java Developer", issued: "IJSE", link: "https://www.linkedin.com/in/tharindu-d-madushanaka-94a958306/details/certifications/1740846512987/single-media-viewer/?profileId=ACoAAE4YXEoB8rxkvPehGS-DClnhFGoasCYMIkM" },
    { id: 2, image: sql, name: "SQL (Basic) Certificate", issued: "HackerRank", link: "https://www.hackerrank.com/certificates/73e26f305493" },
    { id: 3, image: java, name: "Java (Basic) Certificate", issued: "HackerRank", link: "https://www.hackerrank.com/certificates/f2944f539c60" },
    { id: 4, image: js_meta, name: "Programming with JavaScript", issued: "Meta", link: "https://www.coursera.org/account/accomplishments/verify/5JYUNN7MX3Q4?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course" },
    { id: 5, image: oop, name: "Object-Oriented Programming with Java", issued: "Universidad de Palermo", link: "https://www.coursera.org/account/accomplishments/verify/G94E6B4LYP7E?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course" },
    { id: 6, image: sb, name: "Spring: Framework in Depth", issued: "LinkedIn Learning", link: "https://www.linkedin.com/learning/certificates/bbc16290173356faaa39327acca0c114ecc62a886b20e4745cb8884f25f80ec5?trk=share_certificate" }
  ];

  return (
    <div className="container mt-5" id="certificates">
      <h2 className="text-center mb-5">My Certifications</h2>
      <div className="row">
        {certificateData.map((cert) => (
          <div key={cert.id} className="col-md-4">
            <a href={cert.link} target="_blank" rel="noopener noreferrer" className="certificate-link">
              <div className="certificate-card mb-4">
                <img src={cert.image} alt={cert.name} className="certificate-image" />
                <div className="certificate-overlay">
                  <h5>{cert.name}</h5>
                  <p>{cert.issued}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
      
      {/* View More Button */}
      <div className="text-center mt-4">
        <a href="https://www.linkedin.com/in/tharindu-d-madushanaka-94a958306/details/certifications/" target="_blank" rel="noopener noreferrer" className="view-more-btn">
          View More on LinkedIn 
        </a>
      </div>
    </div>
  );
};

export default Certificates;
