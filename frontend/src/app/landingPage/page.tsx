"use client";

import { useRouter } from 'next/navigation'
import React from 'react';
import Head from 'next/head';
import { userSession } from '../page';
import { storage } from '../page';
import { fetchProfile, userProfile } from '../../../libs/storage';
import { useEffect, useState } from 'react';
import LandingPage from '../../../components/LandingPage';


const HomePage: React.FC = () => {

  const router = useRouter();
  const [profile, setProfile] = useState(Object);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: any = await userProfile();
        setProfile(data);
        console.log(typeof data);
      } catch (error) {
        setError('Error fetching profile');
      } finally {
        setLoading(false);
      }
    };

    fetchData();

  }, []);

  const { about, imageURL, jobTitle, name, socialLinks, x, github, linkedin, website } = profile;

  return (
    <div className=''>
      <LandingPage></LandingPage>
    </div>

  );
};

export default HomePage;

{/* <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Home Page</title>
      </Head>
      <body className="bg-color-main h-full">
        <section className="text-center mt-6 mb-6">
          <span className="block text-5xl font-bold font-mono text-color-Logo">Eleutheria DEMO</span>
        </section>
        <section className="text-center mb-6">
          <span className="block text-3xl font-semibold font-mono text-white">Welcome</span>
        </section>
        <section className="flex flex-col justify-center items-center mb-6">
          <div className="h-24 w-24 bg-gray-200 rounded-full mb-6"></div>
          <button className="block text-3xl font-semibold font-mono text-white"
          onClick={() => router.push('../newUser')}>{profile.name}</button>
        </section>
        <section className="relative flex justify-center items-center h-screen">
          <div className="absolute inset-0 z-0 w-full h-auto">
            <script type="module" src="https://unpkg.com/@splinetool/viewer@1.3.8/build/spline-viewer.js"></script>
            <spline-viewer
              loading-anim-type="spinner-big-dark"
              url="https://prod.spline.design/IOHZ8ukIbZFgXjnL/scene.splinecode"
            ></spline-viewer>
          </div>
          <p className="absolute text-gray-100 text-6xl font-mono bg-opacity-75 rounded z-10">
            Instead of SLACKING, You could be STACKING
          </p>
        </section>
        <section className="relative flex flex-col justify-center items-center h-screen">
          <div className="absolute inset-0 z-0 w-full h-auto">
            <script type="module" src="https://unpkg.com/@splinetool/viewer@1.4.0/build/spline-viewer.js"></script>
            <spline-viewer
              loading-anim-type="spinner-big-dark"
              url="https://prod.spline.design/lzYYF9BPBYV6fbqK/scene.splinecode"
            ></spline-viewer>
          </div>
          <button
            className="hover:bg-gray-300 mt-80 px-4 py-2 bg-color-button rounded-xl relative text-white text-6xl font-mono bg-opacity-75 z-10 border-solid border-lime-300 border-2"
            onClick={() => router.push('/hiringPage')} // Add onClick handler
          >
            Hire
          </button>
        </section>
        <section className="relative flex flex-col justify-center items-center h-screen">
          <div className="absolute inset-0 z-0 w-full h-auto">
            <script type="module" src="https://unpkg.com/@splinetool/viewer@1.4.0/build/spline-viewer.js"></script>
            <spline-viewer url="https://prod.spline.design/ogC99Q5mCVmlvDPx/scene.splinecode"></spline-viewer>
          </div>
          <p className="absolute text-black text-6xl font-bold font-mono bg-opacity-75 rounded z-10">
            Coming Soon
          </p>
        </section>
      </body>
    </> */}
