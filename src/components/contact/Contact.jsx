import React from "react";
import "./contact.scss";
import "./ContactForm";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="formContainer">
        <h2>Let's talk</h2>
        <ContactForm />
      </div>
    </div>
  );
}
