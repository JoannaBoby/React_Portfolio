import React from 'react';
import './contactform.css';


function ContactForm() {
  return (
    <section className="contact-section">
      <h1>Contact Me</h1>

      <p>
        If you'd like to collaborate or just say hello,
        feel free to reach out using the form below.
      </p>

      <form className="contact-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="your.email@example.com"
              required
            />
          </div>
        </div>

        <div className="form-group comments-group">
          <label htmlFor="comments">Comments</label>
          <textarea
            id="comments"
            name="comments"
            placeholder="Type your message here..."
            rows="5"
            required
          />
        </div>

        <button type="submit">Send Message</button>
      </form>

      <a href="/" className="back-link">
        ← Back to Home
      </a>
    </section>
  );
}

export default ContactForm;


