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
  const [hidden, setHidden] = useState(false);
  const handleHidden =()=> 
  {
   setHidden(!hidden);
  }

  return (
    <div className='flex bg-gray-15' >
    <NavBar/>
    <div className='flex flex-col gap-'>
    <Header
    title='Settings'
    />

    <div className='flex gap-6'>

      <div className={`${hidden?'hidden':''} w-1/4 `}>
        <SideBar selectedPage={selectedPage} onSelectPage={handlePageSelection}/>
        </div>
            {selectedPage === "Licence" && <Licence width={hidden?'full':'3/4'} />}
            {selectedPage === "Components" && <Structure  width={hidden?'full':'3/4'} />}
            {selectedPage === "Terms & Privacy" && <TermsPrivacy   width={hidden?'full':'3/4'}/>}
            {selectedPage === "Usage Manual" &&  <ManualUse  width={hidden?'full':'3/4'}/>}
            {selectedPage === "System Mode" && <Mode  width={hidden?'full':'3/4'}/>}
            <h1 className={`absolute left-[310px] top-[90px] ${hidden?'left-[31px] ':''}`} onClick={handleHidden}>menu</h1>
      
    </div>

    </div>
       
</div>
  )
}

export default SettingsPage