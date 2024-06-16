import React from "react";
import Link from "next/link";

type Props = {
    profile: string;
};


export const Card = () => {
    return (
        // <!-- <Services Card> -->
    <div className="flex flex-row justify-center items-center mt-32 space-x-24 h-full">
        <div className="w-80 h-96 rounded-lg shadow-lg text-center bg-white flex items-center justify-center">
            <span className="font-bold">Looking for Talents?</span>
        </div>
        <div className="w-80 h-96 rounded-lg shadow-lg text-center bg-white flex items-center justify-center">
            <span className="font-bold">Blog</span>
        </div>
        <div className="w-80 h-96 rounded-lg shadow-lg text-center bg-white flex items-center justify-center">
            <span className="font-bold">Comming Soon</span>
        </div>
    </div>
    // <!-- <Services Card> -->
    )
}

export const HiringCard: React.FC<Props> = ({profile}) => {
    return (
        <div className="ring-0 w-full h-96 p-8 rounded-2xl hover:ring shadow-md hover:shadow-none">
                    
                    <div className="flex flex-col">
                        <div className="flex flex-row justify-between">

                            {/* <!-- BIO --> */}
                            <div className="flex flex-col space-y-4 mr-8">
                                <span className="text-3xl text-black">Author: Mac Miller</span>
                                <span className="text-3xl text-black">Title: Artist</span>
                                <span className="text-3xl text-black">Swimming in Circles is a double album that consists of Mac
                                    Miller's final two studio albums: Swimming (2018) and Circles (2020).</span>
                            </div>
                            {/* <!-- BIO --> */}
                             
                            {/* <!-- Image --> */}
                            <div className="flex flex-col items-center space-y-4">
                                <div className="border-2 h-52 w-52 mr-12">

                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between mt-20">
                            <span className="text-xl text-black">210 Followers | 1 Mention</span>
                            <span className="text-4xl text-right font-semibold text-black"><Link href={profile}>View Profile...</Link></span>
                        </div>
                    </div>
                </div>
    )
}