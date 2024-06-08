import React from "react";

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