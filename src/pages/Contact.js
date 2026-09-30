import React, { useState, useEffect } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', eventType: '', date: '', guests: '', vision: '' });
  const [errors, setErrors] = useState({ firstName: '', lastName: '', email: '', phone: '', date: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => { window.scrollTo({ top: 0 }); }, []);

  // ── VALIDATION HELPERS ──
  const nameRegex = /^[A-Za-z\s]*$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateField = (name, value) => {
    switch (name) {
      case 'firstName':
      case 'lastName':
        if (value && !nameRegex.test(value)) {
          return 'Only alphabetic characters are allowed.';
        }
        return '';

      case 'email':
        if (value && !emailRegex.test(value)) {
          return 'Please enter a valid email address.';
        }
        return '';

      case 'phone': {
        const digitsOnly = value.replace(/\D/g, '');
        if (value && digitsOnly.length !== 10) {
          return 'Invalid phone number.';
        }
        return '';
      }

      case 'date': {
        if (value) {
          const today = new Date();
          today.setHours(0, 0, 0, 0);
          const selectedDate = new Date(value);
          selectedDate.setHours(0, 0, 0, 0);
          if (selectedDate < today) {
            return 'Please select the current date or a future date.';
          }
        }
        return '';
      }

      default:
        return '';
    }
  };

  const handleChange = e => {
    const { name, value } = e.target;
    let sanitizedValue = value;

    // Prevent typing numbers/special characters into name fields
    if (name === 'firstName' || name === 'lastName') {
      sanitizedValue = value.replace(/[^A-Za-z\s]/g, '');
    }

    // Restrict phone field to digits only, max 10
    if (name === 'phone') {
      sanitizedValue = value.replace(/\D/g, '').slice(0, 10);
    }

    setForm(prev => ({ ...prev, [name]: sanitizedValue }));
    setErrors(prev => ({ ...prev, [name]: validateField(name, sanitizedValue) }));
  };

  const handleBlur = e => {
    const { name, value } = e.target;
    setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = () => {

    // VALIDATION - required fields

    if (
      !form.firstName ||
      !form.lastName ||
      !form.email ||
      !form.phone ||
      !form.eventType ||
      !form.date ||
      !form.guests ||
      !form.vision
    ) {

      alert("Please fill all fields before submitting.");

      return;
    }

    // VALIDATION - field-level rules

    const newErrors = {
      firstName: validateField('firstName', form.firstName),
      lastName: validateField('lastName', form.lastName),
      email: validateField('email', form.email),
      phone: validateField('phone', form.phone),
      date: validateField('date', form.date),
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some(err => err !== '');
    if (hasErrors) {
      return;
    }

    // WHATSAPP MESSAGE

    const whatsappMessage = `
*NEW EVENT ENQUIRY*

*First Name:* ${form.firstName}
*Last Name:* ${form.lastName}

*Email:* ${form.email}
*Phone:* ${form.phone}

*Event Type:* ${form.eventType}
*Preferred Date:* ${form.date}

*Guest Count:* ${form.guests}

*Event Vision:*
${form.vision}
  `;

    const encodedMessage = encodeURIComponent(whatsappMessage);

    const whatsappURL =
      `https://api.whatsapp.com/send?phone=917736257634&text=${encodedMessage}`;

    // OPEN WHATSAPP

    window.open(whatsappURL, "_blank");

    // RESET FORM

    setForm({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      eventType: '',
      date: '',
      guests: '',
      vision: ''
    });

    setErrors({ firstName: '', lastName: '', email: '', phone: '', date: '' });

    // SUCCESS MESSAGE

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);

  };

  // today's date for the min attribute on the date input
  const todayStr = new Date().toISOString().split('T')[0];

  return (
    <div className="contact-page">
      <section className="page-hero">
        <p className="section-label">REACH OUT</p>
        <h1 className="section-title">Let's Plan Something <em>Beautiful</em></h1>
        <p>We'd love to hear about your vision. Our team will be in touch within 24 hours.</p>
      </section>

      <div className="contact-section">
        <div className="contact-info">
          <h3>We'd Love to <em>Hear</em> From You</h3>
          <div className="c-detail">
            <strong>ADDRESS</strong>
            <p>PJJ6+866, Kuzhalmannam East,
              Kerala 678702</p>
          </div>
          <div className="c-detail">
            <strong>PHONE &amp; EMAIL</strong>
            <p>+91 77362 57634<br />darsanashaji@gmail.com</p>
          </div>
          <div className="c-detail">
            <strong>HOURS</strong>
            <p>Monday – Saturday: 10:00 AM – 6:00 PM<br />Sunday: By Appointment Only</p>
          </div>
          <div className="c-detail">
            <strong>FOLLOW US</strong>
            <p>@darsana_wedding<br />Instagram</p>
          </div>
        </div>

        <div className="contact-form">
          <h3>Send an <em>Enquiry</em></h3>
          {submitted && <div className="form-success">Thank you! We will be in touch within 24 hours.</div>}
          <div className="form-row">
            <div className="form-group">
              <label>FIRST NAME</label>
              <input
                type="text"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Your first name"
              />
              {errors.firstName && <span className="field-error">{errors.firstName}</span>}
            </div>
            <div className="form-group">
              <label>LAST NAME</label>
              <input
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Your last name"
              />
              {errors.lastName && <span className="field-error">{errors.lastName}</span>}
            </div>
          </div>
          <div className="form-group">
            <label>EMAIL ADDRESS</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="your@email.com"
            />
            {errors.email && <span className="field-error">{errors.email}</span>}
          </div>
          <div className="form-group">
            <label>PHONE NUMBER</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="10-digit mobile number"
              maxLength={10}
            />
            {errors.phone && <span className="field-error">{errors.phone}</span>}
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>EVENT TYPE</label>
              <select name="eventType" value={form.eventType} onChange={handleChange}>
                <option value="">Select event type</option>
                <option>Wedding</option>
                <option>Reception</option>
                <option>Corporate Event</option>
                <option>Private Party</option>
                <option>Garden Soirée</option>
                <option>Gala Dinner</option>
                <option>Other</option>
              </select>
            </div>
            <div className="form-group">
              <label>PREFERRED DATE</label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                onBlur={handleBlur}
                min={todayStr}
              />
              {errors.date && <span className="field-error">{errors.date}</span>}
            </div>
          </div>
          <div className="form-group">
            <label>EXPECTED GUEST COUNT</label>
            <select name="guests" value={form.guests} onChange={handleChange}>
              <option value="">Select approximate number</option>
              <option>50–100</option>
              <option>100–250</option>
              <option>250–500</option>
              <option>500–1000</option>
              <option>1000+</option>
            </select>
          </div>
          <div className="form-group">
            <label>TELL US ABOUT YOUR VISION</label>
            <textarea name="vision" value={form.vision} onChange={handleChange} placeholder="Share your dream event with us..." />
          </div>
          <button className="btn-gold" style={{ width: '100%', textAlign: 'center' }} onClick={handleSubmit}>
            SUBMIT ENQUIRY
          </button>
        </div>
      </div>

      {/* ── MAP SECTION ── */}
      <div className="map-section">
        <div className="map-header">
          <p className="section-label">FIND US</p>
          <h2 className="map-title">Our <em>Location</em></h2>
          <a
            href="https://maps.app.goo.gl/92Xwgj15N2yNrXMU8"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-directions"
          >
            GET DIRECTIONS →
          </a>
        </div>
        <div className="map-embed">
          <iframe
            title="Darsana Event Space Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.046441069856!2d76.61156629999999!3d10.730901599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8734a762d02b1%3A0x3a13723ab6749e22!2sDarsana%20Event%20Space!5e0!3m2!1sen!2sin!4v1780292223945!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

    </div>
  );
}

export default Contact;