import { STATES } from '@/constants'
import React from 'react'

function Overview() {
  return (
    <section className='flex gap-10  p-4'>
<div className='w-3/5 rounded-2xl bg-white p-4 '>
  <h2>Recent tests</h2>
  <p  className='text-gray-30 text-[14px] '>view the anual report of tests made in different waters.</p>
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