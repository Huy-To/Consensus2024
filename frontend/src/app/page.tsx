"use client";

import { authenticate, userSession, getUserData } from "../../libs/auth";
import { useState, useEffect } from "react";
import Head from "next/head";
import { redirect } from "next/navigation";
import { fetchProfile } from "../../libs/storage";
import { storage } from "../../libs/storage";

  export default function Home() {
    const [userData, setUserData] = useState({});
    const [loggedIn, setLoggedIn] = useState(false);
    const [hasProfile, setHasProfile] = useState(false);
  
    useEffect(() => {
      if (userSession.isSignInPending()) {
        userSession.handlePendingSignIn().then((userData) => {
          setUserData(userData);
        }).catch((error) => {
          console.error(error);
          // Handle error
        });
      }
    }, []);
  
    useEffect(() => {
      if (userSession.isUserSignedIn()) {
        setLoggedIn(true);
        setUserData(getUserData());
        storage.getFile('profile.json', { decrypt: true })
          .then((data) => {
            if (data) {
              // User has a profile, redirect to the main app page
              redirect('/homePage');
            } else {
              // User is signed in but doesn't have a profile, redirect to sign-up page
              redirect('/newUser');
            }
          })
          .catch((error) => {
            console.error(error);
            // Handle error
          });
      }
    }, [userSession.isUserSignedIn()]);

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
        <p className="text-zinc-950 text-6xl pt-8 pb-8 font-mono bg-opacity-75 rounded z-10">
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