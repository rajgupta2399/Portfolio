import React, { useState } from "react";
import "./contactForm.css";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmitMessage = (e) => {
    e.preventDefault();

    const newErrors = {
      name: name ? "" : "Name is required",
      email: email ? "" : "Email is required",
      subject: subject ? "" : "Subject is required",
      message: message ? "" : "Message is required",
    };

    if (Object.values(newErrors).some((error) => error !== "")) {
      setErrors(newErrors);
      return;
    }

    const serviceId = "service_mp8j5b6";
    const templateId = "template_46f20uw";
    const publicKey = "D4IUDD3dWZw93t0jY";

    const templateParams = {
      from_name: name,
      from_email: email,
      subject: subject,
      to_name: "Raj Kumar",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        setErrors({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch((err) => {
        console.log("Error Sending Email", err);
      });
  };

  return (
    <form className="contact-form mt-4" onSubmit={handleSubmitMessage}>
      <div className="row">
        <div className="col-md-6 form-group">
          <input
            type="text"
            name="fullname"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            className="form-control"
          />
          {errors.name && <div className="error-message">{errors.name}</div>}
        </div>
        <div className="col-md-6 form-group mt-3 mt-md-0">
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            className="form-control"
          />
          {errors.email && <div className="error-message">{errors.email}</div>}
        </div>
        <div className="form-group mt-3">
          <input
            type="text"
            name="subject"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Subject"
            className="form-control"
          />
          {errors.subject && (
            <div className="error-message">{errors.subject}</div>
          )}
        </div>
        <div className="form-group mt-3">
          <textarea
            name="message"
            id="message"
            rows="6"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="form-control"
            placeholder="Message"
          ></textarea>
          {errors.message && (
            <div className="error-message">{errors.message}</div>
          )}
        </div>
        <div className="text-center">
          <button type="submit">Send Message</button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
