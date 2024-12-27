import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ตรวจสอบว่าข้อมูลครบถ้วนหรือไม่
    if (!formData.name || !formData.email || !formData.message) {
      alert('กรุณากรอกข้อมูลให้ครบถ้วน!');
    } else {
      alert('เราได้รับข้อความของคุณแล้ว ขอบคุณ!');
      // ล้างข้อมูลฟอร์ม
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    }
  };

  return (
    <div>
      <h2>ติดต่อเรา</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <label>Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
      <p>Phone: 012-345-6789</p>
      <p>Email: info@lpcollege.ac.th</p>
      {/* Google Maps Embed */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3776.6564463877544!2d98.9921603!3d18.813457900000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3bcb57f2cda3%3A0x5a42c69f9e85016a!2sLanna%20Polytechnic%20Chiang%20Mai%20Technological%20College!5e0!3m2!1sen!2sth!4v1735275408013!5m2!1sen!2sth"
        width="600"
        height="450"
        allowFullScreen=""
        loading="lazy"
        title="Google Maps"
      ></iframe>
    </div>
  );
}

export default Contact;
