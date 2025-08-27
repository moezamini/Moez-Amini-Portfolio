import React from "react";
import '../assets/styles/AboutMe.scss';

function AboutMe() {
    return (
        <div className="container" id="about">
            <div className="about-container">
                <h1>About Me</h1>
                <div className="about-content">
                    <div className="about-text">
                        <p>
                            Hi, I'm Moez Amini — a senior majoring in Mechanical Engineering at Cornell University
                            with a strong background in design, prototyping, and system 
                            optimization. I’m passionate about solving complex engineering 
                            problems at the intersection of mechanics, electronics, and 
                            software.
                        </p>
                        <p>
                        Over the past few years, I’ve had the opportunity to work on diverse projects across multiple industries, 
                        including semiconductors, automation and robotics, transportation, advanced materials, and energy. 
                        </p>
                    </div>
                    <div className="about-image">
                        <img src={require("../assets/images/Profile.jpg")} alt="Profile" />
                    </div>
                </div>

                {/* Skills Section */}
                <div className="skills-section">
                    <h2>Specialized Skills</h2>
                    <div className="skills-columns">
                        <div className="skills-column">
                            <h3>Engineering</h3>
                            <ul>
                            <li>CAD: NX, SolidWorks, Fusion 360</li>
                            <li>Finite Element Analysis: ANSYS (Workbench, Maxwell, Fluent), MATLAB</li>
                            <li>DFMEA (Design Failure Mode & Effects Analysis)</li>
                            <li>Mechatronics & Feedback Control</li>
                            <li>Robotics & Automation</li>
                            <li>Circuit Design</li>
                            <li>Machining: CNC (Green Apron Certified), General Fabrication</li>
                            <li>Laser Cutting & 3D Printing</li>
                            <li>Cleanroom Protocols & Safety</li>
                            <li>Fluids, Pneumatics, Cryogenics</li>
                            <li>High Magnetic Field</li>
                            <li>Optics, Photonics , Lasers & Transceivers</li>
                            <li>Bit Error Rate Tester (BERT)</li>
                            <li>LabVIEW & Simulink</li>
                            <li>Git / GitHub </li>
                            </ul>
                        </div>
                        <div className="skills-column">
                        <h3>Programming & Control</h3>
                            <ul>
                            <li>Python, MATLAB, Java, C++</li>
                            <li>Algorithms & Data Structures</li>
                            <li>Arduino, Raspberry Pi, Microcontrollers, TwinCAT</li>
                            <li>Embedded Operating Systems</li>
                            <li>Control Systems & Embedded Programming</li>
                            <li>Website Development</li>
                            <li>LaTeX</li>
                            <li>Microsoft Office Suite</li>
                            </ul>

                            <h3>Other</h3>
                            <ul>
                            <li>Languages: English, Persian/Farsi/Dari, Pashto, Turkish</li>
                            <li>Video Editing</li>
                            <li>Side Projects & Prototyping</li>
                            <li>Sailing, Paddle Boarding, Swimming, Hiking</li>
                            <li>On a Mission of Food Exploration</li>
                            </ul>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
