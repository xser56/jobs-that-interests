"use client";

import React from "react";

interface Props {
  companyName: string;
  companyHyperLink: string;
  companyHyperLinkText: string;
  description: string;
  whyChose: string;

  workStack: string[];
  currentStack: string[];

  culture: string[];
  benifits: string[];
  location: string;

  currentSkills: boolean;

  goalsToAchieve: string[];

  exampleImages: string;
}
export default function JobCards({
  exampleImages,
  goalsToAchieve,
  workStack,
  whyChose,
  companyName,
  description,
  culture,
  benifits,
  location,
  currentStack,
  currentSkills,
  companyHyperLink,
  companyHyperLinkText,
}: Props) {
  
  return (
    <main className="min-h-screen text-white p-6 bg-[url('/assets/pagebackground.png')] bg-cover bg-center bg-no-repeat">
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Side */}
        <div className="space-y-6">
          {/* Company Info */}
          <section className="bg-black/80 p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-2">
              {companyName}
              <a
                href={companyHyperLink}
                target="_blank"
                rel="noreferrer"
                className="ml-3 text-blue-400 text-sm underline hover:text-blue-300 transition"
              >
                {companyHyperLinkText}
              </a>
            </h2>

            <div className="space-y-4 text-sm text-gray-200 mt-4">
              <div>
                <p className="font-semibold text-white">Description:</p>
                <p className="mt-1">{description}</p>
              </div>

              <div>
                <p className="font-semibold text-white">
                  Why I Chose This Company:
                </p>
                <p className="mt-1">{whyChose}</p>
              </div>
            </div>
          </section>

          {/* Culture / Benefits / Location */}
          <section className="bg-black/80 p-6 rounded-xl shadow-lg grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div>
              <h3 className="font-semibold text-white mb-1">Culture</h3>
              <p className="text-sm text-gray-300">
                {
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
                    {culture.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                }
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-1">Benefits</h3>
              <p className="text-sm text-gray-300">
                {
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
                    {benifits.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                }
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-1">Location</h3>
              <p className="text-sm text-gray-300">{location}</p>
            </div>
          </section>

          {/* Goals */}
          <section className="bg-black/80 p-6 rounded-xl shadow-lg">
            <h3 className="font-semibold text-white mb-2">Goals to Achieve</h3>
            <p className="text-sm text-gray-300">
              {
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
                  {goalsToAchieve.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              }
            </p>
          </section>
        </div>

        {/* Right Side */}
        <div className="space-y-6">
          {/* Stack & Skills */}
          <section className="bg-black/80 p-6 rounded-xl shadow-lg grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
            <div>
              <h4 className="font-semibold text-white mb-1">Work Stack</h4>
              <p className="text-sm text-gray-300">
                {
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
                    {workStack.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                }
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-1">Current Skills</h4>
              <p className="text-sm text-gray-300">
                {
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
                    {currentStack.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                }
              </p>
            </div>
          </section>

          {/* Skill Check */}
          <section className="bg-black/80 p-6 rounded-xl shadow-lg text-center">
            {currentSkills}
          </section>

          {/* Images */}
          <section className="bg-black/80 p-6 rounded-xl shadow-lg text-center">
            {exampleImages}
          </section>
        </div>
      </div>
    </main>
  );
}
