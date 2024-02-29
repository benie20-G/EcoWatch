import { SIDEBARLINKS } from '@/constants'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface SideBarProps{
  title:string,
}

function SideBar({title}:SideBarProps) {
  return (
<nav className=' w-1/4  bg-white p-4  h-[536px] rounded-tl-2xl rounded-tr-2xl mx-4 sticky top-20 left-0 overflow-y-auto '>
    <ul className='flex flex-col gap-4 '>
        {SIDEBARLINKS.map((link)=>(
            <li>
            <Link  href={link.href} className={`flex gap-4 items-center rounded-sm ${link.title === title ? 'bg-gray-20':''}  p-4`}>
            <Image
            src={link.icon}
            alt='icon'
            className='fill-stone-50'
            width={25}
            height={25}
            />
            <h1 className='font-bold'>{link.title}</h1>
            </Link>
           
            </li>
        ))}
    </ul>
    
</nav>
  )
}

export default SideBar