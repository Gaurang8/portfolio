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
              Software Engineer
            </h3>
            <span className=" bg-slate-700 text-white p-1 inline w-fit px-3 font-semibold text-xs rounded-sm">
              Jan 2025 - Present
            </span>
            <p className=" text-[#a2a2a2] text-sm">
              <span className=" text-blue-500">
                DRC Systems India Ltd <br />
              </span>{" "}
              Gandhinagar, Gujarat
            </p>
            <div className="">
              <ul className=" list-disc pl-4 text-sm experience-list">
                <li className=" ">
                  Developed frontend features for a high-availability e-learning platform using React and TypeScript, delivering scalable and responsive user interfaces for 100,000+ active users.
                </li>
                <li>
                  Built reusable UI components, integrated REST APIs, and contributed to Docker-based deployment and development workflows.
                </li>
                <li>
                  Contributed to the development of a Learning Experience Platform (LXP) on Open edX, implementing advanced MFE-based course authoring and ReBAC for access control.
                </li>
                <li>
                  Implemented an in-browser code editor by integrating Judge0 API and Monaco Editor, enabling real-time coding assessments within the platform.
                </li>
                <li>
                  Improved code quality by resolving SonarQube issues, fixing security warnings, and following scalable frontend practices.
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            className=" pl-5 relative flex gap-2 mt-10 flex-col"
            initial={{ opacity: 0, x: 15 }}
            transition={{ duration: 0.5 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className=" text-white text-base font-semibold before-dot-icon">
              Full Stack Web Development Associate
            </h3>
            <span className=" bg-slate-700 text-white p-1 inline w-fit px-3 font-semibold text-xs rounded-sm">
              July 2023 - Dec 2024
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
                  Worked on various modules including user-based, admin-based, and POS systems, developing responsive components and ensuring performance consistency.
                </li>
                <li>
                  Utilized skills in React.js, Next.js, CSS, and Tailwind; worked with component libraries like Material UI and packages such as Redux Toolkit, Swiper, and Quill.
                </li>
                <li>
                  Collaborated with backend teams on API integration, ensuring seamless functionality and efficient data management.
                </li>
                <li>
                  Engaged in agile development practices, delivering high-quality, SEO-friendly code.
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
