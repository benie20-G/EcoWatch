import React from 'react'
import { WASTES } from '@/constants'
import Image from 'next/image'
function Wastes() {

  return (
  <section className='flex bg-white m-2 p-4 gap-3 w-auto rounded-2xl justify-between'>
  
   {WASTES.map((waste)=>(
    <div  className={`bg-${waste.variant}-50 w-64 p-4 flex flex-col text-white  gap-4 rounded-2xl`}>
      <div className='flex justify-between'>
        <h2 className={`text-white font-bold`}>{waste.title}</h2>
        <p>icon</p>
  
      </div>
      <h1 className='text-center font-bold'>{waste.data} Littles </h1>
      <div className='flex flex-col items-end text-[12px]'>
        <p>{waste.search}</p>
        <p className='text-gray-10'>{waste.date}</p>
      </div>

    </div>

   ))}


  </section>

    
  )
}

export default Wastes