"use client"
import React from 'react';
import web4 from "../../../public/web4.png"
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import Image from 'next/image';

const Web4 = () => {
    return (
        <div className="custom-nav-css w-full  rounded-3xl p-10 mt-5">
            <div className='flex justify-between items-center'>
                <strong className={` xl:text-4xl md:text-3xl text-white`} >E-Commerce Template</strong>
                <AlertDialog.Root>
                    <AlertDialog.Trigger asChild>
                        <button className=" hover:bg-mauve3 shadow-blackA4 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] outline-none focus:shadow-[0_0_0_2px] focus:shadow-black">
                            View Description
                        </button>
                    </AlertDialog.Trigger>
                    <AlertDialog.Portal>
                        <AlertDialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
                        <AlertDialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                            <AlertDialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
                                Project Description
                            </AlertDialog.Title>
                            <AlertDialog.Description className="text-mauve11 mt-4 mb-5 text-[15px] leading-normal">
                                This action cannot be undone. This will permanently delete your account and remove your
                                data from our servers.
                            </AlertDialog.Description>
                            <div className="flex justify-end gap-[25px]">
                                <AlertDialog.Cancel asChild>
                                    <button className="text-mauve11 bg-mauve4 hover:bg-mauve5 focus:shadow-mauve7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
                                        Cancel
                                    </button>
                                </AlertDialog.Cancel>
                                <AlertDialog.Action asChild>
                                    <button className="text-red11 bg-red4 hover:bg-red5 focus:shadow-red7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
                                        Yes, delete account
                                    </button>
                                </AlertDialog.Action>
                            </div>
                        </AlertDialog.Content>
                    </AlertDialog.Portal>
                </AlertDialog.Root>
            </div>
            <div className="flex gap-4 justify-center w-full  mt-6 rounded-xl items-center bg-cover bg-no-repeat bg-center ">
                <div className='w-[100%]'>
                    <Image
                        src={web4}
                        alt="Picture of the author"
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
    );
};

export default Web4;