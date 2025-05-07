"use client";

import React, { useState, useEffect, useContext } from "react";
import Link from "next/link"
import Image from "next/image"

import { ScrollContext } from "@/utils/scroll-observer";

const Navbar : React.FC = () => {

    const links = [
        {
            label: 'Home',
            path: '#',
        },
        {
            label: 'About us',
            path: '#about',
        },
        {
            label: 'Services',
            path: '#services',
        },
        {
            label: 'Gallery',
            path: '#gallery',
        },
        {
            label: 'Testimonials',
            path: '#testimonial',
        },
        {
            label: 'Blog',
            path: '#blogs',
        },
        {
            label: 'FAQs',
            path: '#faqs',
        },
        {
            label: 'Contact us',
            path: '#contact-us',
        },
    ]

    const { scrollY } = useContext(ScrollContext)
    const [activeSection, setActiveSection] = useState<string>('');

    useEffect(() => {
        const sections = links.map(link => document.getElementById(link.path.replace('#', '')))
        let currentSection = '';

        sections.forEach((section, index) => {
            if (section) {
                const rect = section.getBoundingClientRect();
                if(rect.top + window.scrollY <= scrollY + window.innerHeight / 2) {
                    currentSection = links[index].path
                }
            }
        })
        setActiveSection(currentSection)
    }, [scrollY, links])


    return (
        <div className="bg-white hidden lg:flex lg:flex-row w-full h-auto xl:h-[100px] sticky top-0 p-5 items-center shadow-md z-50">
            <div className="logo flex items-center px-5 xl:px-10">
                <Link href='/'>
                    <Image 
                        src="/logo2.png"
                        alt="logo"
                        width={100}
                        height={50}
                        className="object-contain h-auto max-w-full"
                        /* style={{
                            backgroundColor: 'yellow'
                        }} */
                    />
                </Link>
            </div>
            <div className="navbar-options flex-grow w-full justify-center xl:justify-end mr-10">
                <div className="options flex flex-row items-center justify-end gap-5 xl:gap-0 leading-6 text-base font-medium xl:text-lg">
                    {links.map((l,i) => {
                        return (
                            <Link
                                key={i}
                                href={l.path}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                    activeSection === l.path
                                        ? 'text-white bg-default-btn shadow-lg'
                                        : 'text-gray-800 hover:text-white hover:bg-default-btn'
                                }`}
                                style={{
                                    margin: 4
                                }}
                            >
                                <div className="mx-2 text-base"> {l.label} </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Navbar