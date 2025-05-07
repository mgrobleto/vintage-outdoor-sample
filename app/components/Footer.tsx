import Image from "next/image"
import { Paragraph } from "./Title"
import { FaEnvelope, FaFacebook, FaLinkedin, FaMapMarkerAlt, FaPhone, FaTwitter, FaWhatsapp } from "react-icons/fa"
import { SocialLink } from "@/utils/social-link"
import { SubmitButton } from "./Button"

interface LinksProps {
    href: string
    icon?: React.ReactElement
    children?: React.ReactNode
    color: string
}

interface Link {
    [key : string] : LinksProps
}

const Footer : React.FC = () => {

    const text = [
        "At the Vintage Outdoor Inc., we are passionate about transforming your outdoor spaces into breathtaking landscapes that enhance your lifestyle."
    ]

    const socialLinks : Link = {
        link1: {
            href: "https://www.facebook.com/",
            icon: <FaFacebook size={25}/>,
            color: "#BF8A26"
        },
        link2: {
            href: "https://web.whatsapp.com/",
            icon: <FaWhatsapp size={25}/>,
            color: '#BF8A26'
        },
        link3: {
            href: "https://www.linkedin.com/",
            icon: <FaLinkedin size={25}/>,
            color: '#BF8A26'
        },
        link4: {
           href: "https://x.com/",
            icon: <FaTwitter size={25}/>,
            color: '#BF8A26'
        }
    }
    return (
        <footer 
            className="relative py-20 w-full bg-[url('/images/outdoor/2.jpg')] bg-cover bg-center flex justify-center"
        >
            <div className="absolute inset-0 bg-black opacity-80"></div>
            <div className="relative grid grid-cols-1 lg:grid-cols-2 md:gap-10 xl:gap-20 items-start p-20 text-white w-full">
                <div className="main-info flex flex-col gap-6 items-center max-w-fit">
                    <div className="logo">
                        <Image 
                            src='/logo2.png'
                            alt="yearExperience"
                            width={100}
                            height={100}
                            />
                    </div>
                    <Paragraph 
                        text={text} 
                        classname="text-center max-w-md leading-relaxed" 
                        color="#464646"
                    />
                    
                    <div className="social-links flex flex-row space-x-4">
                        {Object.values(socialLinks).map((link, index) => (
                            <div className="bg-secondary-color p-4 rounded-full hover:translate-y-2 transition ease-in-out delay-150 cursor-pointer" key={index}>
                                <SocialLink
                                    key={index}
                                    href={link.href}
                                    icon={link.icon}
                                    color={link.color}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="company-more-info grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 items-start">
                    <div className="company-links">
                        <h3 className="text-lg xl:text-2xl font-bold mb-4">Our Company</h3>
                        <ul className="space-y-2">
                            <li><a href="#home" className="hover:underline">Home</a></li>
                            <li><a href="#about" className="hover:underline">About Us</a></li>
                            <li><a href="#services" className="hover:underline">Services</a></li>
                            <li><a href="#gallery" className="hover:underline">Gallery</a></li>
                            <li><a href="#contact" className="hover:underline">Contact</a></li>

                        </ul>
                    </div>
                    <div className="support-links">
                        <h3 className="text-lg xl:text-2xl font-bold mb-4">Support</h3>
                        <ul className="space-y-2">
                            <li><a href="#faq" className="hover:underline">FAQ</a></li>
                            <li><a href="#privacy" className="hover:underline">Privacy Policy</a></li>
                            <li><a href="#terms" className="hover:underline">Terms of Service</a></li>
                            <li><a href="#help" className="hover:underline">Help Center</a></li>

                        </ul>
                    </div>
                    <div className="newsletter">
                        <h3 className="text-lg xl:text-2xl font-bold mb-4">Join Our Newsletter</h3>
                        <form className="flex flex-col md:items-center md:space-x-4 space-y-4 md:space-y-0">
                            <div className="w-full md:w-auto">
                                    <div className="mt-2">
                                            <div className="flex items-center rounded-xl pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-secondary-color">
                                                <input type="email" name="username" aria-label="Email address" id="username" className="block w-full grow py-1.5 pl-1 pr-3 text-base bg-transparent text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6" placeholder="Enter your email" />
                                            </div>
                                    </div>
                            </div>
                            <div className="read-more-btn flex justify-end">
                                <SubmitButton 
                                    text="Subscribe" 
                                    color="#BF8A26" 
                                    classname="text-white bg-secondary-color hover:bg-white hover:text-secondary-color mt-8 tracking-normal w-40 md:w-48 lg:w-56 min-h-fit"
                                />
                            </div>
                        </form>
                        <div className="contact-info mt-6 space-y-2">
                            <div className="flex items-center space-x-2">
                                <div className="icon bg-secondary-color p-4 rounded-full">
                                    <FaPhone size={15}/>
                                </div> 
                                <span className="mx-4">(760) 350-5552</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="icon bg-secondary-color p-4 rounded-full">
                                    <FaMapMarkerAlt size={15}/> 
                                </div>
                                <span className="mx-4">Coachella Valley, CA</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="icon bg-secondary-color p-4 rounded-full">
                                    <FaEnvelope size={15}/> 
                                </div>
                                <span className="mx-4">info@vintageoutdoor.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer