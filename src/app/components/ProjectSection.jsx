"use client";

import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Admin Dashboard",
    description: "React Admin Dashboard UI Project",
    image: "/images/projects/react-dashboard.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/DwiL4u/react-admin-dashboard",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Crypto Price Tracker App",
    description: "Crypto Price Tracker App React",
    image: "/images/projects/crypto.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/DwiL4u/crypto-price-tracker",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "MERN App",
    description: "MongoDB, Express, React, Node.js Project",
    image: "/images/projects/mern-app.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/DwiL4u/mern-app",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Todo App React",
    description: "Todo App React Project",
    image: "/images/projects/todo-app.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/DwiL4u/todoApp-react",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Gemini Clone App",
    description: "Gemini Clone React",
    image: "/images/projects/gemini-clone.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/DwiL4u/gemini-clone",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Logo Maker App ",
    description: "Logo Maker React.js Project",
    image: "/images/projects/logo-maker.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/DwiL4u/logomaker",
    previewUrl: "/",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  }
  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );
   const cardVariants = {
     initial: { y: 50, opacity: 0 },
     animate: { y: 0, opacity: 1 },
   };

  return (
    <section id="projects" className="pb-24">
      <h2 className="text-center text-4xl font-bold text-slate-50 mt-4 my-4 py-10">
        My Projects
      </h2>
      <div className="text-slate-50 flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          name="All"
          onClick={handleTagChange}
          isSelected={tag === "All"}
        />
        <ProjectTag
          name="Web"
          onClick={handleTagChange}
          isSelected={tag === "Web"}
        />
        <ProjectTag
          name="Mobile"
          onClick={handleTagChange}
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul className="grid md:grid-cols-3 gap-8 md:gap-12 " ref={ref}>
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

export default ProjectSection;
