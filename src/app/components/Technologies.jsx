"use client";
import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiJavascript,
  SiGit,
  SiDocker,
  SiHtml5,
  SiCss3,
  SiPostman,
  SiPostgresql,
  SiMysql,
} from "react-icons/si";

const Technologies = () => {
  return (
    <div className="pb-24">
      <h2 className="my-20 text-center text-4xl font-bold">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="icon-walk">
          <SiHtml5 className="text-7xl sm:text-5xl text-red-500" />
        </div>
        <div className="icon-walk">
          <SiCss3 className="text-7xl sm:text-5xl text-blue-500" />
        </div>
        <div className="icon-walk">
          <SiJavascript className="text-7xl sm:text-5xl text-yellow-500" />
        </div>
        <div className="icon-walk">
          <RiReactjsLine className="text-7xl sm:text-5xl text-cyan-400" />
        </div>
        <div className="icon-walk">
          <TbBrandNextjs className="text-7xl sm:text-5xl" />
        </div>
        <div className="icon-walk">
          <SiTailwindcss className="text-7xl sm:text-5xl text-blue-500" />
        </div>
        <div className="icon-walk">
          <SiNodedotjs className="text-7xl sm:text-5xl text-green-500" />
        </div>
        <div className="icon-walk">
          <SiMongodb className="text-7xl sm:text-5xl text-green-500" />
        </div>
        <div className="icon-walk">
          <SiGit className="text-7xl sm:text-5xl text-red-500" />
        </div>
        <div className="icon-walk">
          <SiDocker className="text-7xl sm:text-5xl text-blue-500" />
        </div>
        <div className="icon-walk">
          <SiPostman className="text-7xl sm:text-5xl text-orange-500" />
        </div>
        <div className="icon-walk">
          <SiPostgresql className="text-7xl sm:text-5xl text-blue-500" />
        </div>
        <div className="icon-walk">
          <SiMysql className="text-7xl sm:text-5xl text-blue-500" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
