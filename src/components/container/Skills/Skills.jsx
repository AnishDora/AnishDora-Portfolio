import React, { useState } from "react";
import "./Skills.scss";
import { icons } from "../../../Data";
import { experiences } from "../../../Data";
import { finishes } from "../../../Data";
import { motion } from "framer-motion";
import scu from "../../../assets/scu.png";
import gitam from "../../../assets/gitam.jpeg";

const Skills = () => {
  const [active, setActive] = useState(1);
  return (
    <div className="container" id="skills">
      <div className="title">
        <span style={{ color: "#1dddbd" }}>What I Expert?</span>
        <h1>Education, Skills And Experience</h1>
      </div>
      <div className="select">
        <button
          onClick={() => setActive(1)}
          className={active === 1 ? "active" : ""}
        >
          Education
        </button>
        <button
          onClick={() => setActive(2)}
          className={active === 2 ? "active" : ""}
        >
          Skills
        </button>
        <button
          onClick={() => setActive(3)}
          className={active === 3 ? "active" : ""}
        >
          Experiences
        </button>
      </div>
      <div className="education">
        {active === 1 && (
          <div>
            <div>
              <img style={{ width: "55px", height: "55px" }} src={scu}></img>
              <h2>Santa Clara University</h2>
              <h3>2022-2024</h3>
              <h3>MS in Computer Science and Engineering</h3>
              <h5>CGPA: 3.85</h5>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div>
              <img style={{ width: "55px", height: "55px" }} src={gitam}></img>
              <h2>Gandhi Institute of Technology and Management</h2>
              <h3>2018-2022</h3>
              <h3>BTech in Computer Science and Engineering</h3>
              <h5>CGPA: 8.88</h5>
            </div>
          </div>
        )}
      </div>
      <div className="skills">
        {active === 2 &&
          icons.map((icon, index) => {
            return (
              <div key={icon.id} className="tools">
                <img src={icon.im}></img>
              </div>
            );
          })}
      </div>
      <div className="experiencs">
        {active === 3 &&
          experiences.map((experience) => {
            return (
              <div className="experience" key={experience.id}>
                <img
                  style={{ height: "45px", width: "55px", marginRight: "30px" }}
                  src={experience.im}
                ></img>
                <h3>{experience.company}</h3>
                <h5>{experience.year}</h5>
                <div className="position">
                  <h3>{experience.position}</h3>
                  <p>{experience.role}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Skills;
