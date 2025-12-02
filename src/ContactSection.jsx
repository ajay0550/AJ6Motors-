import React, { useState } from "react";
import "./ContactSection.css";

const InputField = ({ label, placeholder, width, onChange }) => {
  return (
    <div className={`flex flex-col ${width || "half-width"} input-wrapper`}>
      <label className="input-label">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="input-box"
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

const ContactItem = ({ icon, title, content }) => (
  <div className="contact-item">
    <div className="contact-item-inner">
      <div className="contact-item-header">
        <img src={icon} alt="" className="contact-item-icon" />
        <h3 className="contact-item-title">{title}</h3>
      </div>
      <div className="contact-item-content">{content}</div>
    </div>
  </div>
);

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    alert("Form submitted (placeholder)");
  };

  const contactData = [
    {
      icon: "/call.png",
      title: "Call us",
      content: (
        <>
          +91 7386594076 <br/>
          +91 9652571976
        </>
      ),
    },
    {
      icon: "/email.png",
      title: "Email us",
      content: (
        <>
          aj6motors@gmail.com  
        </>
      ),
    },
    {
      icon: "/location.png",
      title: "Visit us",
      content: (
        <>
          1-144, Satti Reddy Complex, Ganesh Nagar Beside Lambodar Tires, Near Zudio Shopping Komaplly, Main Road.
        </>
      ),
    },
  ];

  return (
    <div id="contact-section" className="contact-wrapper">
      <div className="contact-container">

        {/* HEADER */}
        <section className="contact-header">
          <h1 className="contact-title">Contact us</h1>
          <p className="contact-subtitle">
            <b>Book your appointment</b>, Call us anytime during our working hours.
          </p>
          <p className="contact-subtitle">
            <b>Timings</b>: 10:00 AM – 8:00 PM (Mon–Sun)
          </p>
        </section>

        {/* CONTACT INFO */}
        <section className="contact-info-grid">
          {contactData.map((item, i) => (
            <ContactItem key={i} {...item} />
          ))}
        </section>
        <section className="contact-button-wrapper">
            <a 
            href="https://www.google.com/maps/place/AJ6+Motors+Car+Service+Centre/@17.5382904,78.4884428,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb85997367c6e5:0x4f7d4c41f6767345!8m2!3d17.5382904!4d78.4908958!16s%2Fg%2F11vd8wsszy?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            >
            <button className="contactSectionbuttn">Click Here for Maps</button>
            </a>
        </section>
      </div>
    </div>
  );
};

export default ContactSection;
