"use client";

import React, { createContext } from 'react';
import { Dot, FileText, Github, Instagram, Linkedin, Menu, User } from "lucide-react";
import bgImage from "../assete/oQ65CY9Qk1W3v2c4ykiPXXB3og.png";
import personImg from "../assete/person.jpg";
import CurrentWork from "@/components/CurrentWork";
import SayHi from "@/components/SayHi";
import { motion } from "framer-motion";
import Educations from '@/components/Education';
import Experience from '@/components/Experience';
import Skill from '@/components/Skill';

const metadata = {
  title: "Gaurang Khambhaliya",
  description: "Hardworking and reliable web devloper with strong ability in Front-end devlopment. Highly organized, proactive and punctual with team-oriented mentality.",
};


export default function Home() {
  return (
    <div className="  h-full w-full relative p-4">
      <div className=" absolute top-0 left-0 h-[550px] w-full">
        <img src={bgImage.src} alt="" className=" h-full w-full object-cover" />
      </div>
      <div className=" h-12 w-full rounded-lg bg-[#1b163c78] brightness-75 flex justify-between items-center p-3  max-w-[425px] mx-auto ">
        <div className=" ml-4">
          <Dot className=" h-6 w-6 scale-[2] text-white" />
        </div>
        <div className=" px-1 flex gap-4">
          <Github className=" h-4 w-4 text-white font-light cursor-pointer" 
            onClick={() => {
              window.open("https://github.com/Gaurang8" , "_blank");
            }}
            />
          <Instagram className=" h-4 w-4 text-white cursor-pointer" 
            onClick={() => {
              window.open("https://www.instagram.com/_gaurang.patel_/?igsh=NXNhNm9qMnFqZDl5" , "_blank");
            }
            }
          />
          <Linkedin className=" h-4 w-4 text-white cursor-pointer" 
            onClick={() => {
              window.open("https://www.linkedin.com/in/gaurang-khambhaliya-2a4190167/?originalSubdomain=in" , "_blank");
            }}
            />
          {/* <Menu className=" h-4 w-4 text-white" /> */}
          {/* resume icon */}
          <FileText className=" h-4 w-4 text-white cursor-pointer" 
            onClick={() => {
              window.open("https://drive.google.com/file/d/1O8k20p1VTzOKL9da0n7oquapuaFVrzFE/view?usp=drive_link" , "_blank");
            }
            }
          />
        </div>
      </div>
      <div className=" flex flex-col gap-5 mt-16  max-w-[425px] mx-auto">
        <div className=" flex gap-4 items-center">
          <div className=" h-20 w-20 rounded-full shrink-0 relative">
            <div className=" absolute h-[84px] w-[1px] left-1/2 -top-[84px] -translate-x-1/2 bg-white "></div>
            <img src={personImg.src} alt="" className=" h-full w-full rounded-full contrast-125" />
          </div>
          <div className=" flex flex-col">
            <div className=" font-semibold text-white text-lg">Gaurang Khambhaliya</div>
            <div className=" text-[15px] text-gray-700 font-semibold">Full stack web devloper</div>
          </div>
        </div>
        <div className=" text-white font-light">
          Hardworking and reliable web devloper with strong ability in Front-end devlopment.
          Highly organized, proactive and punctual with team-oriented mentality.
        </div>
        <motion.div className=" text-gray-700 text-sm font-medium"
          initial={{ opacity: 0 , x : -20}}
          animate={{ opacity: 1 , x : 0}}
          transition={{ duration: .3 }}
        >
          Full stack web devloper <span className=" bg-gradient-to-r from-[#00b4ff] via-[#d319ff] to-[#ff0000cf] bg-clip-text"
            style={{
              WebkitTextFillColor: "transparent",
            }}
          >@trakkyservices</span>
        </motion.div>
      </div>

      <CurrentWork />

      <Experience />

      <Skill />

      <Educations />

      <SayHi />

      <div className=" w-full h-[200px] relative flex justify-end pb-10 items-center flex-col gap-2 -z-10 ">
        <div className=" absolute bottom-0 left-0 h-[450px] w-[calc(100%+30px)] -mx-[15px] opacity-60">
          <img src={bgImage.src} alt="" className=" rotate-180 h-full w-full object-cover" />
        </div>

        <div className=" text-xs opacity-50 text-gray-400  max-w-[425px] mx-auto">
          Made by <span className=" text-[#00b4ff] font-semibold text-xs">Gaurang Khambhaliya</span>
        </div>
      </div>
    </div>
  );
}
