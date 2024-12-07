'use client';

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface LinksProps {
    href: string
    icon?: React.ReactElement
    children?: React.ReactNode
    color: string
    classname?: string
}

export const SocialLink : React.FC<LinksProps> = ({ href, icon, color ,children, classname }) => {
    return (
        <Link href={href} target="_blank" className={`group my-1`}>
            <div 
                className={`group min-w-fit min-h-fit flex flex-row items-center justify-start text-xs xl:text-lg`}
            >
                <div className={`mr-3 hover:translate-y-3 md:transform-none transition ease-in-out delay-50 duration-500 ${classname}`}>{icon}</div>
                <div className='font-semibol'> {children} </div>
            </div>
        </Link>
    )
}