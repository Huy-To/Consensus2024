"use client";
import { getUserData } from "../../../libs/auth";
import { useState, useEffect } from "react";
import React from 'react';
import Head from 'next/head';
import { uintCV, stringUtf8CV } from "@stacks/transactions";
import { StacksMocknet } from "@stacks/network";

export default function HiringPage() {
  const [conditions, setConditions] = useState("");
  const [price, setPrice] = useState();
  const userData = getUserData
  
  const network = new StacksMocknet();

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Hiring Page</title>
        <link href="/output.css" rel="stylesheet" />
      </Head>
      <div className="flex flex-col lg:flex-row h-full w-full overflow-hidden">
        {/* Sidebar */}
        <div className="w-full lg:w-1/4 bg-color-main p-4">
          <div className="flex justify-center items-center space-x-2 mb-8">
            <span className="text-5xl font-bold font-mono text-color-Logo">Eleutheria DEMO</span>
          </div>
          <div className="mb-8">
            <div className="flex items-center space-x-2">
              <div className="h-24 w-24 bg-gray-200 rounded-full"></div>
              <h1 className="text-xl font-bold">@Soju</h1>
            </div>
          </div>
          <nav>
            <ul>
              <li className="mb-2">
                <a href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg">
                  <span className="text-gray-900 font-semibold">Dashboard</span>
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg">
                  <span className="text-gray-900 font-semibold">Contracts</span>
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg">
                  <span className="text-gray-900 font-semibold">Friends</span>
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg">
                  <span className="text-gray-900 font-semibold">Community</span>
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg">
                  <span className="text-gray-900 font-semibold">Messages</span>
                </a>
              </li>
            </ul>
          </nav>
          <div className="mt-8">
            <h2 className="text-lg font-semibold">Followings</h2>
            <ul>
              <li className="flex items-center space-x-2 p-2">
                <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
                <span>Benna Su</span>
              </li>
            </ul>
          </div>
        </div>
        {/* Main Content */}
        <div className="w-full lg:w-3/4 bg-color-main-content p-4 flex flex-col">
          <div className="flex  flex-col justify-center md:flex-row mb-8">
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <button className="text-white bg-gray-900 border border-gray-300 hover:opacity-50 inline-flex items-center px-5 py-4 text-sm space-x-2 font-medium transition rounded-xl cursor-pointer relative font-mono">
                    <div className="flex items-center">
                      <div>Graphic & Design</div>
                    </div>
                  </button>
                </li>
                <li>
                  <button className="text-white bg-gray-900 border border-gray-300 hover:opacity-50 inline-flex items-center px-5 py-4 text-sm space-x-2 font-medium transition rounded-xl cursor-pointer relative font-mono">
                    <div className="flex items-center">
                      <div>Programming & Tech</div>
                    </div>
                  </button>
                </li>
                <li>
                  <button className="text-white bg-gray-900 border border-gray-300 hover:opacity-50 inline-flex items-center px-5 py-4 text-sm space-x-2 font-medium transition rounded-xl cursor-pointer relative font-mono">
                    <div className="flex items-center">
                      <div>Digital Marketing</div>
                    </div>
                  </button>
                </li>
                <li>
                  <button className="text-white bg-gray-900 border border-gray-300 hover:opacity-50 inline-flex items-center px-5 py-4 text-sm space-x-2 font-medium transition rounded-xl cursor-pointer relative font-mono">
                    <div className="flex items-center">
                      <div>Video & Animation</div>
                    </div>
                  </button>
                </li>
                <li>
                  <button className="text-white bg-gray-900 border border-gray-300 hover:opacity-50 inline-flex items-center px-5 py-4 text-sm space-x-2 font-medium transition rounded-xl cursor-pointer relative font-mono">
                    <div className="flex items-center">
                      <div>Writing & Translation</div>
                    </div>
                  </button>
                </li>
                <li>
                  <button className="text-white bg-gray-900 border border-gray-300 hover:opacity-50 inline-flex items-center px-5 py-4 text-sm space-x-2 font-medium transition rounded-xl cursor-pointer relative font-mono">
                    <div className="flex items-center">
                      <div>Music & Audio</div>
                    </div>
                  </button>
                </li>
                <li>
                  <button className="text-white bg-gray-900 border border-gray-300 hover:opacity-50 inline-flex items-center px-5 py-4 text-sm space-x-2 font-medium transition rounded-xl cursor-pointer relative font-mono">
                    <div className="flex items-center">
                      <div>Business</div>
                    </div>
                  </button>
                </li>
                <li>
                  <button className="text-white bg-gray-900 border border-gray-300 hover:opacity-50 inline-flex items-center px-5 py-4 text-sm space-x-2 font-medium transition rounded-xl cursor-pointer relative font-mono">
                    <div className="flex items-center">
                      <div>Consulting</div>
                    </div>
                  </button>
                </li>
                <li>
                  <button className="text-white bg-gray-900 border border-gray-300 hover:opacity-50 inline-flex items-center px-5 py-4 text-sm space-x-2 font-medium transition rounded-xl cursor-pointer relative font-mono">
                    <div className="flex items-center">
                      <div>Data</div>
                    </div>
                  </button>
                </li>
                <li>
                  <button className="text-white bg-gray-900 border border-gray-300 hover:opacity-50 inline-flex items-center px-5 py-4 text-sm space-x-2 font-medium transition rounded-xl cursor-pointer relative font-mono">
                    <div className="flex items-center">
                      <div>AI Services</div>
                    </div>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex-grow flex justify-center items-center">
            <div id="card" className="bg-color-card p-20 rounded-lg shadow-xl">
              <img src="/Pictures/DSC00068.JPG" alt="Event Image" className="block w-full h-48 object-cover rounded-lg mb-2" />
              <h3 className="text-lg font-semibold">Student at Umass Boston</h3>
              <p>"There is no rainbow without rain, there is no joy without pain"</p>
              <button className="text-white bg-gray-900 border border-gray-300 hover:opacity-50 inline-flex items-center px-5 py-4 text-sm space-x-2 font-medium transition rounded-xl cursor-pointer relative font-mono mt-6">
                <div className="flex items-center">
                  <div>Bless Me</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


