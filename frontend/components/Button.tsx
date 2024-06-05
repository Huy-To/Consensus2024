"use client"
import React, { ReactNode } from 'react'

// ReactNode: This is a type alias for any valid React child, which includes string, number, JSX.Element, ReactFragment, ReactPortal, boolean, null, and undefined.
type Props = {
    children: ReactNode;
    // Add other props here if needed
};

// Export Primary Button For Authenticate Button
export const PrimaryButton: React.FC<Props> = ({ children, ...other }) => { //Children could be nested ["Components" or "Contents"] | ...other implicates more future classNames will be added later
    return (
        <button
            {...other}
            className="text-white bg-gray-900 border border-gray-300 hover:opacity-50 inline-flex items-center px-4 py-2 text-sm space-x-2 font-medium transition rounded-xl cursor-pointer relative font-mono mt-4">
            <div className="flex items-center">
                <div>{children}</div>
            </div>
        </button>
    )
}

// Export Primary Button For Industries Button
export const SecondaryButton: React.FC<Props> = ({ children, ...other }) => {
    return (
        <button className="text-white bg-gray-900 border border-gray-300 hover:opacity-50 inline-flex items-center px-5 py-4 text-sm space-x-2 font-medium transition rounded-xl cursor-pointer relative font-mono">
            <div className="flex items-center">
                <div>{children}</div>
            </div>
        </button>
    )
}

