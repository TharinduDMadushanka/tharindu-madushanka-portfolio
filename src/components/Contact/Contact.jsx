import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Contact.css'; // Ensure this file is linked correctly

const Contact = () => {
  return (
    <div id="contact">
      <div className="container-fluid">
        <div className="row">
          {/* Left Section */}
          <div className="contact-left">
            <h1 className="sub-title">Have any project in mind?</h1>
            <p> <i className="bi bi-envelope-paper"></i> tharindudmadushanka920@gmail.com</p>
            <p> <i className="bi bi-telephone"></i> 076 2791821</p>
            <div className="social-icons">
              <a href="https://web.facebook.com/tharindu.dmadushanka"><i className="bi bi-facebook"></i></a>
              <a href="#"><i className="bi bi-twitter"></i></a>
              <a href="https://www.instagram.com/tharindud_madushanka/"><i className="bi bi-instagram"></i></a>
              <a href="https://www.linkedin.com/in/tharindu-d-madushanaka-94a958306/"><i className="bi bi-linkedin"></i></a>
            </div>
            <a href="/images/my-cv.pdf" download className="btn btn-download">Download CV</a>
          </div>

          {/* Right Section */}
          <div className="contact-right">
            <form>
              <input type="text" name="Name" placeholder="Your Name" required />
              <input type="email" name="Email" placeholder="Your Email" required />
              <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
              <button type="submit" className="btn btn-submit">Submit</button>
            </form>
          </div>
        </div>

        {/* Tools and Technologies Section */}
        <div className="tools-section">
          <h2 className="tools-title">Tools and Technologies</h2>
          <div className="tools-icons">
            <i className="bi bi-filetype-java" title="Java"></i>
            <i className="bi bi-node-plus-fill" title="Node.js"></i>
            <i className="bi bi-terminal-fill" title="Linux"></i>
            <i className="bi bi-braces-asterisk" title="Figma"></i>
            <i className="bi bi-filetype-html" title="HTML5"></i>
            <i className="bi bi-filetype-js" title="JavaScript"></i>
            <i className="bi bi-database-fill" title="MySQL"></i>
            <i className="bi bi-git" title="Git"></i>
            <i className="bi bi-cloud-upload-fill" title="Postman"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
