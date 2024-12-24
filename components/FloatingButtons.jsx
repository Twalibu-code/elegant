import React from 'react'
import  './Components.css';
import Link from 'next/link';

const FloatingButtons = () => (
    <div className=''>
        <Link href='/skills'>
            <button
                type='button'
                className='hire-button'
            >
                <span>Hire Me</span>
            </button>    
        </Link>

        <Link href='/contacts'>
            <button
                type='button'
                className='contact-button'
            >
                <span>Contact Me</span>
            </button>    
        </Link>
    </div>

  )

export default FloatingButtons;