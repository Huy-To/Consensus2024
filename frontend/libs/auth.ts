"user server"
import { userSession } from "@/app/page";
import { Person, Profile } from '@stacks/profile';
import { getKeys } from "@stacks/connect";

const appDomain = 'https://www.Eleutheria.com'; // shown in wallet pop-up
const myAppIcon = window.location.origin; // + '/my_logo.png' // shown in wallet pop-up



const appPrivateKey = userSession.loadUserData().appPrivateKey;
const hubUrl = userSession.loadUserData().hubUrl
const profile = userSession.loadUserData().profile


// Get UserData on Stacks Ecosystem
export function getUserData() {
    return userSession.loadUserData();
  }
  
  // Store the current user's profile in the class Person
  export function getPerson() {
    return new Person(getUserData().profile);
  }
  
  // Get Private Key, and Public Key of the current user
  export function getUserKeys() {
    if (!userSession.isUserSignedIn) {
      throw new Error("User session is not initialized");
    }
  
    const keys =  getKeys(userSession);
  
    return {
      userPrivateKey: keys.privateKey,
      userPublicKey: keys.publicKey
    };
  }
  
  // Get AppPrivateKey (the appPrivateKey is automatically derived and provided by the authentication process)
  export const AppPrivateKey = getUserData().appPrivateKey;
  
  // Get Gaia URL (the Gaia URL is automatically derived and provided by the authentication process)
  export const gaiaUrl = getUserData().hubUrl;
  
  
  export const proFile = getUserData().profile;
  

// PROFILE and PERSON provides a layout for the user's profile => Store them in GAIA

// export const getUserAddress = async () => {
//     const userData = await getUserData();
//     return userData.profile.stxAddress;
//   };
  
// If the user does not have a profile in Gaia => Redirect to Sign Up page
// Else => Redirect to Home page
