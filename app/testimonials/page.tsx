'use client';

import Image from "next/image";
import { CustomTitle, Paragraph } from "../components/Title";
import Card from "../components/TestimonialCard";

import { PersonalizedButton } from "../components/Button";

 
interface Testimonial {
    name: string;
    description: string;
    imageUrl:string;
}

interface Testimonials {
    [key : string] : Testimonial
}

const Testimonials : React.FC = () => {


    const testimonials: Testimonials = {
        testimon1: {
            name: 'Laura Chen',
            description: "Their attention to detial and professionalism exceeded our expectations. Highly recommended!",
            imageUrl: '/images/persons/1.jpg',
        },
        testimon2: {
            name: 'Michael Jackson',
            description: "Their attention to detial and professionalism exceeded our expectations. Highly recommended!",
            imageUrl: '/images/persons/2.jpg',
        },
        testimon3: {
            name: 'Gabriela Robleto',
            description: "Their attention to detial and professionalism exceeded our expectations. Highly recommended!",
            imageUrl: '/images/persons/3.jpg',
        },
    }

    const text = [
        "Don't just take our word for it-hear from our satisfied clients! We take pride in the strong relationships we've built with our clients, and their feedback speaks to our commitment to excellece." 
    ]

    return (
       <section
            id="testimonial"
            className="min-h-screen max-w-full bg-[#f0f0f0] p-24 flex flex-col items-center justify-around"
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
                    title="Testimonials" 
                    classname="text-center text-xl xl:text-6xl leading-loose font-normal"
                />
                <Paragraph 
                    text={text} 
                    classname="text-center max-w-3xl mx-auto leading-relaxed" 
                    color="#464646"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 relative max-w-auto my-10">
                {Object.values(testimonials).map((testimonial, index) => (
                    <Card
                        key={index}
                        title={testimonial.name}
                        description={testimonial.description}
                        imageUrl={testimonial.imageUrl}
                    />
                ))}
            </div>
            <div className="read-more-btn">
                <PersonalizedButton 
                    href="" 
                    text="Explore More Testimonials" 
                    classname="bg-second-default-btn hover:text-second-default-btn hover:bg-white text-white" color='#27CDF2'
                />
            </div>
       </section>
    )
}

export default Testimonials