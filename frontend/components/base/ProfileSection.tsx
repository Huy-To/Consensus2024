"use client"
import React, { ReactNode } from 'react'

// ReactNode: This is a type alias for any valid React child, which includes string, number, JSX.Element, ReactFragment, ReactPortal, boolean, null, and undefined.
type Props = {
    children: ReactNode;
    name: string;
    about: string;
    x: string;
    github: string;
    linkedin: string;
    website: string;
    // Add other props here if needed
};

export const ProfileSection: React.FC<Props> = ({name, about, x, github, linkedin, website, children, ...other }) => {
    return (
        <div className='mt-32'>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* <!-- NFT Pic Card --> */}
                <div className="bg-white rounded-lg shadow-lg flex items-center justify-center h-80 col-span-1">
                    <span className="font-bold text-black ">NFT Pic</span>
                </div>
                {/* <!-- About Mac and Hobbies Cards --> */}
                <div className="col-span-1 lg:col-span-2 grid grid-rows-2 gap-8">
                    <div className="bg-white rounded-lg shadow-lg flex flex-col items-start p-4 h-36 space-y-4">
                        <span className="font-bold text-black ">About {name}:</span>
                        <span className='text-black '>{about}</span>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg flex flex-col items-start p-4 h-36 space-y-4
                ">
                        <span className="text-black font-bold">Hobbies:</span>
                        <span className='text-black '>Stacks</span>
                    </div>
                </div>
            </div>
            {/* <!-- Social Card --> */}
            <div className="mt-8">
                <div className="bg-white rounded-lg shadow-lg flex flex-col items-center p-4 h-36 space-y-4">
                    <span className="font-bold text-black ">SOCIAL LINKS</span>
                    <div className="flex flex-row space-x-12">
                        <span className='text-black '>{github}</span>
                        <span className='text-black '>{linkedin}</span>
                        <span className='text-black '>{x}</span>
                        <span className='text-black '>{website}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}