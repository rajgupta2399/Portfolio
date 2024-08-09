import React, { useState } from "react";
import "./contactForm.css";

const ContactForm = () => {
  const initialState = {
    fullname: "",
    email: "",
    subject: "",
    message: "",
    result: "",
  };

  const [text, setText] = useState(initialState);

  const changeText = (e) => {
    const { name, value } = e.target;
    setText({ ...text, [name]: value, result: "" });
    console.log(text);
  };

  const handleSubmitMessage = (e) => {
    e.preventDefault();
    if (
      text.fullname === "" ||
      text.email === "" ||
      text.subject === "" ||
      text.message === ""
    ) {
      setText({ ...text, result: "Incomplete" });
    }
    console.log(text);
  };

  return (
    <form className="contact-form mt-4" onSubmit={handleSubmitMessage}>
      <div className="row">
        <div className="col-md-6 form-group">
          <input
            type="text"
            name="fullname"
            id="name"
            value={text.fullname}
            onChange={changeText}
            placeholder="Your Name"
            className="form=control"
          />
        </div>
        <div className="col-md-6 form-group mt-3 mt-md-0">
          <input
            type="email"
            name="email"
            id="email"
            value={text.email}
            onChange={changeText}
            placeholder="Your Email"
            className="form=control"
          />
        </div>
        <div className="form-group mt-3">
          <input
            type="text"
            name="subject"
            id="subject"
            value={text.subject}
            onChange={changeText}
            placeholder="Subject"
            className="form=control"
          />
        </div>
        <div className="form-group mt-3">
          <textarea
            name="message"
            id="message"
            rows="6"
            value={text.message}
            onChange={changeText}
            className="form-control"
            placeholder="Message"
          ></textarea>
        </div>
        {text.result === "Incomplete" && (
          <div className="error-message">Please fill in all above details</div>
        )}
        <div className="text-center">
          <button type="submit">Send Message</button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
