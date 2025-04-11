import JobCards from '@/app/Components/JobCards';
import Navbar from '@/app/Components/Navbar';
import React from 'react';

const page = () => {
  const description = "Google is a global leader in technology, known for creating transformative tools and platforms such as Search, Android, Gmail, and Chrome. Beyond products, Google is driven by a mission to organize the world’s information and make it universally accessible and useful. The company thrives on cutting-edge research, open-source collaboration, and engineering at scale — across web, mobile, cloud, and AI.";

  const whyChose = "I chose Google because of its unmatched scale, innovation-first culture, and deep emphasis on solving global problems through elegant engineering. I admire the company’s commitment to developer empowerment, ethical AI, and building tools that truly make a difference. Joining Google would mean growing alongside some of the most passionate engineers on the planet while contributing to technology that billions rely on daily.";

  return (
    <div>
      <Navbar />
      <div className="font-mono">

        <JobCards
          companyName="Google"
          companyHyperLink="https://careers.google.com/"
          companyHyperLinkText="Official Site"

          bgColor="bg-white/10"
          bgMain="bg-[url('/assets/googlebg.jpg')]"
          bgText="text-blue-500"
          textColor="text-slate-100"

          description={description}
          whyChose={whyChose}

          workStack={[
            'Golang / Java / C++',
            'Kubernetes / GCP',
            'TensorFlow / JAX',
            'Protocol Buffers / gRPC',
            'BigQuery / Firebase / Spanner',
          ]}
          currentStack={[
            'TypeScript / React / Next.js',
            'Tailwind / CSS-in-JS',
            'Node.js / Express',
            'Python / FastAPI / Flask',
            'PostgreSQL / MongoDB / Firebase',
          ]}
          culture={[
            'User-first product mindset',
            'Research and experimentation',
            'Open-source collaboration',
            'Work-life flexibility',
            'Global team diversity',
          ]}
          benifits={[
            'Top-tier compensation',
            'Learning budget and conferences',
            '20% personal innovation time',
            'Wellness and mental health support',
          ]}
          location="Mountain View, CA (Global Offices & Remote)"

          currentSkills={true}

          goalsToAchieve={[
            'Build performant, inclusive web applications',
            'Contribute to open-source AI tools at scale',
            'Work on cloud-native systems and developer platforms',
          ]}

          exampleImages={[
            '/assets/jobCards/jobImages/google1.webp',
            '/assets/jobCards/jobImages/google2.png',
            '/assets/jobCards/jobImages/google3.webp',
            '/assets/jobCards/jobImages/google4.png',
          ]}
        />
      </div>
    </div>
  );
};

export default page;
