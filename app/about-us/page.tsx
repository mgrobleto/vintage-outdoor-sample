'use client';

import Image from "next/image";
import { ScrollContext } from "@/utils/scroll-observer"
import { useContext } from "react"
import { CustomSecondTitle, CustomTitle } from "../components/Title";
import PersonalizedButton from "../components/Button";

const About : React.FC = () => {
    const { scrollY } = useContext(ScrollContext)

    return (
       <section
            id="about"
            className="min-h-screen max-w-full bg-white"
        >
            <div className="flex flex-row w-full h-full p-20 justify-around items-center">
                <div className="flex flex-col items-center justify-center h-full py-5">
                    <Image 
                    src='/images/about/yearExperience.png.svg'
                    alt="yearExperience"
                    width={400}
                    height={400}
                    />
                    <Image 
                    src='/images/outdoor/3.jpg'
                    alt="yearExperience"
                    width={400}
                    height={400}
                    className="rounded-lg shadow-lg"
                    />
                </div>

                <div className="flex flex-col items-start justify-center h-full py-10 max-w-[500px]">
                    <CustomTitle title="Welcome to Vintage Outdoor Inc." color="#BF8A26" classname="text-center xl:text-left text-xl italic font-normal capitalize xl:text-5xl leading-loose max-w-xs"/>
                    <div className="about-desc my-8">
                        <p className="mb-5">
                            At Vintage Outdoor Inc., we are passionate about transforming your outdoor spaces into 
                            breathtaking landscaping that enhance your lifestyle.
                        </p>
                        <p className="mb-5">
                            With years of expertise in custom design, installation, and maintenance, our
                            goal is to bring your vision to life, whether you&#x27;re dreaming of a serene garden,
                            a luxurious outdoor living space, or a vibrant and functional yard.
                        </p>
                        <p>
                           But we don&#x27;t just stop at the outdoors. We&#x27;re excited to introduce Vintage
                           Construction Inc., a new division of our company specalizing in high&#x2010;quality
                           construction services. From new home builds to remodels&#x2c; ADUs&#x2c; and commercial projects&#x2c;
                           Vintage Construction Inc. is here to make ypur construction dreams a reality.
                        </p>
                    </div>
                    <div className="read-more-btn">
                        <PersonalizedButton href="" text="Read more" color="#BF8A26" classname="text-white bg-[#BF8A26] hover:bg-white"/>
                    </div>
                </div>
                
            </div>
       </section>
    )
}

export default About