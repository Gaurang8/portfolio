"use client";

import React from "react";
import BBImg from "../assete/chat_Web.png";
import LUImg from "../assete/link-up.png";
import SLImg from "../assete/songly.png";
import UHImg from "../assete/Usability-clone.png";
import Image from "next/image";

import { motion } from "framer-motion";
import { Link } from "lucide-react";

const Experience = () => {
  return (
    <div className=" pt-20 flex gap-5 flex-col  max-w-[425px] mx-auto">
      <div className=" ">
        <h2 className=" text-[#656565] font-semibold uppercase text-[11.5px] tracking-[3px] ">
          PROFESSIONAL EXPERIENCE{" "}
        </h2>
      </div>
      <div className=" flex flex-col gap-8 mt-2">
        <div className=" w-full border-l-2 border-[#ffffff80]">
          <motion.div
            className=" pl-5 relative flex gap-2 flex-col"
            initial={{ opacity: 0, x: 15 }}
            transition={{ duration: 0.5 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className=" text-white text-base font-semibold before-dot-icon before-dot-icon-first">
              Frontend devlopment associate
            </h3>
            <span className=" bg-slate-700 text-white p-1 inline w-fit px-3 font-semibold text-xs rounded-sm">
              July 2023 - Present
            </span>
            <p className=" text-[#a2a2a2] text-sm">
              <span className=" text-blue-500">
                Trakky Techno Services Pvt. Ltd. <br />
              </span>{" "}
              Ahmedabad, Gujarat
            </p>
            <div className="">
              <ul className=" list-disc pl-4 text-sm experience-list">
                <li className=" ">
                  Worked on various modules including user-based, admin-based,
                  and POS systems, developing{" "}
                  responsive components and ensuring
                  performance consistency.
                </li>
                <li>
                  Utilized skills in React, Next.js, CSS, and Tailwind; worked
                  with component libraries like Material UI and packages such as
                  Redux Toolkit, Swiper, and Quill.
                </li>
                <li>
                  Collaborated with backend teams on API integration, ensuring
                  seamless functionality and efficient data management.
                </li>
                <li>
                  Led and mentored new frontend trainees, guiding them through
                  best practices and project requirements.
                </li>
                <li>
                Engaged in agile
                  development practices, delivering high-quality, SEO-friendly
                  code.
                </li>
              </ul>
            </div>
         
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
