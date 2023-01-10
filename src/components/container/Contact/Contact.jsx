import React from "react";
import "./Contact.scss";
import { contacts } from "../../../Data";
import { socialIcons } from "../../../Data";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="container" id="contact">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="title"
      >
        <span style={{ color: "#1dddbd" }}>get in touch</span>
        <h1>Contact Me</h1>
      </motion.div>
      <div className="contact_form">
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-150, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="contact_left_container"
        >
          <h3>Just Say Hi</h3>
          <p className="contact_text">
            Feel free to reach out to any of the below.
          </p>
          {contacts.map((contact) => {
            return (
              <div className="contact_left" key={contact.id}>
                <div className="icon">{contact.icon}</div>
                <p>{contact.infoText}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
