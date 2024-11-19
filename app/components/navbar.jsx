import Image from 'next/image'

const navbar = () => {
  return (
    <div>
      <div className='flex bg-gradient-to-tr from-blue-400 to-green-500 justify-between items-center rounded-lg text-slate-50 font-bold py-4 px-8 shadow-2xl shadow-slate-900'>
        <Image
          src='/profile/TAP.jpg'
          alt='profile picture here'
          width='56'
          height='56'
          className='rounded-full border-2'
        />
        <div className='flex list-none text-2xl font-medium'>
          <a href='#home' className='pr-8'>Home</a>
          <a href='#about' className='pr-8'>About</a>
          <a href='#skills' className='pr-8'>Skills</a>
          <a href='#contacts' className=''>Contacts</a>          
        </div>
      </div>
    </div>
  )
}

export default navbar