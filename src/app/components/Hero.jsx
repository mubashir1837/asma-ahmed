// components/Hero.jsx
"use client"
import React from 'react';
import { FaWhatsapp, FaLinkedin, FaGithub, FaInstagram, FaFacebookSquare, FaYoutube } from 'react-icons/fa';
import Image from 'next/image';
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div id='home' className=" bg-gradient-to-b from-yellow-200 to-orange-500  flex flex-col items-center justify-center  py-24 relative">
      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
      >
        <div className="absolute left-2 top-[10%] lg:top-[60%] md:left-6 lg:left-8 transform md:-translate-y-1/2">
          <ul className="space-y-4  p-2 rounded-full">
            <li>
              <a href="" className="text-green-600">
                <FaWhatsapp size={30} />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/asma-ahmed-8301a92a7/" className="text-[#0a66c2] hover:text-[#4b8ed1]">
                <FaLinkedin size={30} />
              </a>
            </li>
            <li>
              <a href="https://github.com/Asma-Ahmed-31" className="text-gray-900">
                <FaGithub size={30} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/asma_ahmed_31/" className="text-pink-500 hover:text-pink-600">
                <FaInstagram size={30} />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com" className="text-blue-700 hover:text-blue-800">
                <FaFacebookSquare size={30} />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com" className="text-red-600 hover:text-red-700">
                <FaYoutube size={30} />
              </a>
            </li>

          </ul>
        </div>
      </motion.div>
      <div className="relative grid grid-cols-1 sm:grid-cols-12 h-full px-8 md:px-16 items-center ml-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mt-12 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-blue-700">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Asma Ahmed",
                1000,
                "Bioinformatician",
                1000,
                "Data Analyst",
                1000,
                "Python Programmer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className='sm:text-xl lg:text-6xl'
            />
          </h1>
          <p className="text-[#1d1e1f] text-base sm:text-sm mb-6 py-4 lg:text-xl">
            A skilled Bioinformatics student and AI enthusiast with a passion for data analysis and programming, from Pakistan.
          </p>
          <div className='ml-0 sm:ml-0 lg:ml-4'>
            <Link
              href="http://Wa.me/+923335312126"
              className="px-6 inline-block py-3 font-bold w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#090d82] to-secondary-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <Link
              href="https://heyzine.com/flip-book/a221b3d899.html"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-[#090d82] to-secondary-500  text-white mt-3"
            >
              <span className="block bg-gradient-to-br from-[#090d82] to-secondary-500 font-bold rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-white  border-8  border-blue-900 shadow-2xl shadow-[#090d82] w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] relative">
            <Image
              src="/asmaa.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full w-full h-full"
              width={1000}
              height={1000}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;