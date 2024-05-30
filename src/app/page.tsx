"use client"
import React, { useRef, useState, useEffect } from 'react';
import { LinkedInLogoIcon, GitHubLogoIcon, GlobeIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import Home_ from "@/components/mycustom/home";
import Globe from "@/components/globe";
import { useInView } from "framer-motion"
import { useDispatch } from 'react-redux';
import { set_current_link_index } from '@/app/redux/features/basic';
import { motion } from 'framer-motion'
import Nav from '@/components/nav';
import Web1 from "@/components/mycustom/web1";
import Web2 from "@/components/mycustom/web2";
import Web3 from "@/components/mycustom/web3";
import Stack from "@/components/mycustom/stack";
import Mobile from "@/components/mycustom/mobile";

export default function Home() {
    const ref = useRef(null)
    const isInView = useInView(ref)
    const dispatch = useDispatch()

    useEffect(() => {
        //  alert("Element is in view: " + isInView)
        if (isInView) {
            dispatch(set_current_link_index(0))
        }
    }, [isInView])

    return (
        <div className="pl-[5%] pr-[5%]" style={{  backgroundColor: "#000000"}}>
            <Nav></Nav>
            <Home_ />
            <div className="mt-5 flex flex-row gap-3 justify-center max-[830px]:flex-wrap" ref={ref} id={'home'}>
                <motion.div className='cursor-pointer' whileHover={{ scale: 1.1 }} transition={{ ease: "easeOut", duration: .5 }}>
                    <Link target='_blank' href={"https://www.linkedin.com/in/bullyj/"} className="custom-nav-css  p-4 rounded-3xl flex items-center gap-2 ">
                        <p className="text-white"> <LinkedInLogoIcon className='text-2xl h-5 w-5 min-[340px]:h-4 min-[340px]:w-4'></LinkedInLogoIcon></p>
                        <p className={`font_700 xl:text-xl md:text-sm text-white`}>
                            Linkedin
                        </p>
                    </Link>

                </motion.div>
                <motion.div className='cursor-pointer' whileHover={{ scale: 1.1 }} transition={{ ease: "easeOut", duration: .5 }}>
                    <Link href={"https://github.com/jimmy-bull"} target='_blank' className="custom-nav-css  p-4 rounded-3xl flex items-center gap-2 ">
                        <p className="text-white"> <GitHubLogoIcon className='text-2xl h-5 w-5 min-[340px]:h-4 min-[340px]:w-4'></GitHubLogoIcon></p>
                        <p className={`font_700 xl:text-xl md:text-sm text-white`}>
                            Github
                        </p>
                    </Link>
                </motion.div>
                <motion.div className='cursor-pointer' whileHover={{ scale: 1.1 }} transition={{ ease: "easeOut", duration: .5 }}>
                    <Link target='_blank' href={"https://fr.fiverr.com/bulljimmy"} className="custom-nav-css  p-4 rounded-3xl flex items-center gap-2 ">
                        <p className={`font_700 xl:text-xl md:text-sm text-white`}>
                            Fiverr
                        </p>
                    </Link>
                </motion.div>
                <motion.div className='cursor-pointer' whileHover={{ scale: 1.1 }} transition={{ ease: "easeOut", duration: .5 }}>
                    <Link target='_blank' href={"https://www.upwork.com/freelancers/~01d1356a6558cd5a4c"} className="custom-nav-css  p-4 rounded-3xl flex items-center gap-2 ">
                        <p className={`font_700 xl:text-xl md:text-sm text-white`}>
                            Upwork
                        </p>
                    </Link>
                </motion.div>
                <motion.div className='cursor-pointer' whileHover={{ scale: 1.1 }} transition={{ ease: "easeOut", duration: .5 }}>
                    <Link target='_blank' href={"https://www.malt.fr/profile/bulljimmy"} className="custom-nav-css  p-4 rounded-3xl flex items-center gap-2 ">
                        <p className={`font_700 xl:text-xl md:text-sm text-white`}>
                            Malt
                        </p>
                    </Link>
                </motion.div>
            </div>
            <div className="flex flex-row gap-2 mt-5  max-[1000px]:flex-wrap">
                <div className="custom-nav-css xl:w-[40%] max-[1000px]:w-[100%] rounded-3xl p-10 xl:items-start items-center justify-center flex flex-col">
                    <Globe></Globe>
                    <div className="md:mt-20 mt-10">
                        <p className={`font_700 xl:text-5xl md:text-5xl text-white md:w-[300px]`}>
                            Based in France, Caen
                        </p>
                    </div>
                </div>
                <div className="custom-nav-css xl:w-[60%] max-[1000px]:w-[100%] rounded-3xl p-10">
                    <div className="mt-5">
                        <p className={`font_700 xl:text-3xl md:text-3xl text-white`}>
                            I specialize in developing mobile apps with React Native (Expo) and web apps with React (Next.js).
                            <span style={{ color: "#848484" }}>
                                For the backend, I use Laravel (PHP). I've been freelancing for two years and have been passionate about computers since childhood.
                                I'm motivated and ready to work on new projects. With a keen eye for detail and a commitment to delivering quality,
                                I'm excited to bring your ideas to life. Let's create something amazing together!
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <Web2 />
            <Mobile />
            <Web1 />
            <Web3 />
            <Stack />
        </div>

    );
}
