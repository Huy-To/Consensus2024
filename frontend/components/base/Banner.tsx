import React from "react";

type Props = {
    bannerText: string;
    // Add other props here if needed
};


export const Banner: React.FC<Props> = ({bannerText}) => {
    return (
        <div>
            <div className="mt-32 flex justify-center items-center text-center">
                <div
                    className="w-full h-80 border-4 border-black text-black flex justify-center items-center font-semibold text-9xl">
                    {bannerText}
                </div>
            </div>
        </div>
    )
}