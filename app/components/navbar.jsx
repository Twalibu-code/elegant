import Image from 'next/image';

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
        <a href='#home' className='navMenu_label'>Home</a>
        <a href='#about'  className='navMenu_label'>About</a>
        <a href='#portfolio' className='navMenu_label'>Portfolio</a>
        <a href='#blog' className='navMenu_label'>Blog</a>
        <a href='#skills' className='navMenu_label'>Skills</a>
        <a href='#contacts' className='navMenu_label'>Contacts</a>          
      </div>
    </div>
  )
}

export default navbar;