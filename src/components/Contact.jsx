import React, { useState } from 'react';
import './Contact.css';
import { FaUser, FaEnvelope, FaPaperPlane } from 'react-icons/fa'; // Importing icons

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    
    // Show a confirmation message in the form of a styled alert
    setShowAlert(true);
    
    // Reset form fields
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    
    // Hide the alert after a few seconds
    setTimeout(() => {
      setShowAlert(false);
    }, 4000);  // 4 seconds
  };

  return (
    <div className="contact-container">
      <h2 className="contact-title">Get In Touch</h2>
      <p className="contact-description">
        Feel free to reach out for collaborations or just a friendly hello.
      </p>
      
      {/* Display the Alert Message */}
      {showAlert && (
        <div className="alert">
          <p>Your message has been successfully sent. Thank you!</p>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="contact-form">
        {/* Name Input */}
        <div className="input-container">
          <FaUser className="form-icon" />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="form-input"
            required
          />
        </div>

        {/* Email Input */}
        <div className="input-container">
          <FaEnvelope className="form-icon" />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="form-input"
            required
          />
        </div>

        {/* Message Textarea */}
        <div className="input-container">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="form-textarea"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button type="submit" className="form-button">
          <FaPaperPlane className="form-button-icon" /> Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
