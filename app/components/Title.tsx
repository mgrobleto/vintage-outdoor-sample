"use client";

import React, { useState } from "react";

import { EB_Garamond, Open_Sans } from 'next/font/google'

const fontGaramond = EB_Garamond({ subsets: ['latin']})
const fontSans = Open_Sans({ subsets: ['latin']})


interface Props {
    title: string;
    color?: string;
    classname?: string;
}

export const CustomTitle: React.FC<Props> = ({title, color, classname}) => {
    return (
        <div className={`${fontGaramond.className}`}>
            <div className="flex flex-row items-center">
                <strong className={`${classname}`} style={{color: color}}>{title}</strong>
            </div>
        </div>
    )
}

export const CustomSecondTitle: React.FC<Props> = ({title, color, classname}) => {
    return (
        <div className={`xl:px-10 text-center xl:text-left ${fontSans.className}`}>
            <div className="flex flex-row items-center">
                <strong className={`text-lg xl:text-xl font-extralight ${classname}`} style={{color: color}}>{title}</strong>
            </div>
        </div>
    )
}