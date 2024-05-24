"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Sequelize</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Fullstack Development, HENRY</li>
        <li>Programming Basics, Egg Education</li>
        <li>English Teaching, National University of Cuyo, Argentina</li>
      </ul>
      
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Full Stack Developer - Henry</li>
        <li>Porgamming Basics - Egg Education</li>
        <li>Intro to Java -  Edutin Academy</li>
        <li>Data Structures and Backend with Java - Coursera</li>
        {/* <li>UX UI Web and Mobile Design - UDEMY</li>
        <li>Flutter - UDEMY</li> */}
        <li>Certificate of Proficiency in English, Cambridge University</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-slate-900" id="about">
    <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative border-8 border-[#a72848] rounded-full">
        <Image 
        src="/AboutMe.jpeg" 
        alt="aboutImage"
        width={500} 
        height={500}
        className="rounded-full absolute" />
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#a72848] via-[#ffcccc] to-[#ffeecc] mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I am a driven Full Stack Developer with a unique blend of language expertise and coding proficiency. 
          Skilled in React.js, Next.js, Node.js, HTML, CSS, and Javascript, among others, I specialize in creating appealing interfaces and optimizing user performance. 
          My background in English translation enhances my clear communication, bridging diverse perspectives in global software development. 
          Along with freelance Front End work, I am advancing my skills with a Web and Mobile Design course. 
          I am commited to ongoing learning and excited to contribute my evolving expertise to dynamic teams.
          </p>
          <div className="flex flex-row justify-start mt-8 text-2xl">
        
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;