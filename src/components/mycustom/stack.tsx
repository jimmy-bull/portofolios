"use client"
import React, { useEffect, useRef, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage, } from "@/components/ui/avatar"
// import { LinkedInLogoIcon, GitHubLogoIcon, GlobeIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { motion, useAnimate, useScroll } from 'framer-motion'


import { useInView } from "framer-motion"
import { useDispatch } from 'react-redux';
import { set_current_link_index } from '@/app/redux/features/basic';

const Stack = () => {
    const ref = useRef(null)
    const isInView = useInView(ref)
    const dispatch = useDispatch()

    useEffect(() => {
        //  alert("Element is in view: " + isInView)
        if (isInView) {
            dispatch(set_current_link_index(2))
        } else {
            dispatch(set_current_link_index(1))
        }
    }, [isInView])

    const [spanColor, setSpanColor] = useState('white');

    const [scope, animate] = useAnimate()
    const handleHoverStart = () => {
        animate(scope.current, { color: "#000000" }, { duration: 1 })

    };
    const handleHoverEnd = () => {
        animate(scope.current, { color: "#fff" }, { duration: 1 })
    };
    return (
        <>
            <div className="flex gap-2 mt-5 max-[700px]:flex-wrap space-mono-regular">
                <div className="custom-nav-css w-[50%] max-[700px]:w-full  rounded-3xl p-10">
                    <div className="bg-white mt-5 p-4 rounded-3xl flex justify-center">
                        <span className={`font_700 xl:text-xl md:text-sm`}>Front-end Stack</span>
                    </div>
                    <div className="mt-5">
                        <ul className="list-disc">
                            <li className='text-white'>React with Nexjs or without it</li>
                            <li className='text-white'>React Native with expo  or without it</li>
                            <li className='text-white'>Typescript</li>
                            <li className='text-white'>Tailwindcss</li>
                            <li className='text-white'>Vanilla(JS)</li>
                        </ul>
                    </div>
                </div>
                <div className="custom-nav-css w-[50%] max-[700px]:w-full rounded-3xl p-10">
                    <div className="bg-white mt-5 p-4 rounded-3xl flex justify-center">
                        <span className={`font_700 xl:text-xl md:text-sm`}>Back-end Stack</span>
                    </div>
                    <div className="mt-5">
                        <ul className="list-disc">
                            <li className='text-white'>PHP</li>
                            <li className='text-white'>PHP(Laravel)</li>
                            <li className='text-white'>MYSQL</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex flex-row gap-2 mt-5  max-[900px]:flex-wrap space-mono-regular">

                <div className="custom-nav-css w-full rounded-3xl p-10">
                    <div className="flex justify-center">
                        <Avatar className="min-[821px]:h-[200px] min-[821px]:w-[200px] max-[820px]:w-[100px] max-[820px]:h-[100px] ">
                            <AvatarImage src="/logo.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>
                    <div className="flex justify-center">
                        <p className={`font_700 xl:text-5xl md:text-3xl text-white`}>
                            Let Make Dream
                        </p>
                    </div>

                    <div className="flex justify-center mt-2">
                        <p className={`font_700 xl:text-5xl md:text-3xl text-white`}>
                            Come Together
                        </p>
                    </div>
                    <motion.div
                    onHoverStart={handleHoverStart}
                    onHoverEnd={handleHoverEnd}
                    initial={{ background: "rgba(100, 255, 218, 0.3)" }}
                    whileHover={{
                        background: '#fff',
                    }}
                    transition={{
                        background: { duration: .5 }
                    }}
                    className=" min-[821px]:mt-20 max-[820px]:mt-10  p-4 rounded-3xl flex justify-center cursor-pointer">
                    <motion.a href='mailto:jbull635@gmail.com' ref={scope} initial={{ color: spanColor }} className={`font_700 xl:text-xl md:text-3xl`}>jbull635@gmail.com</motion.a>
                </motion.div>
                </div>
            </div>
            <div ref={ref} id={"contact"} className='custom-nav-css mt-10 p-5 rounded-3xl flex justify-between items-center	space-mono-regular'>
                <div>
                    <Link href={"#home"} className='text-white'>Bull Jimmy.</Link>
                </div>
                <div className='flex'>
                    <span className='text-white'>@2024</span>
                </div>
            </div>
        </>

    );
};

export default Stack;