import JobCards from '@/app/Components/JobCards';
import Navbar from '@/app/Components/Navbar';
import React from 'react';

const page = () => {
  const description = "Google is a global leader in technology, known for creating transformative tools and platforms such as Search, Android, Gmail, and Chrome. Beyond products, Google is driven by a mission to organize the world’s information and make it universally accessible and useful. The company thrives on cutting-edge research, open-source collaboration, and engineering at scale — across web, mobile, cloud, and AI.";

  const whyChose = "I picked Google because they build things that pretty much the whole world uses, and they do it in a way that pushes boundaries. I really respect how they give developers room to grow and work on stuff that actually matters. The idea of being part of a team that's solving huge real-world problems with code and doing it at a massive scale is super exciting to me. They are one of the leading brands in technology, and I would like to be apart of that future!";

  return (
    <div>
      <Navbar />
      <div className="font-mono">

        <JobCards
          companyName="Google"
          companyHyperLink="https://careers.google.com/"
          companyHyperLinkText="Job Site"

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
            'Tailwind / CSS',
            'Node.js / C#/ Sql'
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

          currentSkills={false}

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
