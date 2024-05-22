"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Rick & Morty",
    description: "Individual Project, HENRY, 2023. SPA using React, NodeJS, Express and CSS Frameworks.",
    image: "/Rick&Morty.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/MVCorreas/Proyecto-Integrador",
    previewUrl: "https://www.youtube.com/watch?v=miwCapuD9f8",
  },
  {
    id: 2,
    title: "Countrypedia",
    description: "Individual Project, HENRY, 2023. SPA using React, NodeJS, Express, SQL and pure CSS.",
    image: "/Countrypedia.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/MVCorreas/ProyectoIntegrador-Countries",
    previewUrl: "https://www.loom.com/share/ffb66b7c5bd945e9815fa114ba832345?sid=1956ede1-c679-4335-81bd-3586e0798ecd",
  },
  {
    id: 3,
    title: "Woofer",
    description: "Group Project, HENRY, 2023. SPA using NextJS14, Express, SQL, Tailwind, among others.",
    image: "/Woofer.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/germiiii/Woofer",
    previewUrl: "https://woofer-taupe.vercel.app/",
  },
  {
    id: 4,
    title: "DecoPalets",
    description: "Experimental project using technologies such as NextJS, Tailwind, MongoDB, and others. It resembles an e-commerce website using Paypal.",
    image: "/Decopalets.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/MVCorreas/Next-Decopalets-Ts",
    previewUrl: "https://next-decopalets-ts.vercel.app/",
  }
]

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;