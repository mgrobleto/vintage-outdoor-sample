import { SocialLink } from "@/utils/social-link"
import Link from "next/link";
import React from "react"

interface Props {
    text: string;
    href:string;
    color: string;
    classname?: string
}

const PersonalizedButton : React.FC<Props> = ({text, href, color, classname}) => {

    return (
        <Link href={href} target="_blank" className=''>
            <button className={`rounded-3xl p-[15px] shadow-lg font-bold ${classname} mr-4 hover:translate-x-3 md:transform-none transition ease-in-out delay-50 duration-500`}
            onMouseEnter={(e) => e.currentTarget.style.color = color}
            onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
            >
                {text}
            </button>
        </Link>
        
    )
}

export default PersonalizedButton