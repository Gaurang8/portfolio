"use client";

import React from 'react';
import BBImg from "../assete/chat_Web.png";
import LUImg from "../assete/link-up.png";
import SLImg from "../assete/songly.png";
import UHImg from "../assete/Usability-clone.png";
import Image from 'next/image';

import { motion } from 'framer-motion';

const Educations = () => {
    return (
        <div className=' pt-20 flex gap-5 flex-col  max-w-[425px] mx-auto'>
            <div className=" ">
                <h2 className=' text-[#656565] font-semibold uppercase text-[11.5px] tracking-[3px] '>Education </h2>
            </div>
            <div className=" flex flex-col gap-8 mt-2">
                <div className=" w-full border-l-2 border-[#ffffff80]">
                    <motion.div className=" pl-5 relative flex gap-2 flex-col"
                        initial={{ opacity: 0, x: 15 }}
                        transition={{ duration: .5 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className=' text-white text-base font-semibold before-dot-icon before-dot-icon-first'>
                            Information and Technology (B.Tech)
                        </h3>
                        <span className=' bg-slate-700 text-white p-1 inline w-fit px-3 font-semibold text-xs rounded-sm'>
                            2021 - 2025
                        </span>
                        <p className=' text-[#a2a2a2] text-sm'>
                            <span className=' text-blue-500'> LJ University,</span> Ahmedabad, Gujarat
                        </p>
                        <div className="">
                            <ul className=' list-disc pl-4 text-sm experience-list'>
                                <li className=' '>
                                Throughout my journey, I have learned various programming languages like C, Python, JavaScript, and Java, as well as core subjects like DBMS, Computer Networks, and others. Additionally, I had the opportunity to do a full-time internship, thanks to my knowledge of development technologies like React and Node.js.
                                </li>
                               
                            </ul>
                        </div>
                        <div className=" text-sm mt-1">
                            <span className=' text-sm text-blue-500 font-semibold'>CGPA : </span> 9.03 <span className=' text-[11px] text-[#a2a2a2]'>( Till 4<sup>th</sup> Sem )</span>
                        </div>
                    </motion.div>
                    <motion.div className=" pl-5 relative flex gap-2 mt-10 flex-col"
                        initial={{ opacity: 0, x: 20 }}
                        transition={{ duration: .5 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className=' text-white text-base font-semibold before-dot-icon'>
                            Higher Secondary School
                        </h3>
                        <span className=' bg-slate-700 text-white p-1 inline w-fit px-3 font-semibold text-xs rounded-sm'>
                            2019 - 2021
                        </span>
                        <p className=' text-[#a2a2a2] text-sm'>
                            <span className=' text-blue-500'> JNV, </span>Bhavnagar, Gujarat
                        </p>

                        <div className=" text-sm mt-1">
                            <span className=' text-sm text-blue-500 font-semibold'>Percentage : </span> 92.6%
                        </div>
                    </motion.div>
                    <motion.div className=" pl-5 relative flex gap-2 mt-10 flex-col"
                        initial={{ opacity: 0, x: 25 }}
                        transition={{ duration: .5 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className=' text-white text-base font-semibold before-dot-icon'>
                            Secondary School
                        </h3>
                        <span className=' bg-slate-700 text-white p-1 inline w-fit px-3 font-semibold text-xs rounded-sm'>
                            2019
                        </span>
                        <p className=' text-[#a2a2a2] text-sm'>
                            <span className=' text-blue-500'> JNV, </span>Bhavnagar, Gujarat
                        </p>

                        <div className=" text-sm mt-1">
                            <span className=' text-sm text-blue-500 font-semibold'>Percentage : </span> 89.6%
                        </div>
                        </motion.div>
                </div>

            </div>
        </div>
    )
}

export default Educations;