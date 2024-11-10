"use client";

import { useEffect, useState } from 'react';

export default function About() {
    const [showMore, setShowMore] = useState(false);
    const [greeting, setGreeting] = useState('');
    const [cards] = useState([
        { id: 1, name: 'HTML', img: 'html.png' },
        { id: 2, name: 'CSS', img: 'css.png' },
        { id: 3, name: 'JavaScript', img: 'javascript.png' },
        { id: 4, name: 'React', img: 'react.png' },
        { id: 5, name: 'Next.js', img: 'next.png' },
        { id: 6, name: 'PHP', img: 'php.png' },
        { id: 7, name: 'CodeIgniter', img: 'ci4.png' },
        { id: 8, name: 'Tailwind', img: 'tailwind.png' },
        { id: 9, name: 'MySQL', img: 'mysql.png' }
    ]);

    useEffect(() => {
        const currentHour = new Date().getHours();
        if (currentHour >= 0 && currentHour <= 10) {
            setGreeting('Ohayou Gozaimasu☀️');
        } else if (currentHour >= 10 && currentHour <= 17) {
            setGreeting('Konnichiwa 💮');
        } else {
            setGreeting('Oyasumi 🌛');
        }
    }, []);

    return (
        <div className="relative overflow-hidden bg-black" id='about'>
            <div className="flex justify-center mt-10">
                <h1 className="text-3xl md:text-5xl font-bold text-white font-Fira_Code">
                    About <span className="text-purple-300">Me</span>
                </h1>
            </div>
            <div className="relative flex mt-16">
                <div className="flex flex-col gap-3 lg:gap-6 items-center md:justify-start md:mx-[5vw] md:items-start md:flex-row w-full h-auto md:h-[100vh]">
                    <div className="flex justify-center items-center w-[70vw] md:w-[45vw] lg:w-[40vw] h-[40vh] lg:h-[70vh] rounded-lg backdrop-blur-none bg-slate-300 bg-opacity-50">
                        <img src="bibi.png" alt="Bibi" 
                            className="w-full h-full object-cover rounded-lg" />
                    </div>
                    <div className="w-[90vw] md:w-[45vw] lg:w-[48vw]">
                        <p className="text-white font-Funnel_Sans text-2xl font-bold md:text-3xl mb-10 text-justify px-8 md:px-5 w-hidden lg:block">
                            {greeting}
                        </p>

                        <p
                            className={`text-white font-Funnel_Sans text-base md:text-lg text-justify px-8 md:px-5 w- transition-all duration-400 ease-in-out ${showMore ? 'max-h-[600px] opacity-100' : 'max-h-56 opacity-75 overflow-hidden'}`}
                            style={{
                                maskImage: showMore ? 'none' : 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)',
                                WebkitMaskImage: showMore ? 'none' : 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)',
                            }}
                        >
                            Halo! Saya <b className="text-purple-300">Wibi Laksono Wijaya</b>, seorang web developer pemula yang berbasis di Yogyakarta dan saat ini menempuh studi di Ilmu Komputer, Universitas Gadjah Mada. Dengan pengalaman dasar dalam pengembangan web, saya memiliki keterampilan menggunakan HTML, CSS, JavaScript, React.js, Next.js, Tailwind CSS, PHP, CodeIgniter 4, dan Bootstrap. <br /><br />
                            {/* Bagian untuk ukuran layar lg dan lebih besar */}
                            <span className="hidden lg:block">
                                Saya percaya bahwa setiap proyek adalah kesempatan untuk berkembang dan belajar hal baru. Meski masih dalam tahap awal, saya selalu berusaha untuk mengaplikasikan pengetahuan yang saya dapatkan di dunia nyata melalui berbagai proyek pribadi dan kolaborasi. Dengan pendekatan yang teliti dan semangat untuk berinovasi, saya yakin dapat memberikan kontribusi yang berarti dalam setiap tantangan pengembangan web yang saya hadapi. Saya selalu terbuka untuk belajar dari pengalaman dan bekerja sama dengan orang lain untuk mencapai hasil yang terbaik.
                            </span>
                        </p>
                        <div className="text-center mt-4">
                            {showMore ? (
                                <button onClick={() => setShowMore(false)} className="text-purple-300 font-Fira_Code">
                                    Show less &lt;
                                </button>
                            ) : (
                                <button onClick={() => setShowMore(true)} className="text-purple-300 font-Fira_Code">
                                    Show more &gt;
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {/* Carousel Section */}
            <div className="flex flex-col justify-center md:-mt-[55vh] lg:-mt-[25vh] items-center h-[40vh] w-[100vw] mt-5">
                <h2 className="font-Fira_Code text-2xl text-white font-bold">
                Tech Stack
                </h2>
                <div className="backdrop-blur-none items-center bg-purple-100 bg-opacity-30 rounded-xl h-[30vh] w-[85vw] flex overflow-hidden relative">
                <div className="flex animate-loop-scroll">
                    {/* Set pertama kartu */}
                    <div className="flex lg:gap-10">
                    {cards.map((card, index) => (
                        <div
                        key={index}
                        className="flex-shrink-0 w-32 h-full flex flex-col items-center"
                        >
                        <img
                            src={card.img}
                            alt={card.name}
                            className="w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 object-contain"
                        />
                        <p className="text-white text-center mt-2 font-Funnel_Sans">{card.name}</p>
                        </div>
                    ))}
                    </div>
                    {/* Set kedua kartu untuk efek looping mulus */}
                    <div className="flex lg:gap-10">
                    {cards.map((card, index) => (
                        <div
                        key={index}
                        className="flex-shrink-0 w-32 h-full flex flex-col items-center"
                        >
                        <img
                            src={card.img}
                            alt={card.name}
                            className="w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 object-contain"
                        />
                        <p className="text-whte text-center mt-2 font-Funnel_Sans">{card.name}</p>
                        </div>
                    ))}
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}
