import {
  FaUser,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

import del from ".//assets/del.png";
import bg from ".//assets/bg.jpeg";
import sp from ".//assets/sp.png";
import w1 from ".//assets/1.png";
import w2 from ".//assets/2.png";
import w3 from ".//assets/3.png";
import w4 from ".//assets/4.png";
import ag from ".//assets/ag.png";
import cpp from ".//assets/cpp.png";
import css from ".//assets/css.png";
import ex from ".//assets/ex.png";
import ht from ".//assets/ht.png";
import js from ".//assets/js.png";
import mdb from ".//assets/mdb.png";
import nd from ".//assets/nd.png";
import py from ".//assets/py.png";
import rct from ".//assets/rct.png";
import rn from ".//assets/rn.png";

export const navLinks = ["home", "about", "skills", "portfolio", "contact"];

export const icons = [
  {
    id: 1,
    im: ag,
  },
  {
    id: 2,
    im: cpp,
  },
  {
    id: 3,
    im: css,
  },
  {
    id: 4,
    im: ex,
  },
  {
    id: 5,
    im: ht,
  },
  {
    id: 6,
    im: js,
  },
  {
    id: 7,
    im: mdb,
  },
  {
    id: 8,
    im: nd,
  },
  {
    id: 9,
    im: py,
  },
  {
    id: 10,
    im: rct,
  },
  {
    id: 11,
    im: rn,
  },
];

export const socialIcons = [
  {
    id: 1,
    icon: <FaGithub />,
    web: "https://github.com/AnishDora",
  },
  {
    id: 2,
    icon: <FaLinkedin />,
    web: "https://linkedin.com/in/anish-dora/",
  },
  <FaLinkedin />,
];

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Name",
    value: "Tampara Venkata Santosh Anish Dora",
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    key: "Phone",
    value: "+1(925)2163699",
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "tdora@scu.edu | anishdora2755@gmail.com",
  },
];

export const experiences = [
  {
    id: 1,
    im: del,
    year: " Jan - Jun 2022 ",
    position: "Software Engineer Intern",
    company: "Deloitte. USI ",
    role: `Worked on the company's internal project.Designed, Developed and maintained the website for the employee portal.Worked on technology including Angular Framework, SCSS, and Typescript. `,
  },
  {
    id: 2,
    year: "Mar - Aug 2021",
    im: bg,
    position: "Software Engineer Intern",
    company: "Bootstrap Guru",
    role: `Worked as a front-end developer and a member in the maintenance team.Engaged in brainstorming sessions for further development like adding new features.Tech worked on: HTML, CSS, React Framework.`,
  },
  {
    id: 3,
    year: "2020-2021",
    im: sp,
    position: "Published Research Paper",
    company: "ICICA Springer",
    role: `"A Graph Invariant Based TGO Model for RailTel Optical Networks"`,
  },
];

export const workImages = [
  {
    id: 1,
    img: w1,
    name: "Netflix",
    web: "https://github.com/AnishDora/Netflix-Frontend-Clone-React-",
  },
  {
    id: 2,
    img: w2,
    name: "Sorting",
    web: "https://github.com/AnishDora/Sorting_Visualizer",
  },
  {
    id: 3,
    img: w3,
    name: "Student",
    web: "https://github.com/AnishDora/student_club_notification",
  },
  {
    id: 4,
    img: w4,
    name: "ToDo",
    web: "https://github.com/AnishDora/To-Do-App-using-React-Native",
  },
];

export const workNavs = ["All"];

export const contacts = [
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: "+1(925)2163699",
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "tdora@scu.edu | anishdora2755@gmail.com",
  },
  {
    id: 5,
    icon: <FaLinkedin />,
    infoText: "linkedin.com/in/anish-dora/",
  },
  {
    id: 4,
    icon: <FaGithub />,
    infoText: "github.com/AnishDora",
  },

  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: "Santa Clara, California, United States of America",
  },
];
