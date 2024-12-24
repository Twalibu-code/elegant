import Navbar from '../../components/Navbar';
import ContactForm from './ContactForm';
import Image from 'next/image';

const Contacts = () => (
    <div>
        <nav><  Navbar /></nav>
        <div id='contacts' className='page_frame'>
            <header className='page_header'>Contacts</header>
            <section className='flex justify-between gap-4'>
                <div className='contacts_div1'>
                    <header className='contacts-div-header'>Address</header>
                    <div className='addr-socio-frame'>
                        <p className=' mb-4'>12123 Minazi mirefu, </p>
                        <p className=' mb-4'>Ilala, Dar es Salaam.</p>
                        <p className=' mb-4'>Tanzania</p>
                        <a href='https://maps.app.goo.gl/9WKmEmYtUhUNnbH59' className='flex items-center py-4'>
                        <Image 
                            src='/svg/location.svg'
                            alt='location icon'
                            width={32}
                            height={32}
                            className='pr-1'
                        />
                        <p className='addr-socio-list'>see location</p>
                        </a>            
                    </div>
                </div>

                <div className='contacts_div1'>
                    <header className='contacts-div-header'>Social Media</header>
                    <div className='addr-socio-frame'>                       
                        <a href='https://x.com/PembeTwalibu?t=-h_NJl2A2wo0SKOVmZJYSw&s=08' className='flex items-center mb-8'>
                            <Image 
                                src='/svg/x.svg'
                                alt='x icon'
                                width={32}
                                height={32}
                                className='pr-1'
                            />
                            <p className='addr-socio-list'>pembetwalibu</p>
                        </a>

                        <a href='https://www.facebook.com/twalibu.pembe?mibextid=ZbWKwL' className='flex items-center mb-8'>
                            <Image 
                                src='/svg/facebook.svg'
                                alt='facebook icon'
                                width={32}
                                height={32}
                                className='pr-1'
                            />
                            <p className='addr-socio-list'>twalibu.pembe</p>
                        </a>

                        <a href='https://www.linkedin.com/in/twalibu-pembe-843747256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' className='flex items-center mb-8'>
                            <Image 
                                src='/svg/linkedin.svg'
                                alt='linkedin icon'
                                width={32}
                                height={32}
                                className='pr-1'
                            />
                            <p className='addr-socio-list'>twalibu-pembe</p>
                        </a>

                        <a href='https://www.instagram.com/twalibu_pembe/profilecard/?igsh=MTJ4dmV1aHZ2ajZ1aA==' className='flex items-center mb-8'>
                            <Image 
                                src='/svg/instagram.svg'
                                alt='instagram icon'
                                width={32}
                                height={32}
                                className='pr-1'
                            />
                            <p className='addr-socio-list'>twalibu_pembe</p>
                        </a>

                        <a href='https://www.tiktok.com/@twalibu_pembe?_t=8rGIFWr9EkJ&_r=1' className='flex items-center mb-8'>
                            <Image 
                                src='/svg/tiktok.svg'
                                alt='tiktok icon'
                                width={32}
                                height={32}
                                className='pr-1'
                            />
                            <p className='addr-socio-list'>twalibu_pembe</p>
                        </a>

                        <a href='https://wa.me/+255783239834' className='flex items-center'>
                            <Image 
                                src='/svg/whatsapp.svg'
                                alt='whatsapp icon'
                                width={32}
                                height={32}
                                className='pr-1'
                            />
                            <p className='addr-socio-list'>T Λ P</p>
                        </a>
                    </div>
                </div>

                <div className='contacts_div2'>
                    <header className='contacts-div-header'>Send me email</header>
                    < ContactForm />
                </div>
            </section>
        </div>        
    </div>

  )

export default Contacts;