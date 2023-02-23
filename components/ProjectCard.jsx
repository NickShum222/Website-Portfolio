"use client";
import { motion } from "framer-motion";
import { slideRight } from "../utils/motion";
import { FiGithub } from "react-icons/fi";
import { BsGlobe } from "react-icons/bs";
import { IconContext } from "react-icons";

const ProjectCard = ({
  id,
  title,
  description,
  tools,
  git,
  url,
  index,
  active,
  setActive,
}) => {
  return (
    // <IconContext.Provider value={{ color: "#BFBFBF", size: "1.5em" }}>
      <motion.div
        variants={slideRight((index * 0.25)+0.25)}
        onClick={() => {
          setActive(id);
        }}
        className={`relative 
         w-full flex flex-col sm:px-10 px-4 justify-center items-center  rounded-lg cursor-pointer `}
      >
        
        <div
          className={`w-[100%] flex flex-row justify-between items-center ${
            active === id ? "border-b-[1px] " : ""
          }`}
        >
          <h3 className={`md:text-[25px] text-[18px] py-4 md:py-6 text-white font-mono font-normal  `}>
            {title}
          </h3>
          <div className="flex flex-row justify-end items-center gap-3 py-4 md:py-6  ">
            <a href={git} target="_blank" className="text-[#F5F5F5] duration-100 hover:text-blue-800 hover:-translate-y-1 ">
              <FiGithub size={"1.5em"} />
            </a>
            <a href={url} target="_blank" className="text-[#F5F5F5] duration-100 hover:text-blue-800 hover:-translate-y-1">
              <BsGlobe size={"1.5em"} />
            </a>
          </div>
        </div>
          

        <div
          className={`overflow-hidden  transition-all duration-300 flex flex-col items-start justify-between ${
            active === id ? "md:h-[175px] lg:h-[250px] sm:h-[250px] h-[200px]" : "h-0"
          } `}
        >
            <p className="text-[#BFBFBF]  font-normal font-mono md:text-[16px] text-[14px] md:leading-6 leading-5  py-2 ">
              {description}
            </p>

          <ul className=" flex flex-row justify-start items-center sm:gap-x-7 gap-x-3 gap-y-2 pb-5 flex-wrap  ">
            {tools.map((tool) => (
              <li className="text-[#B0B0B0] font-mono text-[14px]">{tool}</li>
            ))}
          </ul>
        </div>

        {/* {active === id ? (
          <div className="">
            <div className="border-b-[1px] mx-8 flex flex-row justify-between items-center">
              <h3 className="text-[25px]  text-white font-mono font-normal pt-6 pb-2">
                {title}
              </h3>
              <div className="flex flex-row justify-end items-center gap-3 pt-6 pb-2">
                <a href={git} target="_blank">
                  <FiGithub className="text-[#F5F5F5] " />
                </a>
                <a href={url} target="_blank">
                  <BsGlobe className="text-[#F5F5F5] " />
                </a>
              </div>
            </div>

            <p className=" text-[#BFBFBF] mx-8 font-normal font-mono text-[16px] leading-6 pt-2 ">
              {description}
            </p>
            <ul className="mx-8 flex flex-row justify-start gap-7">
              {tools.map((tool) => (
                <li className="text-white text-mono">{tool}</li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="w-full flex flex-row justify-between items-center">
            <h3 className="text-[25px]  text-white font-mono font-normal py-6 mx-8">
              {title}
            </h3>
            <div className="flex flex-row justify-end items-center gap-3 py-6 mx-8 ">
              <a href={git} target="_blank">
                <FiGithub className="text-[#F5F5F5] " />
              </a>
              <a href={url} target="_blank">
                <BsGlobe className="text-[#F5F5F5] " />
              </a>
            </div>
          </div>
        )} */}
      </motion.div>
    // </IconContext.Provider>
  );
};

export default ProjectCard;
