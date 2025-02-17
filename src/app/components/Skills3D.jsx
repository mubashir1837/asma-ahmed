"use client"; // Ensure this is at the top
import React from 'react';
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { FaDna, FaLaptopCode, FaDatabase, FaMicroscope, FaPython, FaReact } from "react-icons/fa";

// Disable SSR for the 3D Canvas
const DynamicCanvas = dynamic(() => import("./Skills3DCanvas"), { ssr: false });

const skills = [
  { icon: <FaDna className='text-pink-500 text-5xl' />, name: 'Bioinformatics' },
  { icon: <FaPython className='text-blue-500 text-5xl' />, name: 'Python' },
  { icon: <FaReact className='text-cyan-500 text-5xl' />, name: 'React.js' },
  { icon: <FaDatabase className='text-yellow-500 text-5xl' />, name: 'Data Science' },
  { icon: <FaMicroscope className='text-green-500 text-5xl' />, name: 'Computational Biology' },
  { icon: <FaLaptopCode className='text-purple-500 text-5xl' />, name: 'Full Stack Development' },
];

export default function Skills3D() {
  return (
    <section className='relative w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-yellow-200 to-orange-500 text-white p-8'>
      {/* Lazy-loaded 3D Background Sphere */}
      <DynamicCanvas />

      <motion.h2 
        className='text-4xl font-bold text-center relative z-10'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Skills
      </motion.h2>
      
      <div className='grid grid-cols-2 md:grid-cols-3 gap-8 mt-8 relative z-10'>
        {skills.map((skill, index) => (
          <motion.div 
            key={index}
            className='flex flex-col items-center p-4 rounded-xl bg-white bg-opacity-10 backdrop-blur-lg shadow-lg hover:scale-110 transition-transform duration-300'
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {skill.icon}
            <p className='mt-2 text-lg font-semibold'>{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
