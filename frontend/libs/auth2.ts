"use server"

import { userSession, getUserData, getPerson } from "./userSession";
import { showConnect } from "@stacks/connect"

const appDomain = 'https://www.Eleutheria.com'; // shown in wallet pop-up
const myAppIcon = window.location.origin; // + '/my_logo.png' // shown in wallet pop-up

// Authentication with the wallet 
export function authenticate() {
    showConnect({
        userSession, // Passing UserSession
        appDetails: {
            name: appDomain,
            icon: myAppIcon,
        },
        redirectTo: '/',
        onFinish: () => {
            window.location.assign("")
        },
        onCancel: () => {
            console.log('oops'); // WHEN user cancels/closes pop-up
        },
    })
}

  
