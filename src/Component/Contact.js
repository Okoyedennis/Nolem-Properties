import React from "react";
import emailjs from "emailjs-com";
import { FaFacebook, FaPhoneAlt, FaInstagram, FaTwitter } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_s33q0nk",
        "template_71e3qs9",
        e.target,
        "user_F1KvHoYXiTu1HRN9fVl8g"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("FAILED!" + error);
        }
      );

    e.target.reset();
  }
  return (
    <section className="contact container">
      <h1>Contact Us </h1>
      <p className="sub-total">Lorem, ipsum dolor.</p>
      <div className="contact-wrapper " onSubmit={sendEmail}>
        <div className="contact-info">
          <h4>Contact Information</h4>
          <p>Fill up the form and click send</p>
          <div className="icon-text">
            <FaPhoneAlt className="icon" />
            <span>+234-812-888-5947</span>
          </div>
          <div className="icon-text">
            <FiMail className="icon" />
            <span>Okoyedennis7@gmail.com</span>
          </div>
          <div className="icon-text">
            <FaMapMarkerAlt className="icon" />
            <span>Surulere</span>
          </div>
          <div className="social-media">
            <a
              className="icon-circle"
              href="https://www.facebook.com/search/top?q=nolem%20properties"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook className="icon" />
            </a>
            <a
              className="icon-circle"
              href="https://www.facebook.com/search/top?q=nolem%20properties"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter className="icon" />
            </a>
            <a
              className="icon-circle"
              href="https://www.facebook.com/search/top?q=nolem%20properties"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram className="icon" />
            </a>
          </div>
        </div>
        <form action="">
          <div className="col">
            <div className="form-group">
              <input type="text" placeholder="Enter Name" name="name" />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Enter email" name="email" />
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <input type="text" placeholder="Subject" name="subject" />
            </div>
            <div className="form-group">
              <input type="tel" placeholder="Enter Phone Number" />
            </div>
          </div>
          <div className="col">
            <div className="form-group solo">
              <textarea
                name="message"
                placeholder="Type Message"
                cols="30"
                rows="10"
              ></textarea>
            </div>
          </div>
          <div className="col">
            <div className="form-group solo right">
              <button className="primary" type="submit">
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
