import { STATES } from '@/constants'
import React from 'react'
import Image from 'next/image'

function Overview() {
  
  return (
    <section className='flex gap-6  p-2 '>
<div className='w-3/5 rounded-2xl bg-white p-5 flex flex-col gap-9 '>
 <div><h2>Recent tests</h2>
  <p  className='text-gray-30 text-[14px] '>view the anual report of tests made in different waters.</p>
  </div> 
  <Image src="/testsGraph.png" width={1200} height={1200} alt='graph'/>
  <div className='flex gap-6 justify-center'>
  <div className='flex justify-center items-center gap-2'><div className='w-4 h-4 bg-red-50'></div>water Gases</div>
  <div className='flex justify-center items-center gap-2'><div className='w-4 h-4 bg-green-50'></div>Plastics</div>
  <div className='flex justify-center items-center gap-2'><div className='w-4 h-4 bg-orange-50'></div>Aquatic Life</div>
  <div className='flex justify-center items-center gap-2'><div className='w-4 h-4 bg-gray-20 '></div>Water Chemicals</div>
</div>
</div>
<div className=' w-2/5 bg-white p-4 pb-10 rounded-2xl flex flex-col gap-6'>
  <div>
  <h2 className='font-bold'>Water State</h2>
  <p className=' text-gray-30 text-[14px]'>Properties of water recently tested</p>
  </div>
  <div className='flex flex-col gap-8 '>
    {STATES.map((state)=>(
         <div>
      <div className='flex items-center p-4 bg-gray-10 rounded-2xl'>
        <h1 className='text-3xl text-blue-70 px-4 font-bold'>{state.title}</h1>
        <p className=''>{state.description}</p>
      </div>
      </div>
    

    ))}
  </div>
</div>
    </section>
  )
}

export default Overview