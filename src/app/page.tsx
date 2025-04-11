import { DropdownMenu } from '@radix-ui/react-dropdown-menu'
import React from 'react'
import Navbar from './Components/Navbar'
import JobSelect from './Components/JobSelect'

const page = () => {
  return (
    <div className='  min-h-screen 
    bg-[url("/assets/backgroundMain.png")] bg-cover font-sans'>
    <Navbar/>
    <div className=''>

      <main className='text-slate-400 font-serif'>

      <h1 className='text-3xl mb-10 mt-10 ps-10 font-light '> Five Companies I Would Like To Work At   :</h1>
      <p className='absolute left-10'>
        (Not in any particler order)
        </p>
      {/* Job Grid Section */}
      <div className='flex justify-center'>

      <section className='grid grid-cols-3  gap-5 object-contain '>
      <JobSelect baseImage={'/assets/jobCards/pocketpair.jpg'} hoverLogo={'/assets/jobCards/pocketpairlogo.png'} route={'/pages/pocket-pair'}/>
      <JobSelect baseImage={'/assets/jobCards/steam.jpg'} hoverLogo={'/assets/jobCards/steamlogo.png'} route={'/pages/valve'} />
      <JobSelect baseImage={'/assets/jobCards/gearboxlogo1.png'} hoverLogo={'/assets/jobCards/gearboxlogo.png'} route={'pages/gearbox'}/>
      <JobSelect baseImage={'/assets/jobCards/images.png'} hoverLogo={'/assets/jobCards/codestacklogo.png'} route={'pages/codestack'} />
      <JobSelect baseImage={'/assets/jobCards/google-2.avif'} hoverLogo={'/assets/jobCards/googlelogo2.png'} route={'pages/google'} />
      
      <div className='bg-stone-400/30 font-sans  rounded-2xl text-2xl border-1 ps-3 text-red-200 pt-10'>
        <h1 className='flex justify-center pb-2 font-semibold'>
        Other Considerations
        </h1>
        <div className='ps-8 '>
          <li>Nvidia
          </li>
          <li>Capcom</li>
          <li>Kehe</li>
          <li>Youtube</li>
          <li>Discord </li>
        </div>
          

      </div>
      </section>
      </div>

      </main>

    </div>    
    </div>

  )
}

export default page
