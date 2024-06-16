import React, { ReactNode } from 'react'
import Link from 'next/link';
// ReactNode: This is a type alias for any valid React child, which includes string, number, JSX.Element, ReactFragment, ReactPortal, boolean, null, and undefined.
type Props = {
    children: ReactNode;
    topic: string;
    
    // Add other props here if needed
};

export const Nav = () => {
    return (
        // <!-- <Nav> -->
        <div className="flex justify-between items-cente">
            {/* <!-- Left side: Logo --> */}
            <div className="text-9xl font-extrabold text-black">
                Eleutheria.
            </div>
            <div className="flex flex-col items-center space-y-6 pb-7">
                <nav className="flex items-center space-x-16">
                    <a href="#" className="text-gray-700 text-5xl">Community</a>
                    <a href="#" className="text-gray-700 text-5xl">Marketplace</a>
                </nav>
            </div>
        </div>
        // <!-- </Nav> -->
    )
}

export const ProfileNav = () => {
    return (
        <div className="flex justify-center items-center mt-32">
            <div className="flex flex-col items-center space-y-6 pb-7">
                <nav className="flex items-center space-x-16">
                    <a href="#" className="text-gray-700 text-3xl">About</a>
                    <a href="#" className="text-gray-700 text-3xl">Blog</a>
                    <a href="#" className="text-gray-700 relative text-3xl">
                        Works
                    </a>
                    <a href="#" className="text-gray-700 relative text-3xl">
                        Memberships
                    </a>
                </nav>
            </div>
        </div>
    )
}

export const LandingNav = () => {
    return (
        <div className="flex justify-between items-cente">
            <div className="text-9xl font-extrabold text-black">
                Eleutheria.
            </div>
        </div>
    )
}

export const HiringNav = () => {
    return (
        <div className="flex justify-between items-center">
            <div className="text-9xl font-extrabold text-black">
                Eleutheria.
            </div>
            <div className="flex flex-col items-center space-y-6 pb-7">
                <nav className="flex items-center space-x-16">
                    <a href="#" className="text-gray-700 text-5xl">Community</a>
                    <div className="h-16 w-16 bg-gray-700 rounded-full"></div>
                </nav>
            </div>
        </div>
    )
}

export const TopicNav = () => {
    return (
        <div>
            <div className="flex justify-center items-center mt-12 mb-12">
                <div className="flex flex-col items-center space-y-6 pb-7">
                    <nav className="flex items-center space-x-16 flex-wrap">
                        <a href="" className="text-black text-2xl">+</a>
                        <a href="#" className="text-black text-2xl">Graphic Design</a>
                        <a href="#" className="text-black text-2xl">Blockchain</a>
                        <a href="#" className="text-black text-2xl">Music</a>
                        <a href="#" className="text-black text-2xl">Networking</a>
                    </nav>
                </div>
            </div>
            <div className="text-center">
                Search Bar
            </div>
        </div>
    )
}