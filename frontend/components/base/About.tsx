import React, { ReactNode } from 'react'
import Link from 'next/link';

type Props = {
    marketplace: string;
    community: string;
    // Add other props here if needed
};

export const About: React.FC<Props> = ({marketplace, community}) => {
    return (
        <div>
            <div className="mt-32">
                <div className="flex flex-row space-x-8">
                    <div className="">
                        <span className="text-8xl font-bold text-black">About Eleutheria.</span>
                    </div>
                    <div className="w-3 py-48 bg-black rounded-xl">

                    </div>
                    <div className="flex flex-col space-y-9 w-full">
                        <div className="text-7xl font-bold text-gray-900">
                            <span className="text-yellow-300 text-7xl font-bold">Bitcoin </span>
                            was made for the
                            <span className="text-orange-500 text-7xl font-bold"> people.</span>
                        </div>
                        <div className="text-gray-900 text-7xl font-bold">
                            <span className="text-black">Eleutheria. </span>
                            is made to
                            <span className="text-blue-500"> connect</span>
                            <span className="text-orange-500 text-7xl font-bold"> people.</span>
                        </div>
                        <span className="text-7xl text-community font-bold underline">
                            <a href="#">read more...</a>
                        </span>
                    </div>
                </div>
                <div className="flex flex-col mt-32 space-y-3">
                    <div className="text-5xl text-black">
                        <span className="font-bold"> Decentralized Freelancers </span>
                    </div>
                    <div className="flex flex-row space-x-8 text-5xl font-bold">
                        <span className="underline text-black"> <Link href={marketplace}>Marketplace</Link> </span>
                        <span className="text-black">/</span>
                        <span className="underline text-black"><Link href={community}>Community.</Link></span>
                    </div>
                    <div className="h-20 w-20 rounded-none bg-gray-300">
                    </div>
                    <span className="text-black"> Browse through the [ Marketplace ] and our Community.</span>
                </div>
            </div>
        </div>
    )
}