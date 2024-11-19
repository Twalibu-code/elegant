'use client'

import React, { useState } from 'react';
import Image from 'next/image'

const form = () => {
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
        if (response.ok) {
          setStatus('Message sent successfully!');
        } else {
          setStatus('Failed to send message.');
        }
      } catch (error) {
        setStatus('Error sending message.');
      }
      alert(status);
    };

  return (
    <div>      
        <form id='contact-form' method='POST' onSubmit={handleSubmit} className='form-frame'> 
            <input 
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange} 
                placeholder='Full name' 
                className='form-input'
                required
            />
            <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange} 
                placeholder='email address'
                className='form-input'
                required
            />
            <textarea
                type='text'
                id='message'
                name='message'
                value={formData.message}
                onChange={handleChange} 
                placeholder='your message'
                className='form-input'
                required
            />
            <div className='flex justify-end'>
                <button 
                    type='submit'
                    className='form-button'
                >
                    <Image 
                    src='/svg/send.svg'
                    alt='send icon'
                    width={32}
                    height={32}
                    className='pr-1'
                    />
                    <p className='form-button-text'>Send</p>
                </button>
            </div>
        </form> 
    </div>
  )
}

export default form;