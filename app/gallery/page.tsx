'use client';

import { ScrollContext } from "@/utils/scroll-observer"
import { useContext } from "react"
import Image from "next/image";
import { EmblaOptionsType } from "embla-carousel"

import { CustomTitle, Paragraph } from "../components/Title";
import EmblaCarousel from "@/utils/embla-carousel";
import { PersonalizedButton } from "../components/Button";

const Gallery : React.FC = () => {

    const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true }
    const SLIDE_COUNT = 5
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

    const text = [
        "Take a look at our recent projects to see the quality and creativity we bring to every job. Wether it's a beautifully landscape garde or a newly built home, our portfolio showcases the best of what Vintage Outdoor Inc. and Vintage Construction Inc. can offer."
    ]

    return (
       <section
            id="gallery"
            className="relative min-h-screen w-full bg-[url('/images/outdoor/8.jpg')] bg-cover bg-center"
        >
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="relative flex flex-col xl:flex-row w-full min-h-screen justify-center items-center gap-60 p-40">
                <div className="flex flex-col items-center xl:items-start justify-center text-center xl:text-left max-w-[500px] gap-6 ">
                    <div className="logo">
                        <Image 
                        src='/logo2.png'
                        alt="yearExperience"
                        width={100}
                        height={100}
                        />
                    </div>
                    <CustomTitle title="Explore our Gallery" color="white" classname="text-center xl:text-left text-xl tracking-wide font-normal capitalize xl:text-6xl leading-loose max-w-[300px]"/>
                    <div className="line w-full h-1 bg-secondary-color"></div>
                    <div className="about-desc text-white">
                        <Paragraph
                            text={text}
                            color="white"
                            classname="tracking-wide"
                        />
                    </div>
                    <div className="read-more-btn">
                        <PersonalizedButton href="" text="View Our Work" color="#BF8A26" classname="text-white bg-[#BF8A26] hover:bg-white hover:text-secondary-color tracking-normal"/>
                    </div>
                </div>
                <div className="">
                    <EmblaCarousel slides={SLIDES} options={OPTIONS} />
                </div>
            </div>
       </section>
    )
}

export default Gallery