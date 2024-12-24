import Image from 'next/image';
import Navbar from '../../components/Navbar';
import './About.css';

const About = () => {
  return (
    <div>
      <nav><  Navbar /></nav>
      <div id='about' className='about_frame'>
        <header className='page_header'>About</header>
        <div className='inside-about-frame'>
          <header className='about-div-header'>Education Background</header>
          <section className='border rounded-lg border-red-700 p-4'>
            <table className='w-full'>
              <thead>
                <tr className='border-b border-red-700'>
                  <th className='w-2/12 text-start'>Period</th>
                  <th className='w-5/12 text-start'>School/Institution</th>
                  <th className='w-3/12 text-start'>Award</th>
                  <th className='w-2/12 text-start'>Documents</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='align-top'>2020 - 2024</td>
                  <td className='align-top flex flex-col gap-4'>
                    <span>University of Dar es Salaam (UDSM)</span>
                    <div>
                      <span>Courses Enrolled in 1st Year</span>
                      <ul className='list-disc list-inside'>
                        <li>Principle of Accounting</li>
                        <li>Proramming in C</li>
                        <li>Development Perspectives I & II</li>
                        <li>Principle of Microeconomics & Macroeconomics Analysis</li>
                        <li>Introduction to Business</li>
                        <li>Basic Statistics</li>
                        <li>Business Computer Communication</li>
                        <li>Principle and Practice of Management</li>
                        <li>Introduction to Computer Network</li>
                        <li>Web Programming</li>
                        <li>Probability Theory I</li>
                      </ul>
                    </div>
                    <div>
                      <span>Courses Enrolled in 2nd Year</span>
                      <ul className='list-disc list-inside'>
                        <li>Computer Network Design and Administration</li>
                        <li>Structured Systems Analysis and Design</li>
                        <li>Data Abstraction and Algorithms</li>
                        <li>Mobile Application Developments</li>
                        <li>Principle of Database Systems</li>
                        <li>Object Oriented Programming in Java</li>
                        <li>Object Oriented Analysis and Design</li>
                        <li>Business Law and Ethics</li>
                        <li>Business Process Management</li>
                        <li>Programming in R</li>
                        <li>Operation Research I</li>
                      </ul>
                    </div>
                    <div>
                      <span>Courses Enrolled in 3rd Year</span>
                      <ul className='list-disc list-inside'>
                        <li>Priciples of Operating Systems</li>
                        <li>Software Engineering</li>
                        <li>IT Audit and Controls</li>
                        <li>System Administration in Linux</li>
                        <li>Environmental Management Information Systems</li>
                        <li>Principles of Systems Security</li>
                        <li>Artificial Intelligence</li>
                        <li>Software Project Management</li>
                        <li>Business Intelligence</li>
                        <li>Enterprise Systems</li>
                      </ul>
                    </div>
                  </td>
                  <td className='align-top'>Bachelor Degree Certificate of Business Information Technology (BIT)</td>
                  <td className='align-top'>hello</td>
                </tr>
                <tr>
                  <td className='align-top'>2018 - 2020</td>
                  <td className='align-top'>
                    <span>Biharamulo Secondary School</span>
                    <div>
                      <span>I Studied the{' '}<strong>EGM</strong>{' '}combination, in Kagera region</span>
                      <ul className='list-disc list-inside'>
                        <li>Economics</li>
                        <li>Geography</li>
                        <li>Advanced Mathematics</li>
                      </ul>
                    </div>
                  </td>
                  <td className='align-top'>Advanced Certificate of Secondary Education Examination (ACSEE)</td>
                  <td className='align-top'>hello</td>
                </tr>
                <tr>
                  <td className='align-top'>2014 - 2017</td>
                  <td className='align-top'>Bintimusa Secondary School</td>
                  <td className='align-top'>Certificate of Secondary Education Examination (CSEE)</td>
                  <td className='align-top'>hello</td>
                </tr>
                <tr>
                  <td className='align-top'>2007 - 2013</td>
                  <td className='align-top'>Kiwalani Primary School</td>
                  <td className='align-top'>Certificate of Primary School Leaving Examination (PSLE)</td>
                  <td className='align-top'>hello</td>
                </tr>
              </tbody>
            </table>
          </section>
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
              <div className='border-t-2 mt-2 pt-1'>
                <em>tuvutfvutfuvruvuiftvurfvufvfutvuufuivu hvfhvyrf ch fhf fur sifhueuifui8eu</em>
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
                <em>tuvutfvutfuvruvuiftvurfvufvfutvuufuivu hvfhvyrf ch fhf fur sifhueuifui8eu</em>  
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
                <em>tuvutfvutfuvruvuiftvurfvufvfutvuufuivu hvfhvyrf ch fhf fur sifhueuifui8eu</em> 
              </div>
            </div>
          </div>
        </div>
      </div>      
    </div>
  );
};

export default About;