import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <>

<nav class="bg-slate-400 shadow-lg">
  <div class="max-w-6xl mx-auto px-4">
    <div class="flex justify-between">

      <div class="flex space-x-4">

        <div>
          <a href="#" class="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
            <svg class="h-6 w-6 mr-1 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            <span class="font-bold">Demo</span>
          </a>
        </div>

       
        <div class="hidden md:flex items-center space-x-1">
          <Link href="/" class="py-5 px-3 text-gray-700 hover:text-gray-900">Home</Link>
        </div>
      </div>


      <div class="hidden md:flex items-center space-x-1">
        <a href="" class="py-5 px-3">Login</a>
        <a href="" class="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300">Signup</a>
      </div>


      <div class="md:hidden flex items-center">
        <button class="mobile-menu-button">
          <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

    </div>
  </div>


  <div class="mobile-menu hidden md:hidden">
    <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">Features</a>
    <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">Pricing</a>
  </div>
</nav>
    
    
    
    
    
    
    </>
  )
}
