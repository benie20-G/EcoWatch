import React from 'react'
import Wastes from './Wastes'
import Overview from './Overview'
import StatMap from './StatMap'
import NavBar from '../NavBar'
import Header from '../Header'

function Dashboard() {
  return (
 
    <div className='flex bg-gray-10'>
        <NavBar/>
        <div className='flex flex-col gap-4'>
        <Header
        title='Dashboard'
        />
        <Wastes/>
           <Overview/>
           <StatMap/>
        </div>
           
    </div>
 
  )
}

export default Dashboard