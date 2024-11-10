"use client";

import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Project() {
    return (
        <div className="relative overflow-hidden py-10 bg-gray-100 " id="projects">
            {/* Background elements */}
            <div className="absolute inset-0 z-0 mt-32 -ml-[7vh] bg-black w-[18rem] h-[18rem] rounded-full float-animation-x"></div>
            <div className="absolute inset-0 z-0 mt-96 ml-[calc(100vw-8rem)] bg-purple-800 w-[25rem] h-[25rem] rounded-full float-animation-x"></div>
            <div className="absolute z-0 flex items-center justify-center h-screen">
                <svg
                    className="w-[100vw] h-[100vh] neon-wave2"
                    viewBox="0 0 1440 320"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill="none"
                        stroke="black"
                        strokeWidth="20"
                        d="M0,400 C40,300 900,-90 1500,60"
                    ></path>
                </svg>
            </div>

            {/* Main content */}
            <div className="flex justify-center items-center z-10 h-[100vh] w-[100vw]  pb-20">
                <div className="flex flex-col justify-center items-center w-[100vw] h-[120vh] backdrop-blur-md bg-white bg-opacity-70">
                    <div className="p-5 backdrop-blur-none bg-purple-300 bg-opacity-50 shadow-xl rounded-lg">
                        <h1 className="text-black font-Fira_Code text-xl">My Projects</h1>
                    </div>

                    <div className="mt-7 md:w-[80vw]">
                        <p className="text-black font-Funnel_Sans text-base text-center md:text-2xl lg:text-2xl">
                            Berikut adalah beberapa project yang pernah saya kerjakan baik secara individu atau bekerja secara team
                        </p>
                    </div>

                    <Swiper
                        modules={[EffectCoverflow, Pagination, Navigation]}
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                            rotate: 30,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        pagination={{ clickable: true }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                            clickable: true,
                        }}
                        className="swiper_container flex w-full md:w-[80%] lg:w-[70%] mt-11 lg:mt-16"
                    >
                        {/* SwiperSlide Example */}
                        <SwiperSlide className="!w-fit">
                            <div className="flex flex-col items-center justify-center w-[90vw] md:w-[60vw] lg:w-[50vw] xl:w-[35vw] h-[60vh] md:h-[50vh] lg:h-[60vh] xl:h-[70vh] bg-purple-100 shadow-lg rounded-xl p-4">
                                <img 
                                    src="project1.png" 
                                    alt="Project 1" 
                                    className="rounded-lg object-cover w-full h-[50%] mb-3 -mt-5"
                                />
                                <h2 className="text-2xl font-Fira_Code font-bold md:text-3xl mt-2 text-gray-800 text-center">
                                    Menu Data Sarana
                                </h2>
                                <p className="text-base mt-3 text-black font-Funnel_Sans text-center">
                                    Pendataan Sarana Berbasis QR Code untuk memudahkan inventarisasi sarana di FMIPA UGM. Menggunakan PHP, CodeIgniter 4, dan MySQL.
                                </p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="!w-fit">
                            <div className="flex flex-col items-center justify-center w-[90vw] md:w-[60vw] lg:w-[50vw] xl:w-[35vw] h-[60vh] md:h-[50vh] lg:h-[60vh] xl:h-[70vh] bg-purple-100 shadow-lg rounded-xl p-4">
                                <img 
                                    src="project2.png" 
                                    alt="Project 2" 
                                    className="rounded-lg object-cover w-full h-[50%] mb-3 -mt-16"
                                />
                                <h2 className="text-2xl font-Fira_Code font-bold md:text-3xl mt-2 text-gray-800 text-center">
                                    Check Kesehatan
                                </h2>
                                <p className="text-base mt-3 text-black font-Funnel_Sans text-center">
                                    Aplikasi untuk memantau kesehatan pengguna dengan fitur pengingat dan pencatatan data kesehatan harian.
                                </p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="!w-fit">
                            <div className="flex flex-col items-center justify-center w-[90vw] md:w-[60vw] lg:w-[50vw] xl:w-[35vw] h-[60vh] md:h-[50vh] lg:h-[60vh] xl:h-[70vh] bg-purple-100 shadow-lg rounded-xl p-4">
                                <img 
                                    src="project3.png" 
                                    alt="Project 3" 
                                    className="rounded-lg object-cover w-full h-[50%] mb-3 "
                                />
                                <h2 className="text-2xl font-Fira_Code font-bold md:text-3xl mt-2 text-gray-800 text-center">
                                    Menu Voting Malpres 2024
                                </h2>
                                <p className="text-base mt-3 text-black font-Funnel_Sans text-center">
                                    Menu voting di website Malpres MIPA UGM dibuat menggunakan React, Next.js, dan Tailwind CSS, memungkinkan pemilihan nomine secara cepat dan mudah dengan antarmuka yang responsif.
                                </p>
                            </div>
                        </SwiperSlide>

                        {/* Add more SwiperSlides as needed */}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}
