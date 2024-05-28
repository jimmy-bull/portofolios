"use client"
import React, { useRef, useState, useEffect } from 'react';
import web2 from "../../../public/web2.png"
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import Image from 'next/image';
import Desc from './desc';
import { useInView } from "framer-motion"
import { useDispatch } from 'react-redux';
import { set_current_link_index } from '@/app/redux/features/basic';
const Web1 = () => {
    const ref = useRef(null)
    const isInView = useInView(ref)
    const dispatch = useDispatch()

    useEffect(() => {
        if (isInView) {
            dispatch(set_current_link_index(1))
        }
    }, [isInView])

    return (
        <div ref={ref} className="custom-nav-css w-full  rounded-3xl p-10 mt-5" id={'project'}>
            <div className='flex justify-between items-center'>
                <strong className={` xl:text-4xl md:text-3xl text-white`} >Inverstiraupays</strong>
                <button className=" hover:bg-mauve3 shadow-blackA4 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] outline-none focus:shadow-[0_0_0_2px] focus:shadow-black">
                    Full-Stack Web Developer
                </button>
            </div>
            <div className="flex gap-4 justify-center w-full  mt-6 rounded-xl items-center bg-cover bg-no-repeat bg-center ">
                <div className='w-[100%]'>
                    <Image
                        src={web2}
                        alt="Picture of the author"
                        loading="lazy"
                    />
                </div>
            </div>
            <Desc tech={["React", "PHP(LARAVEL)", "STRIPE(PAYMENT SYSTEM)", "VANILLA CSS", "MYSQL"]}
                go='Go to Website' go_link='https://investiraupays.com/'
                desc="Investir au Pays offers training and coaching to help entrepreneurs start successfully.
                Conferences are also organized to explore investment in Africa.
                The digitalization service helps increase online visibility.
                The company's goal is to support entrepreneurs in their success in Africa." />
        </div>
    );
};

export default Web1;