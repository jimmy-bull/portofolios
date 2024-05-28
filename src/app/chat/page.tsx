import React from 'react';
import './style.css'
import Nav from './nav';
import chat1 from "../../../public/mobile/1.png"
import chat2 from "../../../public/mobile/2.png"
import chat3 from "../../../public/mobile/3.png"
import money from "../../../public/money.png"
import data from "../../../public/data.png"

import Image from 'next/image';

const page = () => {
  return (
    <div className='flex  flex-col min-h-screen'>
      <div className='_body  w-full' style={{}}>
        <div className=' pl-[5%] pr-[5%]'>
          <Nav></Nav>
          <div className='flex justify-center flex-col items-center'>
            <h1 className='xl:mt-[120px] mt-20 xl:text-7xl text-3xl  font_700 text-center text-white leading-10'>Welcome to my chat demo Application.</h1>
            <h4 className='mt-10 text-center xl:text-2xl text-xl text-white xl:w-[50%] w-[100%] leading-10'>I am developing this <span style={{ color: "#7376E3" }}>React native</span> cross-platform messaging application to
              compete with platforms like <span style={{ color: "#7376E3" }}> Sendbird.</span></h4>
          </div>
          <div className='mt-10 flex justify-center'>
            <button className='text-[#7376E3] p-4 rounded-3xl text-xl bg-white '>Test The Demo App</button>
          </div>
          <div className="flex gap-4 justify-center w-full  mt-10 rounded-xl items-center   bg-cover bg-no-repeat bg-center  ">
            <div className='md:w-[30%] sm:w-45%'>
              <Image
                src={chat3}
                alt="Picture of the author"
                loading="lazy"
              />
            </div>
            <div className='md:w-[30%] block max-[1200px]:hidden sm:w-45%'>
              <Image
                src={chat1}
                alt="Picture of the author"
                loading="lazy"
              />
            </div>
            <div className='md:w-[30%] sm:w-45%'>
              <Image
                src={chat2}
                alt="Picture of the author"
                loading="lazy"
              />
            </div>

          </div>

        </div>
        <div className='mt-10  flex justify-center flex-col'>
          <h3 className='text-center text-3xl font_700 ' style={{ color: "#7376E3" }}>Why am I working on this application?</h3>
          <div className='xl:w-[80%] w-full justify-center  self-center'>
            <p className='mt-5 text-center leading-20 text-[#c4c4c4] '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione odio omnis atque voluptatibus? Dolores,
              aliquid aut. Accusamus veritatis numquam quibusdam dicta magnam, laboriosam dolorum nihil quidem, eligendi laborum itaque quo.</p>
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

              <p className='mt-5 text-center leading-20 text-[#c4c4c4]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione odio omnis atque voluptatibus? Dolores,
                aliquid aut. Accusamus veritatis numquam quibusdam dicta magnam, laboriosam dolorum nihil quidem, eligendi laborum itaque quo.</p>
            </div>
            <div className='xl:w-[45%] md:w-full flex-wrap rounded-xl p-4' style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px", backgroundImage: "linear-gradient(to bottom, #ffffff, #dbd6ff, #b4affe, #8589fd, #3e66fb)" }}>
              <Image
                src={data}
                alt="Picture of the author"
                loading="lazy"
                className='mt-5'
              />
              <h3 className='font_700 text-xl text-white mt-3 '>Full Data Controll</h3>

              <p className='mt-5 text-center leading-20 text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione odio omnis atque voluptatibus? Dolores,
                aliquid aut. Accusamus veritatis numquam quibusdam dicta magnam, laboriosam dolorum nihil quidem, eligendi laborum itaque quo.</p>
            </div>
          </div>
        </div>

        <div className='mt-20 flex justify-center flex-col bg-[#f8f9f8] p-4'>
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
            <div className='xl:w-[45%] md:w-full flex-wrap rounded-xl p-4 justify-end' >
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


        <div className='mt-10 flex justify-center flex-col  pl-[5%] pr-[5%]'>
          <div className='w-full' >
            <h3 className='text-center text-3xl font_700 mt-5' style={{ color: "#7376E3" }}>Video Demon</h3>
            <video className='w-full xl:h-[700px] md:h-[500px] h-[400px] self-center mt-5' controls>
              <source src="./demo.mp4" type="video/mp4" />
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
    </div>
  );
};

export default page;