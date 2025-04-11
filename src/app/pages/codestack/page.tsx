import JobCards from '@/app/Components/JobCards';
import Navbar from '@/app/Components/Navbar';
import React from 'react'


const page = () => {
  
  // text blocks
  const description = "CodeStack Academy is Stockton’s first immersive and accelerated code school offered by the San Joaquin County Office of Education. As a non-profit, our $5,000 tuition is a fraction of the cost comparable to for-profit code schools. Our academy prepares you for the workforce by teaching you the latest technologies including HTML5, CSS3, JavaScript, React, Angular, SQL Server, C#, Cloud Services, DevOps, Mobile App Development & more."

  const whyChose = "I put CodeStack Acedemy up in my job interest because I like what they're doing within the community. Im not really too sure what the actual CodeStack Dev team does at this moment, but fom what I experienced with the Acedemy I enjoy the dynamic and enthusiasm of the instructors. I can tell there is genuine passion and will to teach and I appreciate that! I'm not sure about being an instructer but I wouldn't mine starting off my coding career with CodeStack!"

  return (
    <div>
      <Navbar />
      <div className='font-mono'>

      <JobCards
          companyName="CodeStack"
          companyHyperLink="https://codestackacademy.org/our-academy"
          companyHyperLinkText="Official Site"

          bgColor="bg-slate-100/25"
          bgText="text-amber-500"
          bgMain="bg-[url('/assets/codestackbg.webp')]"
          textColor={'text-white'}

          description={description}
          whyChose={whyChose}

          workStack={[
            'JavaScript / Next.Js / React',
            'C# Backend / Node.js',
            'Tailwind, Bootstrap'
          ]}
          currentStack={[
            'JavaScript / Next.Js /React',
            'C# Backend / Node.js',
            'Tailwind, Bootstrap'
          ]}
          culture={['Honest', 'Collaborative', 'Chill']}
          benifits={['N/A']}
          location={'Stockon, California (Hybrid)'}
          currentSkills={true}
          goalsToAchieve={[
            'Contribute to a community of enthusiastic young Web developers',
            'Further develop my skills in Full stack application development',
            'Be apart of a team of like minded indivduals',
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
