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
                            Hi, I'm Moez Amini — a Mechanical Engineering student at Cornell University
                            with a strong background in design, prototyping, and system 
                            optimization. I’m passionate about solving complex engineering 
                            problems at the intersection of mechanics, electronics, and 
                            software. 
                        </p>
                        <p>
                            Over the past few years, I’ve led projects in braking systems, 
                            superconducting magnet design, and AI-enabled applications. 
                            My work spans from hands-on fabrication to software development 
                            and system integration. 
                        </p>
                        <p>
                            Outside of academics, I enjoy exploring emerging technologies, 
                            building side projects, and sharing knowledge through collaborations.
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
                            </ul>
                        </div>
                        <div className="skills-column">
                            <h3>Technical / Hardware</h3>
                            <ul>
                                <li>Cleanroom</li>
                                <li>Pneumatics</li>
                                <li>Cryogenics</li>
                                <li>Microcontrollers</li>
                                <li>High Magnetic Fields</li>
                                <li>BERT</li>
                                <li>Servos</li>
                                <li>LIM motors</li>
                                <li>Machining</li>
                                <li>CNC</li>
                                <li>Transceivers</li>
                                <li>Optics</li>
                                <li>Laser cutting</li>
                                <li>3D printing</li>
                            </ul>
                        </div>
                        <div className="skills-column">
                            <h3>Programming</h3>
                            <ul>
                                <li>Python</li>
                                <li>Java</li>
                                <li>MATLAB</li>
                                <li>C++</li>
                                <li>TwinCAT</li>
                                <li>LaTeX</li>
                            </ul>
                            <h3>Other</h3>
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
