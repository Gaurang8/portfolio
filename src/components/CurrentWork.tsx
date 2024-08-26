"use client";

import React from 'react';
import BBImg from "../assete/chat_Web.png";
import LUImg from "../assete/link-up.png";
import SLImg from "../assete/songly.png";
import UHImg from "../assete/Usability-clone.png";
import Image from 'next/image';

import { motion } from 'framer-motion';
import { Link } from 'lucide-react';


const data = [
    {
        title: 'BlabBurst - chat application',
        description: 'BlabBurst is a chat application that allows users to chat in real time. ',
        image: BBImg,
        directLink : "https://github.com/Gaurang8/BlabBurst"
    },
    {
        title: 'Link-up - social web app',
        description: 'Link-up is a social web app that allows users to connect with each other. ',
        image: LUImg,
        directLink : "https://github.com/Gaurang8/LinkUp-Social-media-webapp-mern"
    },
    {
        title: 'Songly - music app',
        description: 'Songly is a music application that allows users to listen and dwonload ringtone.',
        image: SLImg,
        directLink : "https://github.com/Gaurang8/songly"
    },
    {
        title: 'usability.hub - UI clone',
        description: 'usability.hub is a UI clone of a popular website.',
        image: UHImg,
        directLink : "https://github.com/Gaurang8/clone_usability.hub"
    }
]

const CurrentWork = () => {
    return (
        <div className=' pt-20 flex gap-5 flex-col'>
            <div className=" ">
                <h2 className=' text-[#656565] font-semibold uppercase text-[11.5px] tracking-[3px] '>Current work</h2>
            </div>
            <div className=" flex flex-col gap-8">
                {
                    data.map((item, index) => (
                        <motion.div className=" flex gap-[10px]" key={index}
                            initial={{ opacity: 0, y: 15 }}
                            transition={{ delay: .5 + index * .05 }}
                            whileInView={{ opacity: 1, y: 0 }}  
                            viewport={{once: true}}
                        >
                            <div className=" w-20 h-20 grow-0 shrink-0 rounded-xl bg-[#2e2e2e] contrast-125 ">
                                <Image src={item.image} alt="" className=" w-full h-full rounded-xl" />
                            </div>
                            <div className=" grow shrink flex gap-2 py-1 flex-col">
                                <h3 className=' font-medium text-white text-sm'>
                                    {item.title} <span>
                                        <Link  className=' h-3 cursor-pointer w-3 ml-1 inline-block text-white'
                                            onClick={() => {
                                                window.open(item.directLink, "_blank");
                                            }
                                            }
                                        />

                                    </span>
                                </h3>
                                <p className='text-[#777] text-[13px] w-[90%] line-clamp-2'>
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))
                }
            </div>
        </div>
    )
}

export default CurrentWork