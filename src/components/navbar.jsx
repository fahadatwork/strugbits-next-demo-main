'use client'


import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {

  const pathname = usePathname();

  return (
    <>

<nav className="bg-slate-400 shadow-lg">
  <div className="max-w-6xl mx-auto px-4">
    <div className="flex justify-between">

      <div className="flex space-x-4">

        <div>
          <a href="/" className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
            <svg className="h-6 w-6 mr-1 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            <span className="font-bold">Next Demo</span>
          </a>
        </div>

       
        <div className="hidden md:flex items-center space-x-1">
          <Link href="/" className="py-5 px-3 text-gray-700 hover:text-gray-900">Home</Link>
        </div>
      </div>


      <div className="hidden md:flex items-center space-x-1">

        
       { pathname === "/auth/signup" ? <Link href="/auth/login" className="py-5 px-3">Login</Link> : <></> }
       { pathname === "/auth/login" ? <Link href="/auth/signup" className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300">Signup</Link> : <></> }
      </div>


      <div className="md:hidden flex items-center">
        <button className="mobile-menu-button">
          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

    </div>
  </div>


  <div className="mobile-menu hidden md:hidden">
    <Link href="/" className="block py-2 px-4 text-sm hover:bg-gray-200">Features</Link>
    <Link href="/" className="block py-2 px-4 text-sm hover:bg-gray-200">Pricing</Link>
  </div>
</nav>
    
    
    
    
    
    
    </>
  )
}
