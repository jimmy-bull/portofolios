"use client"
import React, { useRef, useState, useEffect } from 'react';
import './style.css'
import Nav from './nav';
import chat1 from "../../../public/mobile/1.png"
import chat2 from "../../../public/mobile/2.png"
import chat3 from "../../../public/mobile/3.png"
import money from "../../../public/money.png"
import data from "../../../public/data.png"
import Image from 'next/image';
import { Component } from '@/components/component';
import { LinkedInLogoIcon, EnvelopeClosedIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { motion, useAnimate, } from 'framer-motion'
import { useInView } from "framer-motion"
import { useDispatch } from 'react-redux';
import { set_current_link_index } from '../redux/features/basic';


const Page = () => {
  // const [scope, animate] = useAnimate()
  // const handleHoverStart = async () => {
  //     animate(scope.current, { color: "#fff" }, { duration: 1 })
  // };
  // const handleHoverEnd = () => {
  //     animate(scope.current, { color: "#000000" }, { duration: 1 })
  // };
  const homeref = useRef(null)
  const ishomeInView = useInView(homeref)

  const goalref = useRef(null)
  const isgoalInView = useInView(goalref)


  const featureref = useRef(null)
  const isgfeatureInView = useInView(featureref)

  const demoref = useRef(null)
  const isgdemoInView = useInView(demoref)

  const getref = useRef(null)
  const isgetInView = useInView(getref)

  const dispatch = useDispatch()
  useEffect(() => {
    if (ishomeInView) {
      dispatch(set_current_link_index(0))
    }
    if (isgoalInView) {
      dispatch(set_current_link_index(1))
    }

    if (isgfeatureInView) {
      dispatch(set_current_link_index(2))
    }
    if (isgdemoInView) {
      dispatch(set_current_link_index(3))
    }
    if (isgetInView) {
      dispatch(set_current_link_index(4))
    }
  }, [ishomeInView, isgfeatureInView, isgoalInView, isgdemoInView, isgetInView])


  return (
    <div className='flex  flex-col min-h-screen space-mono-regular'>
      <div className='_body  w-full' >
        {/* home */}
        <div id={"home"} ref={homeref} className=' pl-[5%] pr-[5%]'>
          <div className='flex justify-center flex-col items-center'>
            <motion.h1
              className='xl:mt-[120px] mt-20 xl:text-7xl text-3xl  font_700 text-center text-white leading-10 typewriter'>
              Welcome to my chat demo Application.
            </motion.h1>
            <h4 className='mt-10 text-center xl:text-2xl text-xl text-white xl:w-[50%] w-[100%] leading-10'>I am developing this <span style={{ color: "#7376E3" }}>React native</span> cross-platform messaging application to
              compete with platforms like <span style={{ color: "#7376E3" }}> Sendbird.</span></h4>
          </div>
          <Link href={"#get"} className='mt-10 flex justify-center'>
            <motion.button whileHover={{
              background: '#7376E3',
              color: "white",
              scale: 1.1
            }}
              transition={{
                background: { duration: .2 }
              }} initial={{ background: "#fff", color: "#7376E3" }}
              className=' p-4 rounded-3xl text-xl  '>Test The Demo App</motion.button>
          </Link>
          <div className="flex gap-4 justify-center w-full  mt-10 rounded-xl items-center   bg-cover bg-no-repeat bg-center  ">
            <div className='md:w-[30%] sm:w-45%'>

              <motion.div initial={{ scale: 1 }}
                animate={{ scale: 1 }}
                transition={{
                  scale: { duration: .2, delay: 0 }
                }}>
                <Image
                  src={chat3}
                  alt="Picture of the author"
                  loading="lazy"
                  placeholder='blur'
                />
              </motion.div>

            </div>
            <div className='md:w-[30%] block max-[1200px]:hidden sm:w-45%'>
              <motion.div initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{
                  scale: { duration: .1, }
                }}>
                <Image
                  src={chat1}
                  alt="Picture of the author"
                  loading="lazy"
                  placeholder='blur'
                />
              </motion.div>
            </div>
            <div className='md:w-[30%] sm:w-45%'>
              <motion.div initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{
                  scale: { duration: .2, delay: .2 }
                }}>
                <Image
                  src={chat2}
                  alt="Picture of the author"
                  loading="lazy"
                  placeholder='blur'
                />
              </motion.div>
            </div>

          </div>

        </div>
        {/* goal */}
        <div id={"goal"} ref={goalref} className='mt-10  flex justify-center flex-col'>
          <h3 className='text-center text-3xl font_700 ' style={{ color: "#7376E3" }}>Why am I working on this application?</h3>
          <div className='xl:w-[80%] w-full justify-center  self-center'>
            <p className='mt-5 text-center leading-20 text-[#c4c4c4] '>This messaging application is a side project. Its main goal, once completed, will be to compete with hosted messaging platforms like Sendbird. Personally, I find these messaging platforms to be too expensive. Therefore, my aim is to implement this system to help startups integrate a messaging system quickly and affordably. Click on the button to read more about this app, and if you wish, you can test it out
              by sending a text message on Gmail Or Linked down below.</p>
          </div>

          <div className='mt-10 flex gap-3 justify-center  flex-wrap' >
            <div className='bg-white xl:w-[45%] md:w-full  rounded-xl p-4 ' style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}>
              <Image
                src={money}
                alt="Picture of the author"
                loading="lazy"
                className='mt-5'
              />
              <h3 className='font_700 text-xl text-[#7376E3] mt-3 '>Cost Reduction.</h3>

              <p className='mt-5 text-center leading-20 text-[#c4c4c4]'>When considering a communication solution for your application, cost-efficiency and scalability are key factors. Sendbird, a popular option, charges $499 per month to support 500 users connected simultaneously.
                In contrast, the application I'm developing offers a much more economical solution.
                For just $300 per month, I am designing it to handle 18,000 users connected at the same time. This means the service will not only offer a lower monthly cost but also support significantly more users, making it an ideal choice for businesses looking to scale their user base without incurring prohibitive expenses. Choose the application I'm developing for a cost-effective and scalable communication solution.</p>
            </div>
            <div className='xl:w-[45%] md:w-full flex-wrap rounded-xl p-4' style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px", backgroundImage: "linear-gradient(to bottom, #ffffff, #dbd6ff, #b4affe, #8589fd, #3e66fb)" }}>
              <Image
                src={data}
                alt="Picture of the author"
                loading="lazy"
                className='mt-5'
              />
              <h3 className='font_700 text-xl text-white mt-3 '>Full Data Controll</h3>

              <p className='mt-5 text-center leading-20 text-white'>The messaging app grants full data access, storing the database on your server. Take control of the socket server, tailor it to your needs. Scale your server as you see fit, ensuring seamless communication. Experience empowerment in every message, with total control at your fingertips.</p>
            </div>
          </div>
        </div>
        {/* feature */}
        <div id={"feature"} ref={featureref} className='mt-20 flex justify-center flex-col bg-[#f8f9f8] p-4'>
          <div className='flex gap-3 justify-center  flex-wrap' >
            <div className=' xl:w-[45%] md:w-full  rounded-xl p-4 ' >
              <h3 className='font_700 xl:text-7xl text-center text-2xl text-[#7376E3] mt-3 '> What you can do now with this app.</h3>

              <div className='p-4 mt-10 rounded-xl' style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }} >
                <p className=' text-center leading-20  leading-loose'>
                  The app allows you to <span className='text-[#7376E3]'>send and receive messages</span>, including text, audio, and video.
                  You can take photos and videos directly from the phone file system or use the camera to record videos or take photos.
                  With private channel messaging, you can securely <span className='text-[#7376E3]'>delete messages and scroll to specific response messages</span>.
                  You can see the <span className='text-[#7376E3]'>sent</span>, <span className='text-[#7376E3]'>received</span>,
                  and <span className='text-[#7376E3]'>read status</span> of your messages,
                  <span className='text-[#7376E3]'>respond</span> to specific messages, and check if <span className='text-[#7376E3]'>users are online or not</span>.
                  The app features <span className='text-[#7376E3]'>typing and audio recording indicators</span>, and shows the <span className='text-[#7376E3]'>last time users were online</span>.
                  <span className='text-[#7376E3]'>Enjoy group chat messaging with a built-in video player and image viewer.</span>
                  <span className='text-[#7376E3]'> Stay updated with send and receive notifications</span>, and easily log in or create an account.
                  The app also supports   <span className='text-[#7376E3]'>resending messages and offline messaging</span> for uninterrupted communication.
                </p>
              </div>

            </div>
            <div className='xl:w-[45%] md:w-full flex-wrap rounded-xl p-4 justify-end bg-white' style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }} >
              <video className='w-full xl:h-[700px] md:h-[500px] h-[400px] self-center' autoPlay={true} loop={true}>
                <source src="./new/demo.mp4" type="video/mp4" />
                <track
                  src="/path/to/captions.vtt"
                  kind="subtitles"
                  srcLang="en"
                  label="English"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        {/* video demo */}
        <div id={"demo"} ref={demoref} className='mt-10 self-center items-center flex justify-center flex-col  ml-[5%] mr-[5%] p-10'>
          <div className='xl:w-[60%] w-full bg-[#6782f7] rounded-xl ' style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }} >
            <h3 className='text-center text-3xl font_700 mt-5' style={{ color: "white" }}>Video Demon</h3>
            <video className='w-full xl:h-[400px] md:h-[500px] h-[400px] self-center mt-5' controls>
              <source src="https://loadedbeatbucket.s3.amazonaws.com/video/demo.mov" type="video/mp4" />
              <track
                src="/path/to/captions.vtt"
                kind="subtitles"
                srcLang="en"
                label="English"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        {/* get the app */}
        <div id={"get"} ref={getref} className='flex justify-center  bg-[#f8f9f8] mt-10 pb-20'>
          <div className='mt-20'>
            <h3 className='text-center text-3xl font_700 mt-5' style={{ color: "#7376E3" }}>Get the app</h3>
            <p className='mt-5 text-center leading-20 text-[#c4c4c4] '>Send me a message on one of these platforms and I will send you an APK file to test the app.</p>
            <div className='flex gap-5 justify-center mt-5'>
              <Link className='p-3 rounded-xl bg-[#7376E3]' style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }} href={""}>
                <motion.div initial={{ scale: 0.6 }}
                  animate={{ scale: 1 }}
                  transition={{
                    repeat: Infinity,
                    scale: {
                      duration: 1, delay: 0, repeat: Infinity, repeatType: "reverse",
                    }
                  }}>
                  <LinkedInLogoIcon className='text-2xl h-10 w-10 text-white'></LinkedInLogoIcon>
                </motion.div>
              </Link>
              <Link className='p-3 rounded-xl bg-[#7376E3]' style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }} href={'mailto:jbull635@gmail.com'}>

                <motion.div initial={{ scale: 0.6 }}
                  animate={{ scale: 1 }}
                  transition={{
                    repeat: Infinity,
                    scale: {
                      duration: 1, delay: 0, repeat: Infinity, repeatType: "reverse",
                    }
                  }}>
                  <EnvelopeClosedIcon className='text-2xl h-10 w-10 text-white'></EnvelopeClosedIcon>
                </motion.div>
              </Link>
            </div>
          </div>

        </div>

        <Nav></Nav>

      </div>
    </div>
  );
};

export default Page;