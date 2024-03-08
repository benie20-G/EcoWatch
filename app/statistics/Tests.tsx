import { TESTS } from '@/constants'
import React from 'react'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'

function Tests() {
  return (
    <section className=' w-full  flex bg-white flex-col m-2 p-4 gap-3 rounded-2xl justify-between'>
        <h1 className='font-bold text-md'>Latest Tests</h1>
        <p>View and update the result from your most recent tests</p>

        <table className='w-auto ng-green'>
           <thead>
                <tr className='border-b'>
                <th className='text-start p-3'>Components</th>
                <th className='text-start p-3'>Depth</th>
                <th className='text-start p-3'>Value</th>
                <th className='text-start p-3'>Edit</th>
                </tr>
            </thead>
            <tbody>
                {TESTS.map((test,index)=>(
                 <tr key={index} className='border-b'>
                        <td className='p-3'>{test.component}</td>
                        <td className='p-3'>{test.Depth}</td>
                        <td className='p-3'>{test.value}</td>
                        <td className='p-3'><Image src='./Edit.svg' alt='edit' width={24} height={24}/></td>
                    </tr>

                ))}
              </tbody>

        </table>
  </section>
  )
}

export default Tests