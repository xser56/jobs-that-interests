import JobCards from '@/app/Components/JobCards';
import Navbar from '@/app/Components/Navbar';
import React from 'react';

const page = () => {
  const description = "Gearbox Software is a Texas-based game development company known for iconic titles like Borderlands, Brothers in Arms, and publishing partnerships on hit titles. Their studio thrives on bold storytelling, wild creativity, and deeply engaging gameplay. Gearbox blends technical mastery with irreverent humor and is known for pushing creative boundaries within stylized, high-energy worlds.";

  const whyChose = "I chose Gearbox because of their fearless creative direction and ability to build worlds that feel alive, chaotic, and endlessly fun. I’ve always admired how Gearbox blends story and gameplay seamlessly. The idea of contributing to a studio that embraces personality, humor, and cutting-edge design makes Gearbox a dream team to be part of.";

  return (
    <div>
      <Navbar />
      <div className="font-mono">

        <JobCards
          companyName="Gearbox Software"
          companyHyperLink="https://www.gearboxsoftware.com/"
          companyHyperLinkText="Official Site"

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
            'Git / Perforce',
          ]}
          currentStack={[
            'JavaScript / TypeScript',
            'React / Tailwind',
            'Blender / Maya (basic)',
            'Node.js tooling',
          ]}
          culture={[
            'Creative freedom',
            'Bold storytelling',
            'Humor-driven culture',
            'Collaborative spirit',
            'Stylized design focus',
          ]}
          benifits={[
            'Remote-flexible positions',
            'Passionate game teams',
            'Personal project support',
            'Studio-led game jams',
          ]}
          location="Frisco, Texas (On-site, Hybrid, or Remote)"

          currentSkills={true}

          goalsToAchieve={[
            'Contribute to a co-op action title',
            'Deepen Unreal Engine expertise',
            'Design systems that enhance story and gameplay',
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
