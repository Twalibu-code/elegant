import React from 'react';
import Home from './components/home/Home';
import Navbar from './components/Navbar';
import Skills from './components/skills/Skills';
import Contacts from './components/contacts/Contacts'

const HomePage = () => (
  <div>
    <nav><  Navbar /></nav>

    <article id='home' className='page_frame'>
      <header className='page_header'>PROFILE</header>
      <div>< Home /></div>
    </article>

    <article id='about' className='page_frame'>
      <header className='page_header'>ABOUT</header>
      <div></div>
    </article>

    <article id='skills' className='page_frame'>
      <div>< Skills /></div>
    </article>

    <article id='contacts' className='page_frame'>
      <div>< Contacts /></div>
    </article>      
  </div>
)

export default HomePage;