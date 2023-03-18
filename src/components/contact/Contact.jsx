import React from "react";
import "./contact.scss";
import "./ContactForm";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="formContainer">
        <h2>Let's talk</h2>
        {/* <hr />
        <p className="description">
          <span>Rockhill, SC</span>
          <span>(803)415-6431</span>
          <span>karkoub.ashley@gmail.com</span>
        </p> */}
        <ContactForm />
      </div>
    </div>
  );
}
