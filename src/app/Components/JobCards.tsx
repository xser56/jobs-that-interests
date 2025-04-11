"use client";

import React from "react";

interface Props {
  companyName: string;
  companyHyperLink: string;
  companyHyperLinkText: string;
  description: string;
  whyChose: string;

  bgMain: string; 
  bgColor: string;
  bgText: string;
  textColor: string;


  workStack: string[];
  currentStack: string[];

  culture: string[];
  benifits: string[];
  location: string;

  currentSkills: boolean;

  goalsToAchieve: string[];

  exampleImages: string[];
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
  bgColor,
  bgMain,
  bgText,
  textColor
}: Props) {
  return (
<main className={`min-h-screen ${bgText} p-6 ${bgMain} bg-cover bg-center bg-no-repeat border-black border-4`}>
<div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Side */}
        <div className="space-y-6">
          {/* Company Info */}
          <section className={`${bgColor} p-6 rounded-xl shadow-lg`}>
            <h2 className="text-2xl font-bold mb-2">
              {companyName}
              <a
                href={companyHyperLink}
                target="_blank"
                rel="noreferrer"
                className="ml-3 text-blue-300 text-sm hover:text-blue-500 transition "
              >
                {companyHyperLinkText}
              </a>
            </h2>

            <div className="space-y-4 text-sm mt-4">
              <div>
                <p className={`font-semibold `}>Description:</p>
                <p className={`${textColor} mt-1`}>{description}</p>
              </div>

              <div>
                <p className={`font-semibold ${bgText}`}>
                  Why I Chose This Company:
                </p>
                <p className={`${textColor} mt-1`}>{whyChose}</p>
              </div>
            </div>
          </section>

          {/* Culture / Benefits / Location */}
          <section className={` ${bgColor} p-6 rounded-xl shadow-lg grid grid-cols-1 sm:grid-cols-3 gap-4 text-center`}>
            <div>
              <h3 className="font-semibold  mb-1">Culture</h3>
              <div className="text-sm text-gray-300">
                {
                  <ul className={`list-disc list-inside space-y-1 text-sm ${textColor}`}>
                    {culture.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                }
              </div>
            </div>
            <div>
              <h3 className="font-semibold  mb-1">Benefits</h3>
              <p className="text-sm text-gray-300">
                {
                  <ul className={`list-disc list-inside space-y-1 text-sm ${textColor}`}>
                    {benifits.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                }
              </p>
            </div>
            <div>
              <h3 className="font-semibold  mb-1">Location</h3>
              <p className={`text-sm ${textColor}`}>{location}</p>
            </div>
          </section>

          {/* Goals */}
          <section className={`${bgColor} p-6 rounded-xl shadow-lg `}>
            <h3 className="font-semibold  mb-2">Goals to Achieve</h3>
            <p className="text-sm text-gray-300">
              {
                <ul className={`list-disc list-inside space-y-1 text-sm ${textColor}`}>
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
          <section className={`${bgColor} p-6 rounded-xl shadow-lg grid grid-cols-1 sm:grid-cols-2 gap-4 text-center`}>
            <div>
              <h4 className="font-semibold  mb-1">Work Stack</h4>
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
              <h4 className="font-semibold  mb-1">Current Skills</h4>
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
          <section className={`${bgColor} p-6 rounded-xl shadow-lg text-center`}>
            <h1>Do I have the Skills To work here?</h1>
            <p>{!workStack || workStack ? "Yes" : "No" }</p>
          </section>

          {/* Images */}
          <section className={`${bgColor} p-6 rounded-xl shadow-lg text-center`}>
            <h3 className="text-lg font-semibold mb-4  text-center">
              Works
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {exampleImages.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Example ${index + 1}`}
                  className="w-full h-40 object-cover rounded-lg border border-white/20"
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
