// Initiating a storage client

import { hasAppPrivateKey } from "@stacks/connect";
import { userSession, storage } from "@/app/page";


const PROFILE_FILENAME = 'profile.json';



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
export const fetchProfile = async () => {
    try {
      const profileJson: any = await storage.getFile(PROFILE_FILENAME, {
        decrypt: false,
        app: 'https://Eleutheria.com',
      });
      if (profileJson) {
        const json = JSON.parse(profileJson);
        return {
          profile: json?.profile
        };
      }
      return {
        profile: null
      };
    } catch (e) {
      console.log('refetchiching');
      try {
        const profileJson: any = await storage.getFile(PROFILE_FILENAME, {
          decrypt: false,
          app: 'https://Eleutheria.com',
          verify: false
        });
        if (profileJson) {
          const json = JSON.parse(profileJson);
          return {
            profile: json?.profile
          };
        }
        return {
          profile: null
        };
      } catch (error) {
        console.error(error);
      }
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

