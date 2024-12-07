'use client';

import Image from "next/image";
import { ScrollContext } from "@/utils/scroll-observer"
import React, { useContext } from "react"
import { CustomTitle, Paragraph } from "../components/Title";
import BlogCard from "../components/BlogCard";

import { PersonalizedButtonWithIcon } from "../components/Button";
import { IoNewspaperOutline } from "react-icons/io5";
import { GiRead } from "react-icons/gi";

 
interface Blogs {
    title: string;
    description: string;
    imageUrl: string;
    readMoreButton: React.ReactElement;
}

interface Blog {
    [key : string] : Blogs
}

const Blogs : React.FC = () => {


    const blogs: Blog = {
        blog1: {
            title: 'The ultimate guide to home remodeling',
            description: "Trend and Tips",
            imageUrl: '/images/outdoor/6.jpg',
            readMoreButton: <PersonalizedButtonWithIcon href="" text="Read More" icon={<IoNewspaperOutline />} classname="bg-secondary-color text-white" color='white'/>
        },
        blog2: {
            title: 'Transform your outdoor space',
            description: "¡5 essential tips!",
            imageUrl: '/images/outdoor/10.jpg',
            readMoreButton: <PersonalizedButtonWithIcon href="" text="Read More" icon={<IoNewspaperOutline />} classname="bg-secondary-color text-white" color='white'/>
        },
        blog3: {
            title: 'Sustainable Landscaping',
            description: "Eco-Friendly practices",
            imageUrl: '/images/outdoor/9.jpg',
            readMoreButton: <PersonalizedButtonWithIcon href="" text="Read More" icon={<IoNewspaperOutline />} classname="bg-secondary-color text-white" color='white'/>
        },
    }

    const text = [
        "Wether you're looking for expert advice, project, inspiration, or updates on our recent work, you'll find it all here. Explore our articles to stay informed and inspired" 
    ]

    const { scrollY } = useContext(ScrollContext)

    return (
       <section
            id="blogs"
            className="min-h-screen max-w-full bg-white p-24 flex flex-col items-center justify-center"
        >
            <div className="header flex flex-col items-center justify-around min-w-50">
                <div className="logo">
                    <Image 
                    src='/logo2.png'
                    alt="yearExperience"
                    width={100}
                    height={100}
                    />
                </div>
                <CustomTitle 
                    title="Our Blog" 
                    classname="text-center text-xl xl:text-6xl leading-loose font-normal"
                />
                <Paragraph 
                    text={text} 
                    classname="text-center max-w-3xl mx-auto leading-relaxed" 
                    color="#464646"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 relative min-w-[500px] m-10">
                {Object.values(blogs).map((blog, index) => (
                    <BlogCard
                        key={index}
                        title={blog.title}
                        description={blog.description}
                        imageUrl={blog.imageUrl}
                        readMoreButton={blog.readMoreButton}
                    />
                ))}
            </div>
            <div className="read-more-btn">
                <PersonalizedButtonWithIcon 
                    href="" 
                    text="Discover more" 
                    color="#BF8A26" 
                    classname="text-white bg-[#BF8A26] hover:bg-[#ddaf42] capitalize"
                    icon={<GiRead />}
                />
            </div>
       </section>
    )
}

export default Blogs