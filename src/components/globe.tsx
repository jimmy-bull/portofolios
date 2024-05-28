"use client"
import React from 'react';
import { motion, useAnimate, } from 'framer-motion'
import { GlobeIcon } from '@radix-ui/react-icons';

const Globe = () => {
    return (
    
            <motion.div
                transition={{ ease: "linear", duration: 2, repeat: Infinity }}
                animate={{ rotate: 360 }}
                className="flex justify-start"
            >
                <motion.p className="text-white"> <GlobeIcon className='h-40 w-40 max-[340px]:h-4 max-[340px]:w-4'></GlobeIcon></motion.p>
            </motion.div>

    );
};

export default Globe;