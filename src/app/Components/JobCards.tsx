import React from 'react'

interface props
{
    description: string,
    culture: string,
    benifits: string,
    location: string,
    currentStack: string,
    currentSkills: string,
    companyHyperLink: string
}

export default function JobCards() {
    return (
      <main className="min-h-screen text-white p-4">
        {/* Grid Start */}
        <div className=" mx-2 grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Left Side */}
          <div className="space-y-4">
            {/* Company Info */}
            <div className="bg-black p-4 rounded">
              <h2 className="text-xl font-bold">Company Name <a href="#" className="text-blue-400 text-sm">HyperLink</a></h2>
              <p className="text-sm mt-2">Description:</p>
              <div className=" rounded mt-1" />
              <h1>
                I LOBE THIS COMPANY AND I WANT TO WORK THERE!!!1
              </h1>
                
              <p className="text-sm mt-4">Why I chose</p>
              <div className="bg-gray-300 h-16 rounded mt-1" />
            </div>
  
            {/* Culture / Benefits / Location */}
            <div className="bg-black p-4 rounded grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="mb-2">Culture</p>
                <div className=" rounded" />
                <h1>TEst</h1>
              </div>
              <div>
                <p className="mb-2">Benefits</p>
                <div className="bg-gray-300 h-24 rounded" />
              </div>
              <div>
                <p className="mb-2">Location</p>
                <div className="bg-gray-300 h-24 rounded" />
              </div>
            </div>
  
            {/* Goals */}
            <div className="bg-black p-4 rounded">
              <p className="mb-2">Goals To Achieve</p>
              <div className="bg-gray-300 h-16 rounded" />
            </div>
          </div>
  
          {/* Right Side */}
          <div className="space-y-4">
            {/* Stack & Skills */}
            <div className="bg-black p-4 rounded grid grid-cols-2 gap-4 text-center">
              <div>
                <p className="mb-2">Current Stack</p>
                <div className="bg-gray-300 h-40 rounded" />
              </div>
              <div>
                <p className="mb-2">Current Skill</p>
                <div className="bg-gray-300 h-40 rounded" />
              </div>
            </div>
  
            {/* Skill Check */}
            <div className="bg-black p-4 rounded text-center">
              Current stack skills yes or no
            </div>
          </div>
        </div>
      </main>
    );
  }
  


