import React from "react";
import "./About.scss";

import { motion } from "framer-motion";
import { bios } from "../../../Data";
import al from "../../../assets/al.jpg";
import res from "../../../assets/Tampara Venkata Santosh Anish Dora (Resume).pdf"
const About = () => {
  return (
    <div className="container " id="about">
      <div className="title">
        <span style={{ color: "#1dddbd" }}>Who Am I?</span>
        <h1>About Me</h1>
      </div>

      <div className="about_container">
        <div className="about_left">
          <img src={al} />
        </div>
        <div className="about_right">
          <p>
            I'm a software engineer with experience in the development of
            Angular and React-based web applications. Single page application
            development is my area of expertise. I have experience working with
            React Native as well. I'm currently pursuing MS in Computer Science
            and Engineering at Santa Clara University.
          </p>
          {bios.map((bio) => {
            return (
              <div className="bio" key={bio.id}>
                <span className="bioKey">
                  {bio.icon}
                  {bio.key}
                </span>
                <span className="bioValue">{bio.value}</span>
              </div>
            );
          })}
          <a href={res} download="Tampara Venkata Santosh Anish Dora Resume">
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
