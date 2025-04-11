import JobCards from '@/app/Components/JobCards';
import Navbar from '@/app/Components/Navbar';
import React from 'react'


const page = () => {
  
  // text blocks
  const description = "Pocketpair is a leading indie game development company in Japan, attracting attention from game companies worldwide. We have repeatedly achieved top rank in global sales on Steam. While maintaining a thorough customer-centric approach, we value our developers and create games that are well-received in the global market. Adopting a development structure in line with the times, we deliver unique games worldwide."

  const whyChose = "I chose Pocketpair as one of my options because I personally enjoyed a couple of their releases. My ultimate goal is to learn game development and be apart of any projects. The work culture and environment from what I seen is very chill and laidback. The company seems to value their employees and consideres them not as just workers, but actual human beings. Hopefully I can work there before they get sued into oblivian by Nintendo!"

  return (
    <div>
      <Navbar />
      <div className='font-mono'>

      <JobCards
          companyName="Pocketpair"
          companyHyperLink="https://www.pocketpair.jp/jobs"
          companyHyperLinkText="Official Site"

          bgColor="bg-slate-100/25"
          bgText="text-amber-300"
          bgMain="bg-[url('/assets/codestackbg.webp')]"
          textColor={'text-white'}

          description={description}
          whyChose={whyChose}

          workStack={[
            'Unity / Unreal Engine',
            'C# / C++',
            'Node.js',
          ]}
          currentStack={[
            'React / Next.js',
            'TypeScript / Tailwind CSS',
            'C# Backend / JavaScript',
          ]}
          culture={['Playful', 'Collaborative', 'Chill']}
          benifits={['Remote-friendly', 'Creative freedom', 'New IP development']}
          location={'Tokyo, Japan (Remote Friendly)'}
          currentSkills={true}
          goalsToAchieve={[
            'Contribute to ongoing games that I enjoy from them',
            'A deeper dive into game engines for development',
            'Be apart of team of new and fresh programmers',
          ]}

          exampleImages={[
            '/assets/codestack.jpg',
            '/assets/codestack1.webp',
            '/assets/codstack2.webp',
            '/assets/codestack4.png',
          ]} />
     </div>

    </div>
  );
  
}

export default page
