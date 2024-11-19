import React, { useState } from 'react';
import LabeledInput from '../common/LabeledInput';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.message) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Message Sent!');
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>We would love to hear from you! Please fill out the form below to get in touch with us.</p>

      <form onSubmit={handleSubmit} className="contact-form">
        <LabeledInput
          label="Your Name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
        />
        <LabeledInput
          label="Your Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />
        <div className="form-group">
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here"
            required
          />
          {errors.message && <p className="error">{errors.message}</p>}
        </div>
        <div className="submit-button-container">
        <button type="submit" className="submit-button">Send Message</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
