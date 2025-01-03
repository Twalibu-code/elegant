'use client'

import './About.css';
import { useState } from 'react';
import Image from 'next/image';
import Navbar from '../../components/Navbar';

const Timeline = () => {
  const education = [
    {
      id: "cert001",
      year: "2020 - 2024",
      school: "University Of Dar-es-Salaam",
      description: "Earned my Bachelor in Business Information Technology.",
      certificate: "CV.pdf",
    },
    {
      id: "cert002",
      year: "2018 - 2020",
      school: "Biharamulo Secondary School",
      description: "Completed my high school education with a focus on science subjects.",
      certificate: "Advance-Certificate.pdf",
    },
    {
      id: "cert003",
      year: "2014 - 2017",
      school: "Bintimusa Secondary School",
      description: "Completed my Ordinary Secondary Education level.",
      certificate: "Olevel-Certificate.pdf",
    },
    {
      id: "cert004",
      year: "2007 - 2013",
      school: "Kiwalani Primary School",
      description: "Completed my primary school education as the basic education.",
      certificate: "Primary-Certificate.pdf"
    },
  ];

  const [onIframe, setOnIframe] = useState('');

  const HandleClick = (e) => {
    const { name } = e.target;
    setOnIframe((prevClicked) => (prevClicked === name ? '' : name));
  }

  return (
    <div className="timeline-container">
      {education.map((item) => (
        <div key={item.id} className='timeline'>
          <div className="timeline-item">
            <h3 className="text-xl font-medium">{item.school}</h3>
            <span className="text1">{item.year}</span>
            <p className="text2">{item.description}</p>
            <iframe
              src={onIframe === item.id ? `/docs/${item.certificate}` : null } //LAZY LOADING SETUP
              title="Document Viewer"
              className={`iframe ${onIframe === item.id ? 'expanded' : '' }`}
            ></iframe>            
          </div>
          <div>
            <button
              type='button'
              name={item.id}
              onClick={HandleClick}
              className='view-btn text4'
            >
              <Image
                src="/svg/eye.svg"
                alt="send icon"
                width={32}
                height={32}
                className={`${onIframe === item.id ? '': 'hidden'}`}
              />
                { `${onIframe === item.id ? 'close' : item.certificate }` }
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};


const About = () => {
  return (
    <div>
      <nav><  Navbar /></nav>
      <div id='about' className='about_frame'>
        <header className='page_header'>About</header>
        <div className='inside-about-frame'>
          <header className='about-div-header'>Education Background</header>
          < Timeline />
        </div>

        <div className='inside-about-frame'>
          <header className='about-div-header'>What Others Say About Me</header>
          <div className='flex flex-row gap-4 justify-between'>
            <div className='recommendations-frame'>
              <Image
                src='/profile/tap.jpg'
                alt='recommender image'
                width='56'
                height='56'
                className='absolute rounded-xl -mt-14'
              />
              <span className='recommender-name'>Jeremia Charles</span>
              <div className='container border-t-2 mt-2 pt-1'>
                <p className='text3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam deleniti, omnis ducimus aperiam fugit dolore veritatis in, nam similique, fugiat necessitatibus aut inventore quaerat velit praesentium. Repellat nobis rem eius.</p>
              </div>
            </div>
            <div className='recommendations-frame'>
              <Image
                src='/profile/tap.jpg'
                alt='recommender image'
                width='56'
                height='56'
                className='absolute rounded-xl -mt-14'
              />
              <span className='recommender-name'>Jeremia Charles</span>
              <div className='border-t-2 mt-2 pt-1'>
                <p className='text3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, in harum tempora ratione soluta architecto rerum, ea quae pariatur non, eum consequuntur ab iste mollitia odit blanditiis necessitatibus unde impedit!</p>  
              </div>
            </div>
            <div className='recommendations-frame'>
              <Image
                src='/profile/tap.jpg'
                alt='recommender image'
                width='56'
                height='56'
                className='absolute rounded-xl -mt-14'
              />
              <span className='recommender-name'>Jeremia Charles</span>
              <div className='border-t-2 mt-2 pt-1'>
                <p className='text3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ad perspiciatis vero voluptatibus recusandae quis soluta assumenda consequatur maxime architecto, incidunt asperiores libero dolorem molestias. Exercitationem facere ipsa qui voluptatibus!</p> 
              </div>
            </div>
          </div>
        </div>
      </div>      
    </div>
  );
};

export default About;