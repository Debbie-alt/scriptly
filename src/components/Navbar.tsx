import React from 'react'
import Link from 'next/link'
import { NavMenu } from './NavMenu'
import { FiLogOut } from 'react-icons/fi'

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/40 backdrop-blur-md  px-4 md:px-8 py-2 flex items-center justify-between z-40">
      <div className='flex items-center gap-3'>
          <img src="/logo2.png" alt="Logo" className="h-13 w-13 rounded-full" />
         
       <NavMenu/>

      </div>

      <div className='flex items-center gap-4'>
        <Link href='/login'>Login</Link>
        <Link href="/login">
          <span className="bg-[#0f0e47] text-white px-7 py-2.5 rounded-md text-sm hover:bg-[#272757]/80 transition flex items-center gap-2">
          <span className="bg-[#0f0e47] text-white px-7 py-2.5 rounded-md text-sm hover:bg-[#272757]/80 transition flex items-center gap-2">
            <FiLogOut className="w-4 h-4" /> Book a Demo
          </span>
        </Link>
        </div>
    </nav>
  )
}

export default Navbar