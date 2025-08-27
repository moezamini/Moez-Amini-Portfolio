import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/moezamini/Moez-Amini-Portfolio/blob/main/Amini_Moez_Re.pdf" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/moezamini/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a href="mailto:ma872@cornell.edu" target="_blank" rel="noreferrer"><EmailIcon/></a>
      </div>
      <p>Thanks for checking my portfolio</p>
      <p>Best Wishes : Moez Amini</p>
      <p>💜 </p>
    </footer>
  );
}

export default Footer;