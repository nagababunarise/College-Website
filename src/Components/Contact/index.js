import React from "react";
import "./index.css";
import msg_icon from "../../Assets/msg-icon.png";
import phone_icon from "../../Assets/phone-icon.png";
import mail_icon from "../../Assets/mail-icon.png";
import location_icon from "../../Assets/location-icon.png";
import white_arrow from "../../Assets/white-arrow.png";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-col1">
        <h3>
          Send us a message
          <img src={msg_icon} alt="" />
        </h3>
        <p>
          Feel free to reach out through contact from or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" className="con-logo" />
            contact@nandaNandhu.dev
          </li>
          <li>
            <img src={phone_icon} alt="" className="con-logo" />
            +1 123-456-7890
          </li>
          <li>
            <img src={location_icon} alt="" className="con-logo" />
            77 Massachusetts Ave, Cambridge
            <br />
            MA 02139, United States
          </li>
        </ul>
      </div>
      <div className="contact-col1">
        <form>
          <label>Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            required
          />
          <label>Write your message here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit now
            <img src={white_arrow} alt="" className="arrow-logo" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
