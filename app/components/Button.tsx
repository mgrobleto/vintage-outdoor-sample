import Link from "next/link";
import React from "react"

interface Props {
    text: string;
    href:string;
    color: string;
    classname?: string
    icon?: React.ReactElement
}

interface SubmitButton {
    text: string;
    onClick?: () => void;
    color?: string;
    classname?: string;
    icon?: React.ReactElement
}

export const PersonalizedButton : React.FC<Props> = ({text, href, color, classname, icon}) => {

    return (
        <Link href={href} target="_blank" className='mr-4'>
            <button className={`rounded-3xl py-[15px] px-10 shadow-xl font-semibold ${classname} hover:translate-x-3 md:transform-none transition ease-in-out delay-50 duration-500`}
            onMouseEnter={(e) => e.currentTarget.style.color = color}
            onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
            >
                {text}
            </button>
        </Link>
        
    )
}

export const PersonalizedButtonWithIcon: React.FC<Props> = ({text, href, color, classname, icon}) => {
    return (
        <Link href={href} target="_blank" className={`group my-1`}>
            <div className={`group min-w-fit min-h-fit flex flex-row items-center justify-center rounded-3xl p-3 shadow-xl font-bold ${classname} hover:translate-x-3 md:transform-none transition ease-in-out delay-50 duration-500`}>
                <div className='font-semibol w-full'> {text} </div>
                <div className='text-2xl m-2'>
                    {icon}
                </div>
            </div>
        </Link>
    )
}

export const SubmitButton : React.FC<SubmitButton> = ({text, onClick, color, classname, icon}) => {
    return (
        <button
            type="submit"
            onClick={onClick}
            className={`group flex flex-row items-center justify-center rounded-3xl p-[15px] shadow-xl font-bold ${classname}`}
        >
            <div className="div">{text}</div>
            {icon && (
                <div className="transform transition-transform ease-in-out delay-50 duration-500 hover:translate-x-3">{icon}</div>
            )}
        </button>
    )
}