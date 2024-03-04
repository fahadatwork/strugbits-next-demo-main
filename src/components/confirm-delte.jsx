"use client"

import React from 'react'
import Link from 'next/link'

export default function ConfirmDelete({ children }) {

  return (
    <div  className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
      
      {children}

    </div>
  )
}