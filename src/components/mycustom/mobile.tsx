"use client"
import { ArrowTopRightIcon } from '@radix-ui/react-icons';
import { Mono_space_700 } from '@/app/layout';
import Link from 'next/link';
import Image from 'next/image';
import chat1 from "../../../public/mobile/back.png"

import Desc from './desc';

const Mobile = () => {
    return (
        <div className="custom-nav-css w-full  rounded-3xl p-10 mt-5 space-mono-regular">
            <div className='flex justify-between items-center'>
                <strong className={` xl:text-4xl md:text-3xl text-white`} >Mobile Chat App</strong>
                <button className=" hover:bg-mauve3 shadow-blackA4 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] outline-none focus:shadow-[0_0_0_2px] focus:shadow-black">
                    Full-Stack (IOS, ANDROID) Developer
                </button>
            </div>
            <div className="flex gap-4 justify-center w-full  mt-6 rounded-xl items-center bg-[url('/mobile/back.png')]  bg-cover bg-no-repeat bg-center ">
            <div className='w-[100%]'>
                    <Image
                        src={chat1}
                        alt="Picture of the author"
                        loading="lazy"
                    />
                </div>

            </div>
            <Desc tech={["React Native (EXPO)", "PHP(LARAVEL)", "MYSQL"]} go='Go to Landing page' go_link='/chat'
                desc="This messaging application is a side project. Its main goal, once completed, 
                will be to compete with hosted messaging platforms like Sendbird. Personally, 
                I find these messaging platforms to be too expensive. Therefore,
                 my aim is to implement this system to help startups integrate a messaging system quickly and affordably. 
                Click on the button to read more about this app, and if you wish, you can test it out." />
        </div>
    );
};

export default Mobile;