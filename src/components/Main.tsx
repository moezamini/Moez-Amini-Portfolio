import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Main.scss';
import Avatar from "../assets/images/Avatar.png";

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={Avatar} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/moezamini/Moez-Amini-Portfolio/blob/main/Amini_Moez_Re.pdf" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/moezamini/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="mailto:ma872@cornell.edu" target="_blank" rel="noreferrer"><EmailIcon/></a>
          </div>
          <h1>Moez Amini</h1>
          <p>Mechanical Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/moezamini" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/moezamini/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="mailto:ma872@cornell.edu" target="_blank" rel="noreferrer"><EmailIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;