// Initiating a storage client
"use server"

import { hasAppPrivateKey } from "@stacks/connect";
import { userSession, getUserData, getPerson, getUserKeys, AppPrivateKey, gaiaUrl } from "./userSession"
import { Storage } from "@stacks/storage";

export const storage = new Storage({ userSession });
const appPrivateKey = AppPrivateKey;
const PROFILE_FILENAME = 'profile.json';
const person = getPerson();


export const userInformation = {
    name: '',
    jobTitle: '',
    imageURL: '',
    about: '',
    socialLinks: {
        x: '',
        github: '',
        linkedin: '',
        website: '',
    }
}


// saveProfile in Gaia
export const saveProfile = async (profile: any) => {
    return await storage.putFile(
        PROFILE_FILENAME,
        JSON.stringify({ profile, isPublic: true }),
        {
            encrypt: false,
            dangerouslyIgnoreEtag: true
        }
    )
}

// fetchProfile in Gaia
export const fetchProfile = async (profile: any) => {
    try {
        const profileJson: any = await storage.getFile(PROFILE_FILENAME, {
            decrypt: false,
            app: 'https://Eleutheria.com',
        });
        return profileJson;
    }
} 
//AUTHENTICATION FIRST => UserData (STACKS ECOSYSTEM Generates UserData after authentication)













// TESTING:

// Storing AppPrivateKey into the UserSession
// userSession.store.getSessionData().userData = <any>{
//     appPrivateKey: privateKey,
// };

// userSession.store.getSessionData().userData = <any> {
//     hasAppPrivateKey
// }

