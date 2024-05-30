"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { HomeIcon, EnvelopeClosedIcon, Pencil1Icon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';
import { useRouter } from 'next/navigation'

// import { useRouter } from 'next/router';
// import { set_current_link_index } from '@/app/redux/features/basic';


import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"


const Nav = () => {
    // const router = useRouter();
    const [links, set_links] = useState([
        {
            text: "home",
            link: "#home",
            icon: <HomeIcon className='text-2xl h-5 w-5 min-[340px]:h-4 min-[340px]:w-4'></HomeIcon>,
            color: "#000"
        },
        {
            text: "goal",
            link: "#goal",
            icon: <Pencil1Icon className='text-2xl h-5 w-5 min-[340px]:h-4 min-[340px]:w-4'></ Pencil1Icon>,
            color: "#000"
        },
        {
            text: "app Feature",
            link: "#feature",
            icon: <EnvelopeClosedIcon className='text-2xl h-5 w-5 min-[340px]:h-4 min-[340px]:w-4'></EnvelopeClosedIcon>,
            color: "#000"
        },
        {
            text: "Video Demo",
            link: "#demo",
            icon: <EnvelopeClosedIcon className='text-2xl h-5 w-5 min-[340px]:h-4 min-[340px]:w-4'></EnvelopeClosedIcon>,
            color: "#000"
        },
        {
            text: "Get the app",
            link: "#get",
            icon: <EnvelopeClosedIcon className='text-2xl h-5 w-5 min-[340px]:h-4 min-[340px]:w-4'></EnvelopeClosedIcon>,
            color: "#000"
        }
    ])

    const router = useRouter();

    const change_color = (key: number) => {
        set_links((prev) =>
            prev.map((data, index) =>
                key === index ? { ...data, color: "#3e66fb" } : { ...data, color: "#000" }
            )
        );
    };

    useEffect(() => {
        const hash = window.location.hash;
        set_links((prev) => {
            return prev.map((data, key) => {
                if (hash === data.link) {
                    return { ...data, color: "#3e66fb" }
                } else {
                    return { ...data, color: "#000" }
                }
            })
        })
    }, [])

    const current_link_index = useSelector((state: RootState) => state.basicusageslice.current_link_index)

    useEffect(() => {
        change_color(current_link_index)
    }, [current_link_index])


    return (
        <nav className='p-5  flex justify-between items-center space-mono-regular bg-white	custom-nav-css_ sticky  z-50 ' style={{ bottom: 0 }}>
            <div>
                <Link href={"#home"} className='text-black'>Bull Jimmy.</Link>
            </div>
            <div className='sm:flex gap-3 hidden'>
                {links.map((data, key) => {
                    return <Link key={key} href={data.link}>
                        <motion.button
                            onClick={() => change_color(key)}
                            initial={{ color: data.color }}
                            animate={{ color: data.color }}
                            whileHover={{ scale: 1.1, }}
                            transition={{
                                color: { duration: 1 },
                                scale: { duration: 0.5 }
                            }}
                        >
                            {data.text}.
                        </motion.button>
                    </Link>
                })}
            </div>

            <div className='flex gap-6 sm:hidden items-center'>
                <Sheet>
                    <SheetTrigger>
                        <div className='text-[#7376E3]'><HamburgerMenuIcon className='text-2xl h-5 w-5 min-[340px]:h-4 min-[340px]:w-4'></HamburgerMenuIcon></div>
                    </SheetTrigger>
                    <SheetContent className='bg-white'>
                        <div className='flex gap-3 flex-col mt-5'>
                            {links.map((data, key) => {
                                return <Link key={key} href={data.link}>
                                    <motion.button
                                        onClick={() => change_color(key)}
                                        initial={{ color: "#7376E3" }}
                                        animate={{ color: data.color }}
                                        whileHover={{ scale: 1.1, }}
                                        className='text-sm'
                                        transition={{
                                            color: { duration: 1 },
                                            scale: { duration: 0.5 }
                                        }}
                                    >
                                        {data.text}.
                                    </motion.button>
                                </Link>
                            })}
                        </div>
                    </SheetContent>
                </Sheet>

            </div>
        </nav>
    );
};

export default Nav;