"use client";

import { useEffect, useState } from "react";

const TypingEffect = ({ text, speed }) => {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            if (index <= text.length) {
                setDisplayedText(text.slice(0, index));
                index++;
            } else {
                clearInterval(interval);
            }
        }, speed);
    
        return () => clearInterval(interval); // memastikan interval terhapus jika komponen unmount
    }, [text, speed]);

    // Fungsi untuk mewarnai teks sesuai bagian tertentu
    const getColoredText = () => {
        const parts = [
            { text: "console", color: "#002b36" },
            { text: ".log", color: "#586e75" },
            { text: '("Selamat datang!")', color: "#859900" },
        ];

        let coloredText = [];
        let cursor = 0;

        parts.forEach(({ text, color }) => {
            if (cursor < displayedText.length) {
                // Tambahkan bagian berwarna
                coloredText.push(
                    <span key={text} style={{ color }}>
                        {displayedText.slice(cursor, cursor + text.length)}
                    </span>
                );
                cursor += text.length;
            }
        });

        // Tambahkan sisa teks (jika ada) dengan warna putih
        if (cursor < displayedText.length) {
            coloredText.push(
                <span key="remainder" style={{ color: "white" }}>
                    {displayedText.slice(cursor)}
                </span>
            );
        }

        return coloredText;
    };

    return <span>{getColoredText()}</span>;
};

console.log("Selamat datang!")

export default function Hero() {
    return (
        <div className="relative overflow-hidden -mb-[5rem]" id="hero">
            <div className="absolute inset-0 z-0 my-4 -ml-[10vh] bg-black w-[12rem] h-[12rem] rounded-full"></div>
            <div className="absolute inset-0 z-0 mt-32 -ml-[7vh] bg-purple-800 w-[18rem] h-[18rem] rounded-full"></div>
            <div className="absolute inset-0 z-0 mt-32 ml-[calc(100vw-11rem)] md:ml-[calc(100vw-20rem)] bg-purple-800 w-[30rem] h-[30rem] rounded-full"></div>
            <div className="absolute inset-0 z-0 mt-96 ml-[calc(100vw-8rem)] bg-black w-[24rem] h-[24rem] rounded-full"></div>
            <div className="absolute z-0 flex items-center justify-center h-screen">
                <svg
                    className="w-[100vw] h-[100vh] neon-wave"
                    viewBox="0 0 1440 320"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill="none"
                        stroke="#d707f2"
                        strokeWidth="20"
                        d="M0,10 C40,460 1000,-90 1440,460"
                    ></path>
                </svg>
            </div>

            <div className="flex z-10">
                <div className="flex justify-center w-[100vw] h-[100vh] backdrop-blur-md bg-white bg-opacity-70">
                    <div className="flex flex-col gap-9 justify-center items-center mt-5 w-[90vw] h-[70vh] lg:h-[80vh] rounded-lg backdrop-blur-none bg-slate-300 bg-opacity-50">
                        <h1 className="text-center font-Fira_Code font-semibold text-lg md:text-4xl text-black">
                            <TypingEffect text={'console.log("Selamat datang!")'} speed={100} />
                        </h1>
                        <p className="text-center text-black font-Funnel_Sans text-base md:text-2xl text-wrap w-[60vw] h-[15vh]">
                            Selamat datang di portofolio <b>Wibi Laksono Wijaya!</b> Jelajahi berbagai proyek dan pengalaman saya di bidang teknologi dan pengembangan. Terima kasih sudah berkunjung, dan jangan ragu untuk menghubungi jika ada yang ingin didiskusikan!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
