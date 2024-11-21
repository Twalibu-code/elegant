'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const Form = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Reset form
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      console.log('Error:', error);
      setStatus('Error sending message.');
    }
  };

  return (
    <div>
      <form id="contact-form" onSubmit={handleSubmit} className="form-frame">
        <input
          type="text"
          id='name'
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full name"
          className="form-input"
          required
        />
        <input
          type="email"
          id='email'
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email address"
          className="form-input"
          required
        />
        <textarea
          type='text'
          id='message'
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your message"
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
  )
};

export default Form;