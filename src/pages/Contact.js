import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div>
      <h2>Contact Us</h2>
      <form>
        <label>Name:</label>
        <input type="text" name="name" />
        <label>Email:</label>
        <input type="email" name="email" />
        <label>Message:</label>
        <textarea name="message"></textarea>
        <button type="submit">Submit</button>
      </form>
      <p>Phone: 012-345-6789</p>
      <p>Email: info@lpcollege.ac.th</p>
      {/* Google Maps Embed */}
      <iframe src="https://www.google.com/maps/embed?..." width="600" height="450" allowFullScreen="" loading="lazy"></iframe>
    </div>
  );
}

export default Contact;