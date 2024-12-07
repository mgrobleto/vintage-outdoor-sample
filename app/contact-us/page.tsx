import { FaPhone } from "react-icons/fa"
import { CustomTitle, Paragraph } from "../components/Title"
import { FaMapLocationDot } from "react-icons/fa6"
import { SubmitButton } from "../components/Button"

 
const ContactUs : React.FC = () => {

    const text: string[] = [
        "Whether you’re planning a stunning outdoor retreat, or a major construction project, Vintage Outdoor Inc. and Vintage Construction Inc. are here to help.",
        "Get in touch with us today to discuss your project, request a quote, or schedule a consultation."
    ] 
    return (
        <section id="contact-us" className="bg-gray-100 flex flex-col min-h-screen">
            <div className="header w-full leading-tight h-[250px] bg-[url('/images/outdoor/10.jpg')] bg-cover bg-fixed bg-bottom relative flex justify-center">
                <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
                <div className="relative z-10 flex flex-col justify-around items-center p-10">
                    <CustomTitle title="Contact us" color="white" classname="leading-loose capitalize text-xl xl:text-6xl"/>
                </div>
            </div>
            <div className="container py-20 px-8 mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-around">
                <div className="lg:w-1/2 text-center lg:text-left space-y-6">
                    <CustomTitle 
                        title="Ready to"
                        color="#464646"
                        classname="tracking-wide text-lg xl:text-7xl"
                    />
                    <CustomTitle 
                        title="Get started?"
                        color="#27CDF2"
                        classname="tracking-wide text-lg xl:text-7xl"
                    />
                    {text.map((text, index) => (
                        <Paragraph
                            key={index} 
                            text={[text]}
                            color="#464646"
                            classname="leading-relaxed font-semibold"
                        />
                    ))}

                    <div className="space-y-4">
                        <div className="flex flex-row items-center gap-3">
                            <div className="icon bg-second-default-btn p-4 rounded-full">
                                <FaPhone />
                            </div>
                            <p className="text-gray-800 font-medium text-lg xl:text-3xl">760 350 5552</p>
                        </div>
                        <div className="flex flex-row items-center gap-3">
                            <div className="icon bg-second-default-btn p-4 rounded-full">
                                <FaMapLocationDot />
                            </div>
                            <p className="text-gray-800 font-medium text-lg xl:text-3xl">Coachella Valley, CA</p>
                        </div>
                    </div>
                </div>

                <div className="lg:w-1/2 mt-12 lg:mt-0 bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
                    <form className="">
                        <div className="space-y-6">
                            <div className="border-b border-gray-900/10 pb-12">
                                <h3 className="text-lg xl:text-4xl font-bold text-[#27CDF2] mb-6">Send a Message</h3>
                                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div className="sm:col-span-4">
                                        <label htmlFor="username" className="block text-sm/6 xl:text-xl font-medium text-gray-900">Name</label>
                                        <div className="mt-2">
                                            <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-primary-color">
                                                <input type="text" name="username" id="username" className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6" placeholder="janesmith" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sm:col-span-4">
                                        <label htmlFor="email" className="block text-sm/6 xl:text-xl font-medium text-gray-900 capitalize">email address</label>
                                        <div className="mt-2">
                                            <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-primary-color">
                                                <input type="text" name="username" id="username" className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6" placeholder="janesmith" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-full">
                                        <label htmlFor="about" className="block text-sm/6 xl:text-xl font-medium text-gray-900">Message</label>
                                        <div className="mt-2">
                                            <textarea name="about" id="about" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary-color sm:text-sm/6"></textarea>
                                        </div>
                                        <p className="mt-3 text-lg text-gray-600 capitalize">Let&#x27;s get in touch</p>
                                        <div className="read-more-btn flex justify-end">
                                            <SubmitButton 
                                                text="Submit" 
                                                color="#BF8A26" 
                                                classname="text-white bg-primary-color hover:bg-white hover:text-primary-color mt-8 tracking-normal w-40 md:w-48 lg:w-56 min-h-fit"
                                            />
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactUs