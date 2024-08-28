"use client";

import React from 'react';

import { motion } from 'framer-motion';

// Programming Languages: C, C++, JavaScript , Python
// Frontend Development: HTML, CSS, ReactJs, NextJs, Tailwind, Material UI, Redux toolkit
// Backend Development & Database: NodeJs, ExpressJs, MongoDB
// Development Tools: Git, Github, Visual Studio Code
// Computer Science Fundamentals: REST API, OOPS, DSA, Problem Solving

const skillsData = [
    {
        title: 'Frontend',
        skills: ['HTML', 'CSS', 'ReactJs', 'NextJs', 'Tailwind CSS', 'Material UI', 'Redux toolkit']
    },
    {
        title: 'Backend & Database',
        skills: ['NodeJs', 'ExpressJs', 'MongoDB']
    },
    {
        title: 'Programming Languages',
        skills: ['C', 'C++', 'JavaScript', 'Python']
    },
    {
        title: 'Development Tools',
        skills: ['Git', 'Github', 'Visual Studio Code']
    },
    {
        title: 'Computer Science Fundamentals',
        skills: ['REST API', 'OOPS', 'DSA', 'Problem Solving']
    }
]

const highlightedSkills = ['ReactJs', 'NextJs', 'Tailwind CSS', 'JavaScript', 'REST API','Github']
const borderColors = ['border-rose-500', 'border-blue-500', 'border-green-500', 'border-yellow-500', 'border-indigo-500']

const Work = () => {
    return (
        <div className=' pt-20 flex gap-5 flex-col  max-w-[425px] mx-auto'>
            <div className=" ">
                <h2 className=' text-[#656565] font-semibold uppercase text-[11.5px] tracking-[3px] '>
                    What I Know
                </h2>
            </div>
            <div className=" flex flex-col gap-8">
                {
                    skillsData.map((skill, index) => (
                        <div className=" w-full" key={index}>
                            <div className=" flex gap-3 flex-col"
                            >
                                <motion.h3 className=' text-white text-[15px] font-normal'
                                    initial={{ opacity: 0, x: 15 }}
                                    transition={{ duration: .5 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                >
                                    {skill.title}
                                </motion.h3>
                                <div className=" flex flex-wrap gap-2">
                                    {
                                        skill.skills.map((skill, index) => {
                                            
                                            let colorIndex = index % 5;
                                            let borderColor = borderColors[colorIndex];
                                            console.log(skill , index , colorIndex , highlightedSkills.includes(skill) ,borderColors[colorIndex])
                                            return(
                                            <span className={`text-white p-1 inline w-fit px-3 font-light text-[13px] rounded-md border ${
                                                highlightedSkills.includes(skill) ? `${borderColor}` : 'border-[#ffffff50]'
                                            }`} key={index}>
                                                {skill}
                                            </span>
                                        )})
                                    }
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Work;