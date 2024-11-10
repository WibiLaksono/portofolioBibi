"use client";

import { useEffect, useState } from 'react';

export default function About() {
    return (
        <footer className="flex justify-center bg-purple-300 w-full h-[20vh] " id='footer'>
            <div className='mt-4 md:mt-8 lg:mt-10'>
                <h1 className='text-black text-center font-Fira_Code text-xl md:text-2xl lg:text-3xl font-semibold'>
                    contact me !
                </h1>
                <div className='flex flex-row mt-4 md:mt-10 gap-4 md:gap-8 lg:gap-10'>
                    <a href="https://www.instagram.com/ayabiiii_/" className='flex justify-center'>
                        <img src="ig.png" alt="instagram"
                            className='w-[3rem] h-[3rem] md:w-[2rem] md:h-[2rem] lg:w-[3rem] lg:h-[3rem]' />
                    </a>
                    <a href="www.linkedin.com/in/wibi-laksono-wijaya-4139672b6" className='flex justify-center'>
                        <img src="linkedin.png" alt="Linkedin"
                            className='w-[3rem] h-[3rem] md:w-[2rem] md:h-[2rem] lg:w-[3rem] lg:h-[3rem]' />
                    </a>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=wibilaksonowijaya@mail.ugm.ac.id&su=DISKUSI%20DARI%20WEB%20PORTOFOLIO" target="_blank" className='flex justify-center'>
                        <img src="email.png" alt="email"
                            className='w-[3rem] h-[3rem] md:w-[2rem] md:h-[2rem] lg:w-[3rem] lg:h-[3rem]' />
                    </a>
                    <a href="https://github.com/WibiLaksono" className='flex justify-center'>
                        <img src="github.png" alt="Github"
                            className='w-[3rem] h-[3rem] md:w-[2rem] md:h-[2rem] lg:w-[3rem] lg:h-[3rem]' />
                    </a>
                </div>
                <p className='text-black font-Funnel_Sans font-medium text-center mt-5 md:mt-10 xl:mt-5 text-xs'>©️ WIBI LAKSONO WIJAYA</p>
            </div>
        </footer>
    );
}
