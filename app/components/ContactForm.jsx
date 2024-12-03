'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const Form = () => {
  const [formData, setFormData] = useState({ name: '', email: '',  title: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', title: '', message: '' }); // Reset form
      } else {
        setStatus(data.error || 'Failed to send message.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('Error sending message.');
    }
  };

  return (
    <div>
      <form id="contact-form" onSubmit={handleSubmit} className="form-frame">
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full name"
          className="form-input"
          required
        />
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email address"
          className="form-input"
          required
        />
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title goes here"
          className="form-input"
          required
        />
        <textarea
          id="message"
          rows={3}
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your message here"
          className="form-input"
          required
        />
        <div className="flex justify-between">
          <button type="submit" className="form-button">
            <Image
              src="/svg/send.svg"
              alt="send icon"
              width={32}
              height={32}
              className="pr-1"
            />
            <p className="form-button-text">Send</p>
          </button>
          {status && <p className="status-message">{status}</p>}
        </div>
      </form>
    </div>
  );
};

export default Form;