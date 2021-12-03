

import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { ArrowRightIcon } from "@heroicons/react/solid";
import { FaMedium } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { projects } from "../data.js";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            I made project on cloning of Nutrify App and myntra website for their frontend part as well as backend part and also created many mini project that is mention below... 
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.id}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center md:rounded-lg"
                  style={{opacity:0.8}}
                  src={project.image}
            
                />
                <div className="px-8 py-10 relative w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <p className="tracking-widest text-sm title-font font-medium text-green-400">
                    {project.title}
                  </p>
                  <h1 className="title-font text-xs text-white ">
                    {project.subtitle}
                  </h1>
                  <p className="text-xs font-light ">{project.description}</p>
                
                     <p className="absolute bottom-0 left-3 flex m-1">

  <span className="m-1">
<a href="https://github.com/sumitjs7979" target="blank">
<FaGithub /></a>
  </span>
  <span className="m-1">
  <a href="https://twitter.com/Sumit61487349" target="blank">
  <FaMedium /></a>
  </span>
  <span className="m-1">
<a href="https://www.linkedin.com/in/sumit-kumar2702/" target="blank" >
<ArrowRightIcon className="w-4 h-4" /></a>
  </span>
  
</p>

                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}