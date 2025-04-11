import JobCards from '@/app/Components/JobCards';
import Navbar from '@/app/Components/Navbar';
import React from 'react';

const page = () => {
  const description = "Gearbox Software is a Texas-based game development company known for iconic titles like Borderlands, Brothers in Arms, and publishing partnerships on hit titles. Their studio thrives on bold storytelling, wild creativity, and deeply engaging gameplay. Gearbox blends technical mastery with irreverent humor and is known for pushing creative boundaries within stylized, high-energy worlds.";

  const whyChose = "I chose Gearbox because of their fearless creative direction and ability to build worlds that feel alive, chaotic, and endlessly fun. Borderlands is one of my favorite gaming fracnhises and its a game that I would drop evertyhing to work on. I’ve always admired how Gearbox kinda just does what they want and says what they want (especially their CEO). If I could get in on the gaming industry, this is a place I would totally consider working at first.";

  return (
    <div>
      <Navbar />
      <div className="font-mono">

        <JobCards
          companyName="Gearbox Software"
          companyHyperLink="https://www.gearboxsoftware.com/careers/"
          companyHyperLinkText="Job Site"

          bgColor="bg-black/40"
          bgMain="bg-[url('/assets/jobCards/gearbobg.avif')]"
          bgText="text-amber-600"
          textColor="text-slate-200"

          description={description}
          whyChose={whyChose}

          workStack={[
            'Unreal Engine',
            'C++ / Blueprints',
            'Custom Gearbox tools',
            'Visual Scripting',
          ]}
          currentStack={[
            'JavaScript / TypeScript',
            'React / Tailwind',
            'Node.js / C#',
          ]}
          culture={[
            'Bold storytelling',
            'Humor-driven culture',
            'Stylized design focus',
          ]}
          benifits={[
            'Remote-flexible positions',
            'Passionate game teams',
            'Personal project support',
            'Studio-led game jams',
          ]}
          location="Frisco, Texas (On-site, Hybrid, or Remote)"

          currentSkills={false}

          goalsToAchieve={[
            'Contribute to the Borderlands Series',
            'Learn and develop in Unreal Engine',
            'Work and understand fun and immersive game design',
          ]}

          exampleImages={[
            '/assets/jobCards/gearbox1.jpg',
            '/assets/jobCards/gearbox2.jpg',
            '/assets/jobCards/gearbox3.webp',
            '/assets/jobCards/gearbox4.jpg',
          ]}
        />
      </div>
    </div>
  );
};

export default page;
