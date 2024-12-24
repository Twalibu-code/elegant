import Image from 'next/image';
import Link from 'next/link';

const navbar = () => {
  return (
    <div className='nav_frame'>
      <Image
        src='/profile/TAP.jpg'
        alt='profile picture here'
        width='56'
        height='56'
        className='rounded-full border-2 my-4 mx-8'
      />
      <div className='nav_menu'>
        <Link href='/' className='navMenu_label'>Home</Link>
        <Link href='/about'  className='navMenu_label'>About</Link>
        <Link href='/portfolio' className='navMenu_label'>Portfolio</Link>
        <Link href='/blog' className='navMenu_label'>Blog</Link>
        <Link href='/skills' className='navMenu_label'>Skills</Link>
        <Link href='/contacts' className='navMenu_label'>Contacts</Link>          
      </div>
    </div>
  )
}

export default navbar;