'use client'

import React, { useEffect, useState } from 'react';
import './Skills.css';
import Navbar from '../../components/Navbar';

const Skills = () => {
  const [isClicked, setClicked] = useState('');

  const handleClick = (e) => {
    const { name } = e.target;
    setClicked((prevClicked) => (prevClicked === name ? '' : name));
  }

  const [progress, setProgress] = useState({
    "Web Development": 0,
    "Graphics Design": 0,
    "UI/UX Design": 0,
    "Adobe Suite": 0,
    "MS Suite": 0,
  });

  const skillLevels = {
    "Web Development": 85,
    "Graphics Design": 80,
    "UI/UX Design": 75,
    "Adobe Suite": 70,
    "MS Suite": 90,
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(skillLevels);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <nav><  Navbar /></nav>
      <div id='skills' className='skills_frame'>
        <div>
          <header className='page_header'>Skills</header>
          <div className="inside-skills-frame">
            <div className='header-cvButton-frame'>
              <h2>My Skills</h2>
              <div>
                <a 
                  href="/docs/CV.pdf" 
                  download="Twalibu/CV.pdf" 
                  aria-label="Download Twalibu's CV"
                  className="Downloaded-CV"
                >
                  Download My CV
                </a>
              </div>
            </div>
            <div className="skills-list-frame">
              {Object.keys(skillLevels).map((skill) => (
              <div key={skill} className="skill">
                <span className="skill-label w-2/12">{skill}</span>
                <div className="skill-bar w-10/12">
                  <div className="skill-progress" style={{ width: `${progress[skill]}%` }} />
                </div>
                <span className="skill-percent">{progress[skill]}%</span>
              </div>
              ))}
            </div>
          </div>
        </div>

        <div className="inside-skills-frame">
          <section className='container flex flex-row border-b-2 border-slate-400'>
            <div className='w-1/2'>...</div>
            <div className="skills-tools-frame w-1/2 ">
              <span className='skills_label'>Technical Skills</span>
              <ol className={` blur-overlay ${isClicked === 'programmingLanguages' ? "expanded" : ""}`}>
                <li>
                  <strong>Programming Languages</strong>
                  <ul className='[list-style-type:"-"] ml-6'>
                    <li><strong>Next.js</strong> (React framework for building scalable web applications).</li>
                    <li><strong>Node.js</strong> (Server-side JavaScript runtime).</li>                
                  </ul>
                </li><br/>
                <li>
                  <strong>Frameworks and Libraries</strong>
                  <ul className='[list-style-type:"-"] ml-6'>
                    <li><strong>JavaScript</strong> (Core language for backend and frontend development).</li>
                    <li><strong>Express.js</strong> (Minimalistic Node.js web framework). </li>                
                  </ul>
                </li><br/>
                <li>
                  <strong>API Development and Integration</strong>
                  <ul className='[list-style-type:"-"] ml-6'>
                    <li>RESTful API design and implementation.</li>
                    <li>Working with <strong>GraphQL</strong></li>
                    <li>Familiarity with third-party API integrations (e.g., payment gateways).</li>                
                  </ul>
                </li><br/>
                <li>
                  <strong>Database Management</strong>
                  <ul className='[list-style-type:"-"] ml-6'>
                    <li>Proficiency in <strong>MongoDB</strong>, <strong>PostgreSQL</strong>, or <strong>MySQL</strong>.</li>
                    <li>Database design and optimization.</li>                
                  </ul>
                </li><br/>
                <li>
                  <strong>Authentication & Authorization</strong>
                  <ul className='[list-style-type:"-"] ml-6'>
                    <li>JWT (JSON Web Tokens). </li>
                    <li>OAuth 2.0 or similar protocols. </li>                
                  </ul>
                </li><br/>
                <li>
                  <strong>Email Automation</strong>
                  <ul className='[list-style-type:"-"] ml-6'>
                    <li>Using tools like <strong>Nodemailer</strong> for transactional emails. </li>                
                  </ul>
                </li><br/>
                <li>
                  <strong>Version Control</strong>
                  <ul className='[list-style-type:"-"] ml-6'>
                    <li>Proficiency in <strong>Git</strong> and platforms like GitHub or GitLab.</li>                
                  </ul>
                </li><br/>
                <li>
                  <strong>Deployment & DevOps Basics</strong>
                  <ul className='[list-style-type:"-"] ml-6'>
                    <li>Familiarity with platforms like <strong>Vercel, Heroku,</strong> or <strong>AWS</strong>.</li>
                    <li>Basic CI/CD pipelines setup.</li>                
                  </ul>
                </li>
              </ol>
              <button
                name='programmingLanguages'
                className='read-more-btn'
                onClick={handleClick}
              >
                {isClicked === 'programmingLanguages' ? 'Read Less' : 'Read More'}
              </button>
            </div>
          </section>

          <section className='container flex flex-row border-b-2 border-slate-400'>
            <div className="skills-tools-frame w-1/2">
              <span className='skills_label'>Soft Skills</span>
              <ol className={`blur-overlay ${isClicked === 'teamCollaboration' ? "expanded" : ""}`}>
                <li>
                  <strong>Team Collaboration</strong>
                  <ul className='[list-style-type:"-"] ml-6'>
                    <li>Effective communication during team discussions or code reviews.</li>
                    <li>Experience in <strong>Agile</strong> or <strong>Scrum</strong> methodologies.</li>                
                  </ul>
                </li><br/>
                <li>
                  <strong>Problem-Solving</strong>
                  <ul className='[list-style-type:"-"] ml-6'>
                    <li>Debugging and troubleshooting code efficiently.</li>
                    <li>Breaking down complex problems into manageable tasks.</li>                
                  </ul>
                </li><br/>
                <li>
                  <strong>Time Management</strong>
                  <ul className='[list-style-type:"-"] ml-6'>
                    <li>Prioritizing tasks in fast-paced environments.</li>
                    <li>Meeting deadlines for project milestones. </li>               
                  </ul>
                </li><br/>
                <li>
                  <strong>Continuous Learning</strong>
                  <ul className='[list-style-type:"-"] ml-6'>
                    <li>Staying updated with the latest trends and best practices in backend and web development. </li>
                  </ul>
                </li><br/>
                <li>
                  <strong>Adaptability</strong>
                  <ul className='[list-style-type:"-"] ml-6'>
                    <li>Flexibility to work across various technologies and stacks as required.</li>
                  </ul>
                </li>
              </ol>
              <button
                name='teamCollaboration'
                className='read-more-btn'
                onClick={handleClick}
              >
                {isClicked === 'teamCollaboration' ? 'Read Less' : 'Read More'}
              </button>
            </div>
            <div className='w-1/2'>...</div>         
          </section>


          <section className='container flex flex-row'>
            <div className='w-1/2'>...</div>  
            <div className="skills-tools-frame">
              <span className='skills_label'>Tools and Frameworks</span>
              <ol className={`blur-overlay ${isClicked === 'backendTools' ? "expanded" : ""}`}>
                <li>
                  <strong>Backend Tools</strong>
                  <ul className='[list-style-type:"-"] ml-6'>
                    <li><strong>Node.js</strong>: Building scalable server-side applications.</li>
                    <li><strong>Express.js</strong>: Creating REST APIs.</li>                
                  </ul>
                </li><br/>
                <li>
                  <strong>Frontend Tools</strong>
                  <ul className='[list-style-type:"-"] ml-6'>
                    <li><strong>React</strong>: Understanding Next.js's core library.</li>
                    <li><strong>Tailwind CSS</strong> or <strong>Bootstrap</strong>: Styling components. </li>                
                  </ul>
                </li><br/>
                <li>
                  <strong>Database Tools</strong>
                  <ul className='[list-style-type:"-"] ml-6'>
                    <li><strong>MongoDB Compass</strong>, <strong>pgAdmin</strong>, or <strong>Sequelize</strong> (ORM for SQL databases).</li>            
                  </ul>
                </li><br/>
                <li>
                  <strong>Version Control & Collaboration</strong>
                  <ul className='[list-style-type:"-"] ml-6'>
                    <li><strong>Git</strong>: Branching, merging, and pull requests.</li>
                    <li><strong>GitHub/GitLab</strong>: Hosting repositories.</li>                
                  </ul>
                </li><br/>
                <li>
                  <strong>Email Management</strong>
                  <ul className='[list-style-type:"-"] ml-6'>
                    <li><strong>Nodemailer</strong> for automated email systems.</li>    
                  </ul>
                </li><br/>
                <li>
                  <strong>Testing Frameworks** </strong>
                  <ul className='[list-style-type:"-"] ml-6'>
                    <li><strong>Jest</strong> or <strong>Mocha</strong> for testing JavaScript code.</li>                
                  </ul>
                </li><br/>
                <li>
                  <strong>Package Managers</strong>
                  <ul className='[list-style-type:"-"] ml-6'>
                    <li><strong>npm</strong> or <strong>yarn</strong> for dependency management.</li>                
                  </ul>
                </li><br/>
                <li>
                  <strong>Development Tools</strong>
                  <ul className='[list-style-type:"-"] ml-6'>
                    <li>Linters/Formatters: <strong>ESLint</strong> and <strong>Prettier</strong>. </li>
                    <li>Code editors: <strong>VS Code</strong>.</li>                
                  </ul>
                </li>
              </ol>
              <button
                name='backendTools'
                className='read-more-btn'
                onClick={handleClick}
              >
                {isClicked === 'backendTools' ? 'Read Less' : 'Read More'}
              </button>
            </div>
          </section>

        </div>
      </div>      
    </div>
  );
};

export default Skills;
