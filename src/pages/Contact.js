import React, { useState, useEffect } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', eventType: '', date: '', guests: '', vision: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => { window.scrollTo({ top: 0 }); }, []);

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = () => {

    // VALIDATION

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
      `https://api.whatsapp.com/send?phone=918610766168&text=${encodedMessage}`;

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

    // SUCCESS MESSAGE

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);

  };

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
            <p>+91 09447003343<br /><br />events@darsanavillasgarden.in</p>
          </div>
          <div className="c-detail">
            <strong>HOURS</strong>
            <p>Monday – Saturday: 10:00 AM – 7:00 PM<br />Sunday: By Appointment Only</p>
          </div>
          <div className="c-detail">
            <strong>FOLLOW US</strong>
            <p>@darsanavillas_events<br />Instagram · Facebook · Pinterest</p>
          </div>
        </div>

        <div className="contact-form">
          <h3>Send an <em>Enquiry</em></h3>
          {submitted && <div className="form-success">Thank you! We will be in touch within 24 hours.</div>}
          <div className="form-row">
            <div className="form-group">
              <label>FIRST NAME</label>
              <input type="text" name="firstName" value={form.firstName} onChange={handleChange} placeholder="Your first name" />
            </div>
            <div className="form-group">
              <label>LAST NAME</label>
              <input type="text" name="lastName" value={form.lastName} onChange={handleChange} placeholder="Your last name" />
            </div>
          </div>
          <div className="form-group">
            <label>EMAIL ADDRESS</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" />
          </div>
          <div className="form-group">
            <label>PHONE NUMBER</label>
            <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" />
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
              <input type="date" name="date" value={form.date} onChange={handleChange} />
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
            title="Our Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.1!2d76.5794!3d10.7867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7c1e5d1c3a7b5%3A0x92Xwgj15N2yNrXMU8!2sKing+%26+queen+unisex+beauty+parlour!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

    </div>
  );
}

export default Contact;