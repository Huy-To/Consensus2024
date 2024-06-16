import React from "react";

type Props = {
    children: React.ReactNode;
    // Add other props here if needed
}


// For Hiring Content and Community Content
export const FeedsLayout: React.FC<Props> = ({ children }) => {
    return (
        <div className="col-span-5 h-full mr-12">
            {children}
        </div>
    )   
}

export const Feeds: React.FC<Props> = ({ children }) => {
    return (
        <div className="flex flex-col justify-center items-center mb-12 mt-12 space-y-4">
            {children}
        </div>
    )
}

export const RightSide: React.FC<Props> = ({ children }) => {
    return (
        <div className="border-l-4 border-black col-span-2 h-full">
            <div className="flex flex-col pl-12 mt-12">
                <div className="text-black text-2xl">
                    {children}
                </div>

            </div>
        </div>
    )
}

// 1
export const Content: React.FC<Props> = ({ children }) => {
    return (
        <div className="grid grid-cols-7 w-full h-full">
            {children}
        </div>
    )
}