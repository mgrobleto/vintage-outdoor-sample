'use client';

import Image from "next/image";
import { ScrollContext } from "@/utils/scroll-observer"
import { useContext } from "react"
import { CustomSecondTitle, CustomTitle } from "../components/Title";
import ServiceCard from "../components/ServiceCard";

import { MdOutlineHouseSiding } from "react-icons/md";
import { GiToolbox } from "react-icons/gi";
import { FaHammer } from "react-icons/fa";

interface ServiceDetail {
    detail: string;
    description: string;
}
 
interface Service {
    title: string;
    description: ServiceDetail[];
    imageUrl:string;
    icon: React.ReactElement;
}

interface Services {
    [key : string] : Service
}

const Services : React.FC = () => {


    const servicePhotoLink = [
        { path: '/images/outdoor/1.jpg'},
        { path: '/images/outdoor/2.jpg'},
        { path: '/images/outdoor/3.jpg'},
        { path: '/images/outdoor/4.jpg'},
        { path: '/images/outdoor/5.jpg'},
        { path: '/images/outdoor/6.jpg'},
        { path: '/images/outdoor/7.jpg'},
        { path: '/images/outdoor/8.jpg'},
        { path: '/images/outdoor/9.jpg'},
        { path: '/images/outdoor/10.jpg'},
    ]

    const services: Services = {
        service1: {
            title: 'Outdoor Living Spaces',
            description: [
                {
                    detail:'Patios & Deck',
                    description: 'Custom outdoor patios and decks'
                },
                {
                    detail: 'Outdoor Kitchens',
                    description: 'Gourmet kitchens for outdoor dining',
                },
                {
                    detail: 'Pools & Water Features',
                    description: 'Stunning pools and waterfalls',
                },
                {
                    detail: 'Fire Pits & Heating',
                    description: 'Cozy fire pits and heaters',
                },
                {
                    detail: 'Landscape Lighting',
                    description: 'Professional outdoor lighting',
                },
                {
                    detail: 'Solar Panels',
                    description: 'Eco-friendly solar installations',
                },
            ],
           imageUrl: '/images/outdoor/1.jpg',
           icon: <MdOutlineHouseSiding />
        },
        service2: {
            title: 'Landscaping Services',
            description: [
                {
                    detail: 'Design & Installation',
                    description: 'Expert landscape design and setup',
                },
                {
                    detail: 'Garden Maintenance',
                    description: 'Ongoing garden care',
                },
                {
                    detail: 'Irrigation Systems',
                    description: 'Efficient watering solutions',
                },
                {
                    detail: 'Tree Care',
                    description: 'Professional tree maintenance',
                },
            ],
           imageUrl: '/images/outdoor/2.jpg',
           icon: <GiToolbox />
        },
        service3: {
            title: 'Vintage Construction Inc',
            description: [
                {
                    detail: 'New Construction',
                    description: 'Custom homes and buildings',
                },
                {
                    detail: 'Remodels',
                    description: 'Expert home and business renovations',
                },
                {
                    detail: 'ADUs',
                    description: 'Accessory Dwelling Units for extra space',
                },
                {
                    detail: 'Investment Properties',
                    description: 'Quality construction for investors',
                },
                {
                    detail: 'Commercial Projects',
                    description: 'Tailored business construction',
                },
            ],
           imageUrl: '/images/outdoor/3.jpg',
           icon: <FaHammer />
        },
    }

    const { scrollY } = useContext(ScrollContext)

    return (
       <section
            id="services"
            className="min-h-screen max-w-full bg-gray p-20 flex flex-col items-center justify-around"
        >
            <div className="header flex flex-col items-center justify-around">
                <div className="logo">
                    <Image 
                    src='/logo2.png'
                    alt="yearExperience"
                    width={100}
                    height={100}
                    />
                </div>
                <CustomTitle title="Our Services" classname="text-center text-xl xl:text-6xl leading-loose font-normal"/>
                <CustomSecondTitle title="Comprehensive for your outdoor and construction needs" classname="text-center font-thin"/>
               </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 relative max-w-full my-4">
                    {Object.values(services).map((service, index) => (
                        <ServiceCard
                            key={index}
                            title={service.title}
                            description={service.description}
                            imageUrl={service.imageUrl}
                            iconref={service.icon}
                        />
                    ))}
            </div>
       </section>
    )
}

export default Services