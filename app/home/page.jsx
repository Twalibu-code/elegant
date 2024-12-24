'use client'

import React from 'react'
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import TypingAnimation from '@/components/TypingAnimation';
import './Home.css';

const Home = () => {
  return (
    <div>
      <nav><  Navbar /></nav>
      <div id='home' className='page_frame'>
        <header className='page_header'>Stay Connected...</header>
        <div className='flex justify-between gap-4 '>
            <div className='w-1/2'>
                <p className='text-4xl font-extrabold'>Thanks for visiting,</p>
                < TypingAnimation />
                <p className='px-8 text-justify'>
                I am Twalibu Ally Pembe, a skilled graphics designer and web developer with a background in business information technology. My experience includes working as an IT assistant at Tanzania Telecommunications Corporation Limited and as a web developer and UI/UX designer at CRDB (UDSM – FINHUB). I am proficient in tools like ReactJS, NodeJS, MySQL, Figma, Photoshop, Illustrator etc.
                I am flexible and can learn and understand quickly, adapt easily to new things, and am hardworking. I am also creative and able to work with minimal supervision.
                </p>       
            </div> 
            <div className='w-1/2 picture-frame'>
                <Image
                    src='/images/tap.jpg'
                    alt='home image'
                    width={3024}
                    height={4032}
                    // layout='fill'
                    // objectFit='cover'
                    className=''
                />
            </div>       
        </div>        
      </div>      
    </div>


  );
};

export default Home;