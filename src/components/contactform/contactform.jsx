import React from 'react';
import './contactform.css'; // <--- Import your CSS file here

export default function ContactForm() {
  return (
    <form className="contact-section">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
      </div>
      {/* Rest of your JSX code */}
    </form>
  );
}

