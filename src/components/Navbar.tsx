import React from 'react'
import Link from 'next/link'
import { NavMenu } from './NavMenu'
import { FiLogOut } from 'react-icons/fi'

const Navbar = () => {
  return (
    <nav className="  px-6 md:px-16 py-3 flex items-center justify-between shadow-sm sticky z-40">
      <div className='flex items-center gap-4'>
          <img src="/logo2.png" alt="Logo" className="h-13 w-13 rounded-full" />
         
       <NavMenu/>

      </div>

      <div className='flex items-center gap-4'>
        <Link href='/login'>Login</Link>
        <Link href="/login">
          <span className="bg-[#0f0e47] text-white px-7 py-2.5 rounded-md text-sm hover:bg-[#272757]/80 transition flex items-center gap-2">
            <FiLogOut className="w-4 h-4" /> Book a Demo
          </span>
        </Link>
        </div>
    </nav>
  )
}

export default Navbar