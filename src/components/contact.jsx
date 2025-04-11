import React, { useState } from 'react';
import './css/contact.css';  // Custom CSS for styling
import Header from './Header';  // Header component
import Footer from './Footer';  // Footer component

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [messageSent, setMessageSent] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check if all fields are filled
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError('Please fill in all fields');
      return;
    }

    try {
      // Simulate sending message (Here you should send the form data to the backend)
      console.log(formData);  // For now, logging the form data

      // Assuming the message is sent successfully
      setMessageSent(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setError('Something went wrong. Please try again later.');
    }
  };

  return (
    <>
      <Header />
      <div className="contact-us-container">
        <div className="contact-us-header">
          <h1>Contact Us</h1>
          <p>We're here to help! Get in touch with our customer service team.</p>
        </div>

        <div className="contact-us-content">
          {/* Contact Form */}
          <section className="contact-form-section">
            <h2>Send us a message</h2>
            {messageSent && <p className="success-message">Your message has been sent successfully!</p>}
            {error && <p className="error-message">{error}</p>}
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name:</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleInputChange} 
                  placeholder="Enter your full name" 
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address:</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleInputChange} 
                  placeholder="Enter your email" 
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject:</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject} 
                  onChange={handleInputChange} 
                  placeholder="Subject of your inquiry" 
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleInputChange} 
                  placeholder="Write your message here" 
                  rows="5" 
                  required
                />
              </div>

              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </section>

          {/* Contact Information */}
          <section className="contact-info-section">
            <h2>Other Ways to Contact Us</h2>
            <p>If you have any questions, feel free to reach us through the following channels:</p>
            <ul>
              <li>
                <strong>Email:</strong> <a href="mailto:support@azshopping.com">support@azshopping.com</a>
              </li>
              <li>
                <strong>Phone:</strong> +1 800 123 4567
              </li>
              <li>
                <strong>Live Chat:</strong> Available on our website (during business hours)
              </li>
              <li>
                <strong>Social Media:</strong>
                <ul>
                  <li><a href="https://facebook.com/azshopping" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                  <li><a href="https://twitter.com/azshopping" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                  <li><a href="https://instagram.com/azshopping" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                </ul>
              </li>
            </ul>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ContactUs;
