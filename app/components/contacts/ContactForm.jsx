"use client"
          
import React, { useState } from 'react';
import Image from 'next/image';

const ContactsForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '',  title: '', message: '' });
  const [status, setStatus] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending('Sending...');
    setStatus(false)
    setIsError(false);
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
        setIsError(false);
        setIsSending(false);
      } else {
        setStatus(data.error || 'Failed to send message.');
        setIsSending(false);
        setIsError(true);
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('Error sending message.');
      setIsSending(false);
      setIsError(true);
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
        <div className="flex justify-between items-center mb-6">
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
          {isSending && <p className={` ${isError ? '' : 'text-yellow-500'} `}>{isSending}</p>}
          {status && <p className={` ${isError ? 'text-red-500' : 'text-green-500'} `}>{status}</p>}
        </div>
      </form>
    </div>
  );
};

export default ContactsForm;