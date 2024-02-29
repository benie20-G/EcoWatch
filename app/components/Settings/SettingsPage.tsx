import React from 'react'
import Header from '../Header'
import NavBar from '../NavBar'
import SideBar from './SideBar'
import Licence from './Licence'
import Structure from './Structure'
import TermsPrivacy from './TermsPrivacy'
import ManualUse from './ManualUse'
function SettingsPage() {
  return (
    <div className='flex bg-gray-15' >
    <NavBar/>
    <div className='flex flex-col gap-'>
    <Header
    title='Settings'
    />
    <div className='flex '>
        <SideBar title='Components'/>
       {/* <Licence/> */}
       {/* <Structure/> */}
       {/* <TermsPrivacy/> */}
       <ManualUse/>
    </div>

    </div>
       
</div>
  )
}

export default SettingsPage