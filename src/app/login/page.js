"use client"

import React, { useState } from 'react'

const page = () => {

const [count, setCount] = useState(0);
  return (

      <div>

        <p>count is {count}</p>

        <button className='w-[70px] h-[40px] text-white bg-green-400' onClick={()=>{setCount(count+1)}}>count +1</button>

        </div>
    

    

  
  )
}

export default page