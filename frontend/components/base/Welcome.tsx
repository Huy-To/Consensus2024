import React, { ReactNode } from 'react'

// ReactNode: This is a type alias for any valid React child, which includes string, number, JSX.Element, ReactFragment, ReactPortal, boolean, null, and undefined.
type Props = {
    children: ReactNode;
    quote: string;
    name: string;
    back: ReactNode;
    // Add other props here if needed
  };


export const Welcome: React.FC<Props> = ({ back ,name, quote , children,  ...other }) => {
    return (
        // <!-- <Welcome> -->
        <div className="flex flex-col justify-center align-middle items-center mt-32 space-y-16">
            <div className="text-gray-900 text-7xl font-bold">
                Welcome {back}, {name}
            </div>
            <div className="h-80 w-80 bg-gray-700 rounded-full"></div>
            <div className="text-gray-500 text-2xl italic">
                {quote}
            </div>
            {children}
            {/* <!-- <button class="bg-black h-14 w-28 rounded-xl">
                <a className="text-white text-xl">My Hub</a>
            </button> --> */}
        </div>
        // <!-- </Welcome> -->
    )
}