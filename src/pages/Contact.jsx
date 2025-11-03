import { useState } from 'react';
import './Pages.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send to backend
    console.log('Contact form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="page-container">
      <div className="content-section">
        <h1>Contact Us</h1>
        <p className="lead">
          Get in touch with us. We'd love to hear from you!
        </p>

        <div className="contact-container">
          <div className="contact-info">
            <h2>Get In Touch</h2>
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <div>
                <h3>Email</h3>
                <p>support@terfsite.com</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">📱</div>
              <div>
                <h3>Phone</h3>
                <p>+40 123 456 789</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div>
                <h3>Location</h3>
                <p>Bucharest, Romania</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">⏰</div>
              <div>
                <h3>Working Hours</h3>
                <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <h2>Send us a Message</h2>
            {submitted ? (
              <div className="success-message">
                ✓ Thank you! Your message has been sent successfully.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label>Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Subject of your message"
                  />
                </div>

                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
