import { TESTS } from '@/constants'
import React from 'react'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Tests() {
  return (
    <section className=' w-96 flex bg-white flex-col m-2 p-4 gap-3 rounded-2xl justify-between'>
        <h1 className='font-bold text-md'>Latest Tests</h1>
        <p>View and update the result from your most recent tests</p>

        <table className=''>
            
                <tr className='border'>
                <th>Components</th>
                <th>Depth</th>
                <th>Value</th>
                <th>Edit</th>
                </tr>
        
           
                {TESTS.map((test)=>(
                    <tr className='border'>
                        <td>{test.component}</td>
                        <td>{test.Depth}</td>
                        <td>{test.value}</td>
                        <td><FontAwesomeIcon icon={faEdit}/></td>
                    </tr>

                ))}


        </table>
  
   

  </section>
  )
}

export default Tests