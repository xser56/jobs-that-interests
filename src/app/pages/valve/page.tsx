import JobCards from '@/app/Components/JobCards';
import Navbar from '@/app/Components/Navbar';
import React from 'react'


const page = () => {
  
  // text blocks
  const description = "Valve is a legendary game development and digital distribution company known for creating industry-defining titles such as Half-Life, Portal, and Dota 2, as well as the groundbreaking Steam platform. They are pioneers in both storytelling and technology, consistently pushing the boundaries of what interactive media can be. Valve operates with a flat hierarchy, encouraging initiative, innovation, and personal ownership on every level of development."

  const whyChose = "I chose Valve because they embody a blend of deep technical creativity and fearless game design. I mean, almost everything they make is quality. Their commitment to innovation and autonomy is something i'd like to be apart of in my professinal career. I'm drawn to their porducts, nothing about them is super flashy and superficial. They just make good products from video games to physcial technology. Who wouldn't want to be apart of this gaming megagiant!"

  return (
    <div>
      <Navbar />
      <div className='font-mono'>

      <JobCards
          companyName="Valve"
          companyHyperLink="https://www.valvesoftware.com/"
          companyHyperLinkText="Job Site"

          bgColor="bg-slate-200/5"
          bgMain="bg-[url('/assets/jobCards/steam.jpg')]"
          bgText={'text-blue-700'}
          textColor={'text-stone-400'}

          description={description}
          whyChose={whyChose}

          workStack={[
            'C++ / Source Engine',
            'Python for tooling',
            'OpenGL / Vulkan',
          ]}
          currentStack={[
            'TypeScript / Node.js',
            'React / Next.js',
            'C# / JavaScript',
          ]}
          culture={[
            'Flat hierarchy',
            'Autonomy-driven',
            'Experimental'
          ]}
          benifits={[
            'Developer freedom',
            'Building Internal Products with a long standing solid team',
            'Generous compensation packages',
          ]}
          location="Bellevue, Washington (On or Off Site)"

          currentSkills={true}

          goalsToAchieve={[
            'Work in a professional envoirnment with long standing individuals in the industry',
            'Contribute to innovative games or VR, or general technology',
            'Grow in personal development alongside experienced peers',
          ]}

          exampleImages={[
            '/assets/jobCards/jobImages/valve1.webp',
            '/assets/jobCards/jobImages/valve2.jpg',
            '/assets/jobCards/jobImages/valve3.jpg',
            '/assets/jobCards/jobImages/valve4.avif',
          ]}  />
     </div>

    </div>
  );
  
}

export default page
