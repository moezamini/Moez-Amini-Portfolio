import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Relevant Engineering Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="08.2025 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Manufacturing Learning Studio Assistant</h3>
            <h4 className="vertical-timeline-element-subtitle">Cornell Mechanical & Aerospace Engineering <span style={{ fontSize: "1em", fontWeight: "normal", fontFamily: "Arial, sans-serif" }}>Ithaca, NY</span></h4> 
            <p>
              CAD development, Machinning, CNC Machinning, Tutoring, Assisting Instructional Labs.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="05.2025 - 08.2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Mechanical Design Engineer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">ASML <span style={{ fontSize: "1em", fontWeight: "normal", fontFamily: "Arial, sans-serif" }}>Wilton, CT</span></h4>
            <p>
            Designed, built and tested optical transceiver integration solutions for ASML lithography machines, improving reliability, reducing costs and weight, and meeting nanometer/milliradian precision under extreme conditions.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="09.2022 - 11.2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Braking Team Lead</h3>
            <h4 className="vertical-timeline-element-subtitle">Cornell Hyperloop Project Team  <span style={{ fontSize: "1em", fontWeight: "normal", fontFamily: "Arial, sans-serif" }}>Ithaca, NY</span></h4>
            <p>
            Led braking system design and testing for Cornell’s Hyperloop maglev train, building pneumatic brakes from the ground up, developing magnetic brakes, automating emergency brakes, and ensuring safety and compliance.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="05.2024 - 08.2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Electro-Mechanical Engineer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Canyon Magnet Energy  <span style={{ fontSize: "1em", fontWeight: "normal", fontFamily: "Arial, sans-serif" }}>Stony Brook, NY</span></h4>
            <p>
            Researched, designed, and built a Dynamo-type High Temperature Superconductor(HTS, 77K) Flux Pump from scratch, developed a liquid nitrogen cryogenic test box for HTS coils, and contributed to coil winding machine design and development for 4–15 mm HTS coils."
            </p>
            </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="12.2023 - 05.2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Instructional Lab Assistant</h3>
            <h4 className="vertical-timeline-element-subtitle">Cornell MAE Instructional Labs  <span style={{ fontSize: "1em", fontWeight: "normal", fontFamily: "Arial, sans-serif" }}>Ithaca, NY</span></h4>
            <p>
            Managed equipments for MAE instructional lab operations, maintaining and calibrating equipment, preparing kits, and machining/building experimental hardware.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;