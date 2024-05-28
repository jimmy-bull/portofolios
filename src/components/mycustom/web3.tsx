"use client"
import React from 'react';
import web3 from "../../../public/web3.png"
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import Image from 'next/image';
import Desc from './desc';

const Web3 = () => {
    return (
        <div className="custom-nav-css w-full  rounded-3xl p-10 mt-5">
            <div className='flex justify-between items-center'>
                <strong className={` xl:text-4xl md:text-3xl text-white`} >E-Commerce Template</strong>
                <button className=" hover:bg-mauve3 shadow-blackA4 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] outline-none focus:shadow-[0_0_0_2px] focus:shadow-black">
                    Full-Stack Web Developer
                </button>
            </div>
            <div className="flex gap-4 justify-center w-full  mt-6 rounded-xl items-center bg-cover bg-no-repeat bg-center ">
                <div className='w-[100%]'>
                    <Image
                        src={web3}
                        alt="Picture of the author"
                        loading="lazy"
                    />
                </div>
            </div>
            <Desc tech={["JQUERY", "JAVASCRIPT", "BOOTSTRAP", "CSS"]} go='Go to Website' go_link='https://kusheyy.netlify.app/'
                desc="This theme is designed for businesses that want to sell sporting goods or other items in the fashion category.
                 it is made up of 29 different layouts with latest generation functionalities relating to online sales. 
                 Simple and pretty, this theme is made for you." />
        </div>
    );
};

export default Web3;