import React from 'react'
import SayHiPng from '../assete/say-hi.png';
import Image from 'next/image';
import { Mail } from 'lucide-react';

import whatsappSvg from "../assete/whatsapp-svg.svg";
import { motion } from 'framer-motion';


const SayHi = () => {
    return (
        <motion.div className=' p-2 w-full mt-20  max-w-[425px] mx-auto'
            initial={{ opacity: 0, scale: .7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
        >
            <div className=" rounded-3xl w-full h-full bg-gradient-to-r from-[#03031e] to-[#1f1111] pt-7 pb-4 flex flex-col">
                <div className=" h-64 w-full flex justify-center">
                    <Image src={SayHiPng} alt="" className=" h-64 w-64 contrast-150" />
                </div>
                <div className=" flex flex-col gap-5 px-8 pb-4">
                    <div className=" text-4xl font-semibold bg-gradient-to-r from-[#ff7d37c4] to-[#0000ffbb] w-fit bg-clip-text text-transparent">Say hi!</div>
                    <p className=' text-[#cac9c9]'>
                        Want to create something cool together? Feel free to reach out to me.
                    </p>
                    <div className=" flex gap-8 pt-3">
                        <button className='bg-gradient-to-r cursor-pointer from-[#80ff86c4] to-[#0b4b1be0] w-fit bg-clip-text text-transparent flex gap-1 items-center'
                            onClick={() => {
                                window.open("https://wa.me/9875139782", "_blank");
                            }}
                        >
                            <Image src={whatsappSvg} alt="" className=" h-4 w-4 -mb-[1px] object-contain inline-block " />
                            whatsapp</button>
                        <button className='bg-gradient-to-r from-[#e79654e8] to-[#4747fb] cursor-pointer w-fit bg-clip-text text-transparent flex gap-1 items-center'
                            onClick={() => {
                                window.open("mailto:gaurang8102003@gmail.com", "_blank");
                            }}
                        >
                            <Mail className='h-4 w-4 inline-block text-[#e79654e8]' />
                            hi@gaurang</button>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default SayHi