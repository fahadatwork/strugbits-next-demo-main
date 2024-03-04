"use client"

import Link from 'next/link'
import React from 'react'

export const Modal = ({children , edit }) => {

  return (
    <div  className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>

        <div className='w-[450px]'>
            
            <div className='bg-white rounded-md'>
            <div className='w-full h-[80px] bg-green-100 flex flex-col'>
            <Link href="/" className='place-self-end text-gray-500 w-[25px] h-[25px] bg-red-500 rounded-full'><p className='text-white text-center'>x</p></Link>
            <h3 className='text-center text-2xl font-bold text-gray-500'>{edit ? "Edit Customer" : "Add customer"}</h3>
            </div>
                {children}
            </div>

        </div>



    </div>
  )
}
