import React from 'react'
import { WASTES } from '@/constants'
function Wastes() {
  return (
  <section className='flex border bg-white mx-4 border-gray-300 p-4 gap-7 w-auto rounded-2xl justify-between '>
  
   {WASTES.map((waste)=>(
    <div  className={`bg-${waste.title}-500 bg-gray-10 w-64 p-4 flex flex-col gap-4 rounded-2xl`}>
      <div className='flex justify-between'>
        <h2 className={`text-${waste.variant}-20 font-bold`}>{waste.title}</h2>
        <p>icon</p>
  
      </div>
      <h1 className='text-center font-bold'>{waste.data} Littles </h1>
      <div className='flex flex-col items-end text-[12px]'>
        <p>{waste.search}</p>
        <p>{waste.date}</p>
      </div>

    </div>

   ))}


  </section>

    
  )
}

export default Wastes