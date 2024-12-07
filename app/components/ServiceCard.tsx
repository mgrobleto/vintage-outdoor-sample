'use client';

import React, {useContext} from "react";
import Image from "next/image";
import { ScrollContext } from "@/utils/scroll-observer";
import { PersonalizedButtonWithIcon } from "./Button";
import { CustomTitle } from "./Title";

interface ServiceDetail {
    detail: string;
    description: string;
}

interface ServiceCardProps {
    title: string;
    description: ServiceDetail[];
    imageUrl: string;
    iconref: React.ReactElement;
}


const ServiceCard: React.FC<ServiceCardProps> = ({title, description, imageUrl, iconref}) => {
    //const { ScrollY } = useContext(ScrollContext);
    
    return (
        <div className="card group max-w-[600px] h-full flex flex-col justify-between items-start p-6 rounded-3xl bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 shadow-2xl hover:cursor-pointer hover:translate-y-1.5 ease-in-out transition delay-150 duration-200">
             <div className="card-image w-full h-[400px] flex justify-center overflow-hidden rounded-md">
                <Image 
                    src={imageUrl}
                    alt={title}
                    width={300}
                    height={200}
                    className="object-cover"
                />
            </div>
            <div className="card-content w-full p-4 flex flex-col justify-start flex-grow">
                <div className="div">
                    <CustomTitle title={title} classname="card-title font-light text-primary-color text-xl xl:text-3xl text-justify my-4"/>
                </div>
                
                <div className="card-desc">
                    <ul className="font-light text-sm lg:text-sm text-justify tracking-tight opacity-80 space-y-2">
                        {description.map((item, index) => (
                            <li key={index} className="flex flex-col">
                                <span className="text-lg font-extralight text-secondary-color">{item.detail}</span>
                                <span className="text-gray-700">{item.description}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="card-footer w-full p-4">
                <PersonalizedButtonWithIcon href="" text="Read More" icon={iconref} classname="hover:bg-primary-color text-gray-600 hover:text-white" color='white'/>
            </div>
        </div>
    )
}

export default ServiceCard