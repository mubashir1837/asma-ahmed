"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const AboutMe = () => {
    const [renderSVG, setRenderSVG] = useState(false);

    useEffect(() => {
        setRenderSVG(true);
    }, []);

    return (
        <div className="relative isolate overflow-hidden px-8 shadow-2xl  sm:px-16 lg:flex lg:gap-x-20 lg:px-32 lg:py-28 bg-gradient-to-b from-orange-500 via-yellow-200 to-orange-500 py-24" id="about">
            {renderSVG && (
                <svg viewBox="0 0 1024 1024" className="absolute bottom-0 left-1/2 -z-10 size-[64rem] translate-y-1/2 -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]" aria-hidden="true">
                    <circle cx="512" cy="512" r="512" fill="url(#gradient)" fillOpacity="0.7" />
                    <defs>
                        <radialGradient id="gradient" cx="512" cy="512" r="512" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#7775D6" />
                            <stop offset="1" stopColor="#E935C1" />
                        </radialGradient>
                    </defs>
                </svg>
            )}
            <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:flex-auto lg:py-16 lg:text-left">
                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">About me</h2>
                <p className="mt-8 text-lg leading-8 text-gray-900">
                    I am Asma Ahmed, a passionate and dedicated bioinformatician with a strong foundation in computational biology, cancer genomics, and artificial intelligence. I thrive in dynamic environments where I can apply my creativity, critical thinking, and technical skills to solve real-world problems. I am confident in my ability to adapt to changing priorities while maintaining a positive attitude and delivering innovative solutions.
                </p>
                <p className="mt-4 text-lg leading-8 text-gray-900">
                    With a keen interest in gene expression analysis, structural bioinformatics, and protein structural analysis, I am constantly exploring new technologies and methodologies to contribute meaningfully to the field of bioinformatics and AI. I am excited to leverage my skills and experience to drive innovation and make a positive impact on the world.
                </p>
            </div>
        </div>
    );
};

export default AboutMe;
