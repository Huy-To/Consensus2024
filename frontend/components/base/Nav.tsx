import React, { ReactNode } from 'react'

// ReactNode: This is a type alias for any valid React child, which includes string, number, JSX.Element, ReactFragment, ReactPortal, boolean, null, and undefined.
type Props = {
    children: ReactNode;
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
                    <a href="#" className="text-gray-700 text-5xl">Hire</a>
                    <a href="#" className="text-gray-700 relative text-5xl">
                        Jobs
                        <span className="absolute top-0 right-0 h-1 w-1 bg-red-600 rounded-full"></span>
                    </a>
                    <div className="h-16 w-16 bg-gray-700 rounded-full"></div>
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