// Initiating a storage client

"use server"

import { hasAppPrivateKey } from "@stacks/connect";
import { getUserKeys, userSession, getUserData, getPerson, AppPrivateKey } from "./userSession"
import { Storage } from "@stacks/storage";

const storage = new Storage({ userSession });

const PROFILE_FILENAME = 'profile.json';

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















// TESTING:

// Storing AppPrivateKey into the UserSession
// userSession.store.getSessionData().userData = <any>{
//     appPrivateKey: privateKey,
// };

// userSession.store.getSessionData().userData = <any> {
//     hasAppPrivateKey
// }



