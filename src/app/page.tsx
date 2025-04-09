import { DropdownMenu } from '@radix-ui/react-dropdown-menu'
import React from 'react'
import Navbar from './Components/Navbar'
import JobSelect from './Components/JobSelect'

const page = () => {
  return (
    <div className='text-white  min-h-screen 
    bg-[url("/assets/backgroundMain.png")] bg-cover font-sans'>
    <Navbar/>
    <div className=''>

      <main className=''>

      <h1 className='text-3xl mb-10 mt-10 ps-10'>Five Companies i'd like to work at</h1>
      {/* Job Grid Section */}
      <div className='flex justify-center'>

      <section className='grid grid-cols-3 w-[800px] gap-5'>
      <JobSelect/>
      <JobSelect/>
      <JobSelect/>
      <JobSelect/>
      <JobSelect/>
      <div className='bg-blue-900'>
        {/* Info Here */}
      </div>
      </section>
      </div>

      </main>

    </div>    
    </div>

  )
}

export default page
