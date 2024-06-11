"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import { redirect } from "next/navigation";
import { showConnect, AppConfig, UserSession } from "@stacks/connect"
import { Person, Profile } from '@stacks/profile';
import { useRouter } from "next/navigation"; // Import useRouter from next/navigation
import { Storage, connectToGaiaHub } from "@stacks/storage";
import { profile } from "console";
import { fetchProfile } from '../../libs/storage';


const appDomain = 'https://www.Eleutheria.com'; // shown in wallet pop-up
const myAppIcon = 'window.location.origin'; // + '/my_logo.png' // shown in wallet pop-up
const appConfig = new AppConfig(['store_write', 'publish_data'], 'https://Eleutheria.com');
export const userSession = new UserSession({ appConfig }); // Use this export from other files
export const storage = new Storage({ userSession });


export default function Home() {
  const [userData, setUserData] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [hasProfile, setHasProfile] = useState(false);
  const router = useRouter(); // Use useRouter for navigation

  // Authentication with the wallet 
  function authenticate() {
    showConnect({
      userSession, // Passing UserSession
      appDetails: {
        name: appDomain,
        icon: myAppIcon,
      },
      redirectTo: '/',
      onFinish: () => {
        window.location.reload()
      },
      onCancel: () => {
        console.log('oops'); // WHEN user cancels/closes pop-up
      },
    })
  }



  useEffect(() => {
    const profileCheck = async () => {
      if (userSession.isSignInPending()) {
        const userData = await userSession.handlePendingSignIn();
        setUserData(userData);
      } else if (userSession.isUserSignedIn()) {
        setLoggedIn(true);
        setUserData(userSession.loadUserData());

        try {
          const profile = await fetchProfile();
          if (!profile) {
            // Do something if fetchProfile() does not return anything
            router.push('/newUser');
          } else {
            // Do something if fetchProfile() returns a profile
            router.push('/landingPage');
          }
        } catch (error) {
          console.error('Error fetching profile:', error);
          // Handle error scenario, e.g., show an error message or redirect
        }
      }
    };

    profileCheck();
  }, [router]);

  return (
    <main className="w-screen h-screen flex flex-col justify-center items-center">
      <Head>
        <title>Authentication Page</title>
      </Head>
      <div className="w-full h-full z-0 absolute">
        <script type="module" src="https://unpkg.com/@splinetool/viewer@1.4.0/build/spline-viewer.js"></script>
        <spline-viewer url="https://prod.spline.design/JAJrUTiiOyvBfKPe/scene.splinecode"></spline-viewer>
      </div>
      <div className="absolute z-10 flex flex-col items-center">
        <p className="text-zinc-900 text-6xl pt-8 pb-8 font-mono bg-opacity-75 rounded z-10">
          Eleutheria DEMO
        </p>
        <button
          onClick={authenticate}
          className="text-white bg-gray-900 border border-gray-300 hover:opacity-50 inline-flex items-center px-4 py-2 text-sm space-x-2 font-medium transition rounded-xl cursor-pointer relative font-mono mt-4">
          <div className="flex items-center">
            <div>Authenticate</div>
          </div>
        </button>
      </div>
    </main>
  );
}