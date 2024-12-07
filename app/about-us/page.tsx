'use client';

import Image from "next/image";
import { CustomTitle, Paragraph } from "../components/Title";
import { PersonalizedButton } from "../components/Button";

const About : React.FC = () => {

    const text: string[] = [
        "At Vintage Outdoor Inc., we are passionate about transforming your outdoor spaces into breathtaking landscaping that enhance your lifestyle.",
        "With years of expertise in custom design, installation, and maintenance, our goal is to bring your vision to life, whether you're dreaming of a serene garden, a luxurious outdoor living space, or a vibrant and functional yard.",
        "But we don't just stop at the outdoors. We're excited to introduce Vintage Construction Inc., a new division of our company specalizing in high-quality construction services. From new home builds to remodels, ADUs, and commercial projects. Vintage Construction Inc. is here to make ypur construction dreams a reality."
    ]

    return (
       <section
            id="about"
            className="min-h-screen max-w-full bg-white"
        >
            <div className="flex flex-col xl:flex-row w-full h-full p-20 justify-around items-center">
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
                        {text.map((text, index) => (
                            <Paragraph
                            key={index}
                            text={[text]} // Encapsular el string en un array
                            color="#464646"
                            classname="tracking-wide"
                            />
                        ))}
                    </div>
                    <div className="read-more-btn">
                        <PersonalizedButton href="" text="Read more" color="#BF8A26" classname="text-white bg-[#BF8A26] hover:bg-[#eddb9b]"/>
                    </div>
                </div>
                
            </div>
       </section>
    )
}

export default About