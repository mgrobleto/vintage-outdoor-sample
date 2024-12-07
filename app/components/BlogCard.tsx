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
    readMoreButton: React.ReactElement;
}


const BlogCard: React.FC<CardProps> = ({title, description, imageUrl, readMoreButton}) => {
    
    return (
        <div className="blog-card relative w-4/5 h-[500px] rounded-xl shadow-xl overflow-hidden cursor-pointer p-6 flex flex-col items-center hover:translate-y-3 md:transform-none transition ease-in-out delay-50 duration-500">
            <div className="image-container absolute inset-0">
                <Image 
                    src={imageUrl}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl"
                />
            </div>
            <div className="absolute inset-0 bg-black opacity-50 backdrop-blur-md"></div>

            <div className="card-content text-left relative z-10 p-6 flex flex-col items-start justify-center h-full">
                <div className="testimonial-name mb-4">
                    <CustomTitle 
                        title={title} 
                        classname="font-extralight xl:font-light text-lg xl:text-5xl text-left text-white"
                    />
                </div>
                <div className="card-desc text-gray-200 font-normal text-sm lg:text-xl tracking-wider">
                    {description}
                </div>
                <div className="mt-4">{readMoreButton}</div>
            </div>
        </div>
    )
}

export default BlogCard