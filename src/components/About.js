
import React from "react";
import { GrLinkedin } from "react-icons/gr";
import { FaTwitterSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white ">
            Hi, I'm Sumit.
            <br className="hidden lg:inline-block" /><span >I am a</span><span className="animate-pulse text-green-500"> full stack web developer.</span>
          </h1>
          <p className="mb-8 leading-relaxed">
          Currently pursuing a full-stack web development course at masai school.
My specialties are learning new skills quickly, team management, problem-solving mindset and belief in both hard and smart work.
I am proficient in JavaScript, HTML, CSS, React JS, MongoDB, Node JS and Express JS. There is certainly more to learn yet, and I am looking forward to it.
          </p>
          <p align="left" className="flex m-1">
            <span className="m-1">
<a href="https://www.linkedin.com/in/sumit-kumar2702/" target="blank" >
<GrLinkedin style={{width:"30",height:"40",color:"#0092CC"}} /></a>
  </span>
  <span className="m-1">
<a href="https://github.com/sumitjs7979" target="blank">
<FaGithub style={{width:"30",height:"40",color:"#0092CC"}}/></a>
  </span>
  <span className="m-1">
  <a href="https://twitter.com/Sumit61487349" target="blank">
  <FaTwitterSquare style={{width:"30",height:"40",color:"#0092CC"}}/></a>
  </span>
  
</p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Contact Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              My Projects
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"  style={{width:"30%",height:"30%"}}>
          <img
            className="object-cover object-center rounded md:rounded-lg"
           
            alt="sumitpic"
            src="sumit.png"
          />
        </div>
      </div>
    </section>
  );
}