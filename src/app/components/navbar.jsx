"use client" 

import React from 'react';

export default function Navbar() {
    return (
        <nav className='flex justify-center bg-slate-500'>
            <ul className='flex flex-row items-center gap-5'>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
            </ul>
        </nav>
    );
}