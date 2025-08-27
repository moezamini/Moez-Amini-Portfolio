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
                            <h3>Engineering Software & Tools</h3>
                            <ul>
                                <li>NX</li>
                                <li>Teamcenter (TC)</li>
                                <li>SolidWorks</li>
                                <li>Fusion360</li>
                                <li>ANSYS (Workbench, Maxwell, Fluent)</li>
                                <li>AutoCAD</li>
                                <li>Simulink</li>
                                <li>Git / GitHub</li>

                                
                            </ul>
                        </div>
                        <div className="skills-column">
                            <h3>Technical / Hardware</h3>
                            <ul>
                                <li>Cleanroom</li>
                                <li>Pneumatics</li>
                                <li>Cryogenics</li>
                                
                                <li>High Magnetic Fields</li>
                                <li>Bit Error Rate Tester (BERT)</li>
                                <li>Servos & Actuators</li>
                                <li>Linear Induction Motors (LIM)</li>
                                <li>General Machining / Fabrication</li>
                                <li>CNC Machining (Green Apron Certified)</li>
                                <li>Transceivers</li>
                                <li>Optics & Photonics</li>
                                <li>Laser cutting</li>
                                <li>3D printing</li>
                            </ul>
                        </div>
                        <div className="skills-column">
                            <h3>Programming & Control</h3>
                            <ul>
                                <li>Python</li>
                                <li>Java</li>
                                <li>MATLAB</li>
                                <li>C++</li>
                                <li>TwinCAT</li>
                                <li>LaTeX</li>
                                <li>MS Office Suit</li>
                                <li>Arduino</li>
                                <li>Raspberry Pi</li>
                                <li>Microcontrollers</li>
                            </ul>
                            <h3>Languages</h3>
                            <ul>
                                <li>English (Proficient)</li>
                                <li>Persian (Proficient)</li>
                                <li>Pashto (Fluent)</li>
                                <li>Turkish (Fluent)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
