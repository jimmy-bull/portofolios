"use client"
import React, { useState, useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage, } from "@/components/ui/avatar"
import { motion, useAnimate, useScroll } from 'framer-motion'
const Home_ = () => {
    const [spanColor, setSpanColor] = useState('white');

    const [scope, animate] = useAnimate()
    const handleHoverStart = () => {
        animate(scope.current, { color: "#000000" }, { duration: 1 })

    };
    const handleHoverEnd = () => {
        animate(scope.current, { color: "#fff" }, { duration: 1 })
    };
    useEffect(() => { }, [])

    return (
        <div className="flex flex-row gap-2 mt-10  max-[900px]:flex-wrap">
            <div className="custom-nav-css xl:w-[60%] max-[900px]:w-[100%] rounded-3xl p-10">
                <div className="flex">
                    <Avatar className="h-[80px] w-[80px]">
                        <AvatarImage  src="/me.jpeg" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="bg-white mt-20 p-4 rounded-3xl">
                        <span className={`font_700 xl:text-xl md:text-sm`}> Hello, i&apos;m Bull Jimmy</span>
                    </div>
                </div>

                <div className="mt-5">
                    <p className={`font_700 xl:text-3xl md:text-3xl text-white`}>
                        I specialize in developing mobile and web applications.
                        <span style={{ color: "#848484" }}>I&apos;m currently seeking freelance business assignments or long-term freelance opportunities.</span>
                    </p>
                </div>

            </div>
            <div className="custom-nav-css xl:w-[40%] max-[900px]:w-[100%] rounded-3xl p-10">
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
        </div >
    );
};

export default Home_;