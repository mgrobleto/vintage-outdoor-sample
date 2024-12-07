'use client';

import React, {useContext} from "react";
import Image from "next/image";
import { PersonalizedButtonWithIcon } from "./Button";
import { CustomTitle } from "./Title";
import { FaPlay } from "react-icons/fa";

interface CardProps {
    title: string;
    description: string;
    imageUrl: string;
}


const Card: React.FC<CardProps> = ({title, description, imageUrl}) => {
    
    return (
        <div className="testimonial-card bg-white rounded-xl shadow-xl p-6 relative flex flex-row items-center w-4/5 h-100 hover:cursor-pointer hover:translate-y-3 md:transform-none transition ease-in-out delay-50 duration-500">
            <div className="card-content text-left flex flex-col justify-start">
                <div className="testimonial-name">
                    <CustomTitle title={title} classname="font-extralight xl:font-light text-lg xl:text-5xl text-left my-4"/>
                </div>
                <div className="card-desc text-gray-700 font-light text-sm lg:text-lg tracking-tight">
                    {description}
                </div>
                <div className="stars flex justify-start mt-4">
                    {[...Array(5)].map((_, i) => (
                        <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className={`w-5 h-5 mr-3 ${
                        i < 5 ? "text-second-default-btn" : "text-gray-300"
                        }`}
                    >
                        <path d="M12 .587l3.668 7.432 8.332 1.21-6.064 5.918 1.428 8.327L12 18.902 5.636 23.474l1.428-8.327L.999 9.229l8.333-1.21L12 .587z" />
                    </svg>
                    ))}
                </div>
            </div>
            <div className="image-container relative -right-20 w-full h-60">
                <Image 
                    src={imageUrl}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl shadow-md"
                />
                <div className="play-icon absolute inset-0 flex items-center justify-center w-full h-full text-second-default-btn">
                    <FaPlay size={32} />
                </div>
            </div>
        </div>
    )
}

export default Card