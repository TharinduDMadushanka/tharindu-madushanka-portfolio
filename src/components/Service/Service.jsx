import React from 'react'

const Service = () => {
  return (
    <div id="services">
        <div class="container">
            <h1 class="sub-title">My Services</h1> 

            <div class="services-list">
                <div>
                    <i class="fa-solid fa-code"></i>
                    <h2>Backend Developer</h2>
                    <p>As a backend developer, I specialize in building server-side logic, integrating databases, and ensuring  
                       application scalability. My expertise lies in creating secure, high-performance APIs, maintaining data 
                       integrity, and collaborating closely with frontend developers to deliver seamless experiences.
                    </p>
                    <a href="">Learn more</a>
                </div>
            
                <div>
                    <i class="fa-solid fa-crop"></i>
                    <h2>Frontend Developer</h2>
                    <p>As a frontend developer, I focus on crafting intuitive and responsive user interfaces. By utilizing 
                       modern frameworks like React and Bootstrap, I ensure that applications are visually appealing and 
                       provide an engaging, user-friendly experience on all devices.
                    </p>
                    <a href="">Learn more</a>
                </div>
            
                <div>
                    <i class="fa-brands fa-app-store"></i>
                    <h2>Problem Solving & Critical Thinking</h2>
                    <p>Problem-solving is at the core of every successful project. With a strong emphasis on critical thinking, 
                       I approach challenges analytically, breaking them down into manageable components and finding innovative 
                       solutions that enhance efficiency and productivity.
                    </p>
                    <a href="">Learn more</a>
                </div>
            </div>            

        </div>
    </div>
  )
}

export default Service
