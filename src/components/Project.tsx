import React, { useState } from "react";
import Slider from "react-slick";

// Required slick styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../assets/styles/Project.scss";
import A1 from "../assets/images/A1.png";
import A2 from "../assets/images/A2.png";
import A3 from "../assets/images/A3.png";
import A4 from "../assets/images/A4.png";
import A5 from "../assets/images/A5.jpg";
import B1 from "../assets/images/B1.png";
import B2 from "../assets/images/B2.png";
import B8 from "../assets/images/B8.png";
import B3 from "../assets/images/B3.gif";
import C1 from "../assets/images/robot/C1.jpeg";
import C2 from "../assets/images/robot/C2.jpeg";
import C3 from "../assets/images/robot/C3.png";
import C4 from "../assets/images/robot/C4.jpeg";
import C5 from "../assets/images/robot/C5.png";
import C6 from "../assets/images/robot/C6.png";
import C7 from "../assets/images/robot/C7.png";
import C8 from "../assets/images/robot/C8.png";
import C9 from "../assets/images/robot/C9.gif";
import D2 from "../assets/images/D2.gif";
import D1 from "../assets/images/D1.png";
import D4 from "../assets/images/D4.gif";
import E1 from "../assets/images/Cyclo/E1.jpeg";
import E2 from "../assets/images/Cyclo/E2.png";
import E3 from "../assets/images/Cyclo/E3.png";
import E4 from "../assets/images/Cyclo/E4.png";
import E5 from "../assets/images/Cyclo/E5.png";
import E6 from "../assets/images/Cyclo/E6.png";
import E7 from "../assets/images/Cyclo/E7.png";
import w1 from "../assets/images/WS/w1.gif";
import w2 from "../assets/images/WS/w2.png";
import w3 from "../assets/images/WS/w3.png";
import w4 from "../assets/images/WS/w4.png";
import w5 from "../assets/images/WS/w5.png";
import w6 from "../assets/images/WS/w6.png";
import O2 from "../assets/images/canopener/O2.png";
import O3 from "../assets/images/canopener/O3.png";
import H1 from "../assets/images/EB/H1.png";
import H2 from "../assets/images/EB/H2.png";
import H3 from "../assets/images/EB/H3.png";
import H4 from "../assets/images/EB/H4.png";
import H5 from "../assets/images/EB/H5.jpeg";
import H8 from "../assets/images/EB/H8.png";
import H9 from "../assets/images/EB/H9.png";
import H11 from "../assets/images/EB/H11.png";
import H12 from "../assets/images/EB/H12.png";
import H13 from "../assets/images/EB/H13.png";
import H14 from "../assets/images/EB/H14.png";
import H15 from "../assets/images/EB/H15.png";
import S1 from "../assets/images/SOS/S1.png";
import S2 from "../assets/images/SOS/S2.png";
import S3 from "../assets/images/SOS/S3.gif";

const projects = [
  {
    title: "ASML Internship Project",
    images: [A4, A5, A3, A2, A1],
    description:
      "Optical Transceiver Integration for Lithography Systems",
    details: [
      "Developed and tested precision mechanical systems to integrate optical transceivers into ASML’s Reticle Stage for DUV/EUV lithography machines.",
      "Designed a 4-DOF test fixture achieving nanometer/milliradian accuracy to evaluate signal strength, delay skew, and bit error rate under misalignments and separations.",
      "Built and analyzed a functional mounting model capable of withstanding 43G accelerations while maintaining alignment tolerances, contributing to cost reduction, reliability improvements, and ASML’s PFAS-free initiative.",
    ],
  },
  {
    title: "Canyon Magnet Energy",
    images: [B2, B3, B1, B8],
    description:
      "High-Temperature Superconducting (HTS) Flux Pump Development",
    details: [
      "Researched, designed, and fabricated a Dynamo-type HTS Flux Pump capable of delivering up to 700 Amps into superconducting magnet coils under cryogenic (77K) conditions.",
      "Designed a liquid nitrogen cryogenic box for testing HTS magnet coils under cryogenic temperatures.",
      "Contributed to the design and fabrication of a coil winding machine for 4-15mm HTS coils width.",
    ],
  },
  {
    title: "Cube Craze Robot",
    images: [C9,C6, C5, C4, C3, C1, C2, C7, C8],
    description:
      "Meet the Black Pearl — It was the fastest robot in Cornell’s 2026 Cube Craze Competition.",
    details: [
"Designed and built an autonomous robot optimized for speed and efficiency in a competitive cube-collection challenge, working within strict budget and component constraints. Implemented a boost converter to step 6 V up to 24 V, maximizing motor RPM. Developed a lightweight, one-way intake door and side-wall system from poster board to minimize the mass and capture and retain cubes with minimal moving parts. Integrated dual QTI sensors with a custom filtering algorithm to detect field boundaries and navigate a diamond-shaped path. Happy to share more details—feel free to reach out!",    ],
  },
  {
    title: "Cord Conundrum",
    images: [D1, D4, D2],
    description:
      "I use this everyday!!!",
      
    details: [
      "Do your cords ever become tangled?",
      "We developed a stackable cord winder with teammates Remy and Marco to solve one of the biggest problems students had, based on survey feedback. Helps students manage cables efficiently and save time.",
    ],
  },
  {
    title: "Pnuematic & Magnetic Brakes for Hyperloop Maglev Train",
    images: [H2, H8,  H1, H9, H11, H12, H13, H4, H3, H5, H14, H15],
    description:
      "Led Braking Team of Cornell Hyperloop Project Team.",
    details: [
    "Managed Braking team in optimizing magnetic and pneumatic braking systems to minimize costs/weight, while enhancing safety, manufacturability, and compliance with Hyperloop competition requirements.",  
    "Designed, built, automated, and tested pneumatically actuated emergency brakes for the Hyperloop maglev train, enabling reliable full-stop capability of the pod.",
    "Researched, designed, and prototyped a circular Halbach array with a magnetic on/off switching mechanism for advanced magnetic braking.",
    "Automated the emergency braking system to activate during power loss or magnetic braking failure.",
    ],
  },
  {
    title: "Water Screen Display",
    images: [w3, w1, w2, w4, w5, w6],
    description:
      "Water Screen Display — 2D Object Projection with Droplet Control",
    details: [
      "Designed and built a programmable water screen capable of displaying 2D objects using falling water droplets. The system utilized 23 miniature solenoid valves controlled through MOSFETs and a Raspberry Pi.",
    ],
  },
  {
    title: "Cyclo Rotor",
    images: [E1, E7, E2, E4, E3, E6, E5],
    description:
    "Cyclo Rotor — Propulsion System for Next-Generation Drone",
    details: [
      "Researched, designed, and prototyped a cyclo-rotor propulsion system as part of an ongoing futuristic drone project. The cyclo rotor is being developed to enable multi-environment mobility, allowing the drone to operate in air, water, and on land. This work represents a key step toward versatile propulsion technologies for next-generation robotics.",
    ],
  },
  {
    title: "Can Opener",
    images: [O2, O3],
    description:
      "I Developed a functional Can Opener as part of my first undergraduate mechanical design course.",
    details: [
      "This project introduced core design principles, from concept generation and prototyping to evaluating usability and manufacturability, providing a strong foundation for future mechanical design work.",
    ],
  },
  {
    title: "SOS Signal Detector",
    images: [S3, S1, S2],
    description:
      "Morse Code SOS Signal Detector",
    details: [
      "Designed and implemented a program that detects Morse code input from a single button and transmits it via LEDs. Short presses are interpreted as dots (.) and long presses as dashes (–), with LEDs providing real-time visual feedback for each input. The system validates the full SOS sequence (...---...), triggering a distinct LED blink pattern upon correct entry and resetting for incorrect sequences.",
    ],
  },
];

export default function Projects() {
  const [selected, setSelected] = useState<number | null>(null);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    swipeToSlide: true,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };

  return (
    <div className="projects-container"id="Project">
      <h2 className="projects-title">Projects</h2>

      <div className="projects-grid">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="project-card"
            onClick={() => setSelected(idx)}
          >
            <img src={project.images[0]} alt={project.title} />
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>

      {selected !== null && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <h2 className="modal-title">{projects[selected].title}</h2>

            <div className="modal-slider">
              <Slider {...sliderSettings}>
                {projects[selected].images.map((img, i) => (
                  <div key={i}>
                    <img
                      src={img}
                      alt={`${projects[selected].title} ${i}`}
                      className="modal-image"
                    />
                    {/* Optional caption */}
                    {/* <p className="image-caption">Image {i + 1}</p> */}
                  </div>
                ))}
              </Slider>
            </div>

            <div className="modal-content">
              <p>{projects[selected].description}</p>
              <ul>
                {projects[selected].details.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
