import JobCards from '@/app/Components/JobCards';
import Navbar from '@/app/Components/Navbar';
import React from 'react'


const page = () => {
  
  // text blocks
  const description = "Valve is a legendary game development and digital distribution company known for creating industry-defining titles such as Half-Life, Portal, and Dota 2, as well as the groundbreaking Steam platform. They are pioneers in both storytelling and technology, consistently pushing the boundaries of what interactive media can be. Valve operates with a flat hierarchy, encouraging initiative, innovation, and personal ownership on every level of development."

  const whyChose = "I chose Valve because they embody a blend of deep technical creativity and fearless game design. Their commitment to innovation and autonomy reflects the kind of environment where I’d thrive. I'm drawn to their flat structure and the trust they place in individuals to build and ship meaningful experiences. The idea of contributing to a company that's shaped modern gaming is incredibly exciting to me."

  return (
    <div>
      <Navbar />
      <div className='font-mono'>

      <JobCards
          companyName="Valve"
          companyHyperLink="https://www.valvesoftware.com/"
          companyHyperLinkText="Official Site"

          bgColor="bg-slate-200/5"
          bgMain="bg-[url('/assets/jobCards/steam.jpg')]"
          bgText={'text-blue-700'}
          textColor={'text-stone-300'}

          description={description}
          whyChose={whyChose}

          workStack={[
            'C++ / Source Engine',
            'Python for tooling',
            'OpenGL / Vulkan',
            'Steamworks SDK',
            'Git / Perforce',
          ]}
          currentStack={[
            'TypeScript / Node.js',
            'React / Next.js',
            'C# / Unity (personal)',
            'Docker / CI pipelines',
          ]}
          culture={[
            'Flat hierarchy',
            'Autonomy-driven',
            'Experimental',
            'Tech-focused',
            'No job titles',
          ]}
          benifits={[
            'Incredible developer freedom',
            'Focus on internal tool building',
            'Legendary team collaboration',
            'Private offices & remote options',
          ]}
          location="Bellevue, Washington (On-site & Hybrid)"

          currentSkills={true}

          goalsToAchieve={[
            'Work on tools that empower other devs',
            'Contribute to innovative games or VR',
            'Grow in systems design and engine-level thinking',
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
