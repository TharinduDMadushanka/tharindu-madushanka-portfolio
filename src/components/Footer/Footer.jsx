import React from 'react'
import './Footer.css'

import fb from '../../assets/Footer/facebook_icon.png'
import insta from '../../assets/Footer/github.png'
import github from '../../assets/Footer/instagram_icon.png'
import linkedin from '../../assets/Footer/linkedin.png'

const Footer = () => {
  return (
    <div>
      <div id="footer">
        <hr />

        <div class="footer-icons">
            <a href="https://web.facebook.com/tharindu.dmadushanka" target='_blank'><img src={fb} alt="" /></a>
            <a href="https://www.instagram.com/tharindud_madushanka/" target='_blank'><img src={insta} alt="" /></a>
            <a href="https://github.com/TharinduDMadushanka" target='_blank'><img src={github} alt="" /></a>
            <a href="https://www.linkedin.com/in/tharindu-d-madushanaka-94a958306/" target='_blank'><img src={linkedin} /></a>
        </div>

        <p class='copyright-text'>@ 2025 Tharindu Madushanka. All rights reserved.</p>
     </div>
    </div>
  )
}

export default Footer
