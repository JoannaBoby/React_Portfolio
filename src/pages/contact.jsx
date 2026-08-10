import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm/ContactForm';
import './ContactPage.css';

function Contact() {
  return (
    <div className="contact-page container">
      <section id="contact" className="contact-section">
        <h1>Contact Me</h1>
        <p className="contact-intro">
          If you'd like to collaborate or just say hello, feel free to reach out using the form below.
        </p>

        <div className="contact-form-wrapper">
          <ContactForm />
        </div>

        <div className="contact-actions">
          <Link to="/" className="btn btn-secondary">
            ← Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Contact;
