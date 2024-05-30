import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
interface props {
    tech: string[]
    desc: string
    go: string,
    go_link: string
}
import { motion, useAnimate, } from 'framer-motion'
import { LetterSpacingIcon } from '@radix-ui/react-icons';


const Desc = ({ tech, desc, go, go_link }: props) => {
    const [scope, animate] = useAnimate()
    const handleHoverStart = async () => {
        animate(scope.current, { color: "#fff" }, { duration: 1 })
    };
    const handleHoverEnd = () => {
        animate(scope.current, { color: "#000000" }, { duration: 1 })
    };
    return (
        <div className='flex justify-center mt-5  flex-col items-center'>
            <strong className={`xl:text-4xl md:text-3xl text-white`} >Description</strong>
            <p className='mt-5 text-white'>{desc}</p>
            <strong className={`xl:text-4xl md:text-3xl text-white mt-5`}>Tech Used</strong>
            <div className="mt-5 flex flex-row gap-2 justify-center max-[830px]:flex-wrap">
                {tech.map((data, key) => {
                    return <span key={key} style={{ background: "rgba(100, 255, 218, 0.3)" }} className=" p-4 rounded-3xl flex items-center gap-2 ">
                        <p className={`xl:text-xl md:text-sm text-white`}>
                            {data}
                        </p>
                    </span>
                })}
            </div>
            <motion.div whileHover={{
                background: 'rgba(100, 255, 218, 0.3)',
                scale: 1.1
            }}
                transition={{
                    background: { duration: 1 }
                }} initial={{ background: "#fff" }}
                className={"mt-5 hover:bg-mauve3 shadow-blackA4 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"}
                onHoverStart={handleHoverStart}
                onHoverEnd={handleHoverEnd}
            >
                <Link href={go_link} target='_blank'
                >
                    <motion.span ref={scope} initial={{ color: "#ff" }}> {go}</motion.span>
                </Link>
            </motion.div>
        </div>
    );
};

export default Desc;