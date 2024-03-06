"use client"
import React,{useState} from 'react'
import Header from '../Header'
import NavBar from '../NavBar'
import SideBar from './SideBar'
import ManualUse from './ManualUse'
import Licence from './Licence'
import Structure from './Structure'
import TermsPrivacy from './TermsPrivacy'
import Mode from './Mode'

function SettingsPage() {
  const [selectedPage,setSelectedPage] = useState<string>("System Mode")
  
  const handlePageSelection =(page :string) =>{
    setSelectedPage(page);
  };

  return (
    <div className='flex bg-gray-15' >
    <NavBar/>
    <div className='flex flex-col gap-'>
    <Header
    title='Settings'
    />
    <div className='flex '>
        <SideBar selectedPage={selectedPage} onSelectPage={handlePageSelection}/>

            {selectedPage === "Licence" && <Licence />}
            {selectedPage === "Components" && <Structure />}
            {selectedPage === "Terms & Privacy" && <TermsPrivacy />}
            {selectedPage === "Ugase Manual" &&  <ManualUse/>}
            {selectedPage === "System Mode" && <Mode/>}
      
    </div>

    </div>
       
</div>
  )
}

export default SettingsPage