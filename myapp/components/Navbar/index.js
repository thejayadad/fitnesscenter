import React from 'react'
import Logo from '../Logo'
import getServerUser from '@/lib/getServerUser'
import AuthLinks from './AuthLinks'

const Navbar = async () => {
    const user = await getServerUser()
  return (
    <header className='px-4 py-8'>
      <nav className='flex justify-between max-w-screen-xl mx-auto'>
      <Logo size={120} />
      <AuthLinks user={user} />
     </nav>
    </header>
  )
}

export default Navbar