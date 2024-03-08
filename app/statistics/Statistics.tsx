import React from 'react'
import Header from '../Header'
import NavBar from '../NavBar'
import Wastes from '../dashboard/Wastes'
import Tests from './Tests'


function Statistics() {
  return (

    <div className='flex border  bg-gray-10'>
      <NavBar />
      <div className='flex flex-col w-full gap-4'>
        <Header
          title='Statistics'
        />

        <Tests />

        <section className=' w-full h-80  flex bg-white flex-col m-2 p-4 gap-3 rounded-2xl justify-between'>
          graph

        </section>
        {/* <Overview/>
           <StatMap/> */}
      </div>

    </div>

  )
}

export default Statistics