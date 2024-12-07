'use client';

import { ScrollContext } from "@/utils/scroll-observer"
import { useContext } from "react"
import { CustomSecondTitle, CustomTitle } from "../components/Title";
import { PersonalizedButton } from "../components/Button";

const Intro : React.FC = () => {
    const { scrollY } = useContext(ScrollContext)

    return (
       <section
            id="home"
            className="relative min-h-screen max-w-full bg-[url('/images/outdoor/2.jpg')] bg-cover bg-center"
        >
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="relative flex flex-col w-full h-full p-20 justify-around">
                <div className="flex flex-col items-start justify-center h-full py-5">
                    <CustomTitle title="Transforming spaces, building dreams" color="white" classname="py-5 xl:p-10 text-center xl:text-left text-xl uppercase xl:text-6xl leading-loose max-w-3xl"/>
                    <CustomSecondTitle title="Landscaping &#x7c; Outdoor Linving &#x7c; Construction Services" color="white" classname="tracking-wide"/>
                    <div className="flex flex-row justify-between m-5">
                        <PersonalizedButton href="" text='Explore Our Services' classname="bg-second-default-btn hover:text-second-default-btn hover:bg-white text-white" color='#27CDF2'/>
                        <PersonalizedButton href="" text='View Our Work' classname="bg-second-default-btn hover:text-second-default-btn hover:bg-white text-white" color='#27CDF2'/>
                    </div>
                </div>

                <div className="flex flex-col items-end w-full h-full py-10">
                    <CustomTitle title="From Vision to Reality," color="white" classname="text-center xl:text-center text-xl italic font-normal capitalize xl:text-3xl leading-loose max-w-sm"/>
                    <CustomTitle title="Inside and Out" color="white" classname="text-center xl:text-center text-xl italic font-normal capitalize xl:text-3xl leading-loose max-w-sm"/>
                </div>
                
            </div>
       </section>
    )
}

export default Intro