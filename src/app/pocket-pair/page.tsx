import React from 'react'
import JobCards from '../Components/JobCards'
import Navbar from '../Components/Navbar'

const page = () => {
  
  // text blocks
  const description = "Pocketpair is a leading indie game development company in Japan, attracting attention from game companies worldwide. We have repeatedly achieved top rank in global sales on Steam. While maintaining a thorough customer-centric approach, we value our developers and create games that are well-received in the global market. Adopting a development structure in line with the times, we deliver unique games worldwide."
  const whyChose = "I chose Pocket Pair because their games align with the kind of fun and freedom I believe games should offer. I admire their bold creativity and their approach to game development — it feels playful yet professional. As someone who values autonomy and innovation, I'd love to contribute to a team that doesn’t just follow trends, but creates them."

  return (
    <div>
      <Navbar />
      <div className='font-mono'>

      <JobCards
        companyName={'Pocket Pair'}
        companyHyperLink={'https://www.pocketpair.jp/palworld'}
        companyHyperLinkText={'Website'}
        description={description}
        whyChose={whyChose}
        workStack={[
          'Unity / Unreal Engine',
          'C# / C++',
          'Git / GitHub',
          'Node.js for backend',
        ]}
        currentStack={[
          'React / Next.js',
          'TypeScript / Tailwind CSS',
          'MongoDB / Firebase',
        ]}
        culture={['Playful', 'Collaborative', 'Experimental']}
        benifits={['Remote-friendly', 'Creative freedom', 'New IPs']}
        location={'Tokyo, Japan (Remote Friendly)'}
        currentSkills={true}
        goalsToAchieve={[
          'Contribute to a live multiplayer game',
          'Learn Unity more deeply',
          'Publish a playable prototype',
        ]}
        exampleImages={['/assets/image1.png', '/assets/image2.png']}
      /> 
     </div>

    </div>
  );
  
}

export default page
