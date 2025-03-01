import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Contact.css'; // Ensure this file is linked correctly

import java from '../../assets/Tools/java.png'
import python from '../../assets/Tools/python.png'
import java_script from '../../assets/Tools/js.png'
import node_js from '../../assets/Tools/node.png'
import html from '../../assets/Tools/html.png'
import css from '../../assets/Tools/css.png'
import spring_boot from '../../assets/Tools/sprong-boot.png'
import react from '../../assets/Tools/react.png'
import boostrap from '../../assets/Tools/bootstrap.png'
import tailwind from '../../assets/Tools/tailwind.png'
import git from '../../assets/Tools/git.png'
import canva from '../../assets/Tools/canva.png'
import figma from '../../assets/Tools/figma.png'
import my_sql from '../../assets/Tools/my-sql.png'
import postgre_sql from '../../assets/Tools/postgresql.png'
import mongo_db from '../../assets/Tools/mongo-db.png'
import inteiij from '../../assets/Tools/intellij.png'
import pycharm from '../../assets/Tools/pycharm.png'
import vs_code from '../../assets/Tools/vs-code.png'
import netbeans from '../../assets/Tools/netbeans.png'
import postman from '../../assets/Tools/postman.png'

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
            <img src={java} alt="Java" title="Java" />
            <img src={python} alt="Python" title="Python" />
            <img src={java_script} alt="JavaScript" title="JavaScript" />
            <img src={node_js} alt="Node.js" title="Node.js" />
            <img src={html} alt="HTML5" title="HTML5" />
            <img src={css} alt="CSS3" title="CSS3" />
            <img src={spring_boot} alt="Spring Boot" title="Spring Boot" />
            <img src={react} alt="React" title="React" />
            <img src={boostrap} alt="Bootstrap" title="Bootstrap" />
            <img src={tailwind} alt="Tailwind CSS" title="Tailwind CSS" />
            <img src={git} alt="Git" title="Git" />
            <img src={canva} alt="Canva" title="Canva" />
            <img src={figma} alt="Figma" title="Figma" />
            <img src={my_sql} alt="MySQL" title="MySQL" />
            <img src={postgre_sql} alt="PostgreSQL" title="PostgreSQL" />
            <img src={mongo_db} alt="MongoDB" title="MongoDB" />
            <img src={inteiij} alt="IntelliJ" title="IntelliJ" />
            <img src={pycharm} alt="PyCharm" title="PyCharm" />
            <img src={vs_code} alt="VS Code" title="VS Code" />
            <img src={netbeans} alt="NetBeans" title="NetBeans" />
            <img src={postman} alt="Postman" title="Postman" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
