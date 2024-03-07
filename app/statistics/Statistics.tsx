import React from 'react'
import Header from '../Header'
import NavBar from '../NavBar'
import Wastes from '../dashboard/Wastes'
import Tests from './tests'


function Statistics() {
  return (
 
    <div className='flex bg-gray-10'>
        <NavBar/>
        <div className='flex flex-col gap-4'>
        <Header
        title='Statistics'
        />
    <Tests/>    
           {/* <Overview/>
           <StatMap/> */}
        </div>
           
    </div>
 
  )
}

export default Statistics