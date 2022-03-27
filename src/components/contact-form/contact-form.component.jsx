import React from "react";

import "./contact-form.styles.scss";

class ContactForm extends React.Component {
  render() {
    return (
      <form className="contact-form"> 
        <input
          name="name"
          type="text"
          className="feedback-input"
          placeholder="Name"
        />
        <input
          name="email"
          type="text"
          className="feedback-input"
          placeholder="Email"
        />
        <textarea
          name="text"
          className="feedback-input"
          placeholder="Comment"
        ></textarea>
        <input type="submit" value="SUBMIT" />
      </form>
    );
  }
}

export default ContactForm;
