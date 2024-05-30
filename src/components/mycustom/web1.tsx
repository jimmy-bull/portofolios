"use client"
import React from 'react';
import web1 from "../../../public/web1.png"
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import Image from 'next/image';
import Desc from './desc';
const Web1 = () => {
    return (
        <div className="custom-nav-css w-full space-mono-regular  rounded-3xl p-10 mt-5">
            <div className='flex justify-between items-center'>
                <strong className={` xl:text-4xl md:text-3xl text-white`} >Edusign</strong>
                <button className=" hover:bg-mauve3 shadow-blackA4 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] outline-none focus:shadow-[0_0_0_2px] focus:shadow-black">
                    Full-Stack Web Developer
                </button>
            </div>
            <div className="flex gap-4 justify-center w-full  mt-6 rounded-xl items-center bg-cover bg-no-repeat bg-center ">
                <div className='w-[100%]'>
                    <Image
                        src={web1}
                        alt="Picture of the author"
                        loading="lazy"
                    />
                </div>
            </div>
            <Desc tech={["React (Nextjs)", "Redux", "PHP(LARAVEL)", "MYSQL" ,"STRIPE(PAYMENT SYSTEM)"]} go='Go to Website' go_link='https://edusign.com/fr/'
                desc="Edusign is a dedicated platform whose mission is to make attendance sheet signing easy, fast, 
                and digital. With Edusign, their mission is to make attendance management quick, 
                easy, and digital. Its platforms allow signing in seconds and adapt to all training organizations." />
        </div>
    );
};

export default Web1;