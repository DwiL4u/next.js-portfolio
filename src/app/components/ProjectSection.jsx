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
    previewUrl: "https://react-admin-dashboard-khaki-delta.vercel.app/",
  },
  {
    id: 2,
    title: "Crypto Price Tracker App",
    description: "Crypto Price Tracker App React",
    image: "/images/projects/crypto.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/DwiL4u/crypto-price-tracking-app-reactJs",
    previewUrl: "https://crypto-price-tracking-app-react-js.vercel.app/",
  },
  {
    id: 3,
    title: "Kanban Board App React",
    description: "Drag and Drop Kanban Board React",
    image: "/images/projects/drag-and-drop.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/DwiL4u/drag-and-drop-kanban-board-react",
    previewUrl: "https://drag-and-drop-kanban-board-react.vercel.app/",
  },
  {
    id: 4,
    title: "Todo App React",
    description: "Todo App React Project",
    image: "/images/projects/todo-app.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/DwiL4u/todoApp-react",
    previewUrl: "https://todo-app-react-three-nu.vercel.app/",
  },
  {
    id: 5,
    title: "Recipe Finder App",
    description: "Recipe Finder App React",
    image: "/images/projects/recipe-finder.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/DwiL4u/recipe-finder-react",
    previewUrl:
      "/https://recipe-finder-react-m8uv9r94n-dwi-lengganis-projects.vercel.app/",
  },
  {
    id: 6,
    title: "Logo Maker App ",
    description: "Logo Maker React.js Project",
    image: "/images/projects/logo-maker.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/DwiL4u/logomaker",
    previewUrl: "https://logomaker-one.vercel.app/",
  },
  {
    id: 7,
    title: "Burger Shop UI Nextjs",
    description: "Burger Shop UI Next.js Project",
    image: "/images/projects/burger.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/DwiL4u/burger-landingpage-ui-nextJs",
    previewUrl: "https://burger-landingpage-ui-next-js.vercel.app/",
  },
  {
    id: 8,
    title: "Restaurant UI Nextjs",
    description: "Restaurant UI Next.js Project",
    image: "/images/projects/pizza-rest.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/DwiL4u/restaurant-ui-nextjs",
    previewUrl: "https://restaurant-ui-nextjs.vercel.app/",
  },
  {
    id: 9,
    title: "Real Estate UI Nextjs",
    description: "Real Estate UI Next.js Project",
    image: "/images/projects/real-estate.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/DwiL4u/realestate-ui-nextjs",
    previewUrl: "https://realestate-ui-nextjs.vercel.app/",
  },
];
const PAGE_SIZE = 6;

const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const [currentPage, setCurrentPage] = useState(1); 
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
     setCurrentPage(1); 
  }
  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );
   const startIndex = (currentPage - 1) * PAGE_SIZE;
   const selectedProjects = filteredProjects.slice(
     startIndex,
     startIndex + PAGE_SIZE
   );
   const cardVariants = {
     initial: { y: 50, opacity: 0 },
     animate: { y: 0, opacity: 1 },
   };
  const hasNextPage = startIndex + PAGE_SIZE < filteredProjects.length;
  const hasPreviousPage = currentPage > 1;

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
        {selectedProjects.map((project, index) => (
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
      <div className="flex justify-center mt-8 space-x-4">
        {hasPreviousPage && (
          <button
            className="px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg"
            onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
          >
            Previous
          </button>
        )}
        {hasNextPage && (
          <button
            className="px-6 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg"
            onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
          >
            Next
          </button>
        )}
      </div>
    </section>
  );
};

export default ProjectSection;
