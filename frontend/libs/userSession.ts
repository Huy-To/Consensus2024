// A reusable UserSession instance to store authentication state in localStorage.
"use server"


import { AppConfig, UserSession, getKeys } from '@stacks/connect';
import { Person, Profile } from '@stacks/profile';
import { makeECPrivateKey, getPublicKeyFromPrivate } from '@stacks/encryption';


const appConfig = new AppConfig(['store_write', 'publish_data'], 'https://Eleutheria.com');
export const userSession = new UserSession({ appConfig }); // Use this export from other files

// Get UserData on Stacks Ecosystem
export function getUserData() {
    return userSession.loadUserData();
  }

// Get The Person with the corresponding UserData on Stacks Ecosystem
export function getPerson() {
    return new Person(getUserData().profile);
  }

// Get Private Key, and Public Key of the current user
export function getUserKeys() {
  if (!userSession.isUserSignedIn) {
    throw new Error("User session is not initialized");
  }  

  const keys = getKeys(userSession);

  return {
    userPrivateKey: keys.privateKey,
    userPublicKey: keys.publicKey
  };
}

// Getting App PrivateKey (the appPrivateKey is automatically derived and provided by the authentication process)
export const AppPrivateKey = getUserData().appPrivateKey;