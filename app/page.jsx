import Navbar from './components/Navbar';
import Skills from './components/skills/Skills';
import Contacts from './components/contacts/Contacts'
import React from 'react';

const HomePage = () => (
  <div>
    <nav><  Navbar /></nav>
    <div className='body_frame'>
      <article id='home' className='page_frame'>
        <header className='page_header'>PROFILE</header>
        <hr className='border-2 rounded-full'/>
        <div>
          <p className='text-4xl font-extrabold'>Thanks for visiting,</p>
          <p className='px-8 text-5xl font-extrabold'>I'm Twalibu Pembe💻</p>
          <p className='px-8 text-justify'>
            I am Twalibu Ally Pembe, a skilled graphics designer and web developer with a background in business information technology. My experience includes working as an IT assistant at Tanzania Telecommunications Corporation Limited and as a web developer and UI/UX designer at CRDB (UDSM – FINHUB). I am proficient in tools like ReactJS, NodeJS, MySQL, Figma, Photoshop, Illustrator etc.
            I am flexible and can learn and understand quickly, adapt easily to new things, and am hardworking. I am also creative and able to work with minimal supervision.
          </p>
        </div>
      </article>

      <article id='about' className='page_frame'>
        <header className='page_header'>ABOUT</header>
        <div></div>
      </article>

      <article id='skills' className='page_frame'>
        <header className='page_header'>SKILLS</header>
        <div>< Skills /></div>
      </article>

      <article id='contacts' className='page_frame'>
        <header className='page_header'>CONTACTS</header>
        <div>< Contacts /></div>
      </article>      
    </div>
  </div>
)

export default HomePage;