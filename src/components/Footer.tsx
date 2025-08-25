import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/moezamini" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/moezamini/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>Thanks for cheking my Website</p>
      <p>Best Wishes : Moez Amini</p>
      <p>💜 </p>
    </footer>
  );
}

export default Footer;