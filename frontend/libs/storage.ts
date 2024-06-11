// Initiating a storage client


import { hasAppPrivateKey } from "@stacks/connect";
import { userSession, storage } from "@/app/page";


const PROFILE_FILENAME = 'profile.json';

interface SocialLinks {
  x: string;
  github: string;
  linkedin: string;
  website: string;
};

interface Profile {
  about: string;
  imageURL: string;
  jobTitle: string;
  name: string;
  socialLinks: SocialLinks;
};


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
export const fetchProfile = async (): Promise<{ profile: any } | null> => {
  try {
    const profileJson: any = await storage.getFile(PROFILE_FILENAME, {
      decrypt: false,
      app: 'https://Eleutheria.com',
    });

    if (profileJson) {
      const json = JSON.parse(profileJson);
      return {
        profile: json?.profile,
      };
    }
    return {
      profile: null,
    };
  } catch (e) {
    console.log('refetching');
    try {
      const profileJson: any = await storage.getFile(PROFILE_FILENAME, {
        decrypt: false,
        app: 'https://Eleutheria.com',
        verify: false,
      });

      if (profileJson) {
        const json = JSON.parse(profileJson);
        return {
          profile: json?.profile,
        };
      }
      return {
        profile: null,
      };
    } catch (error) {
      console.error(error);
      // Ensure we return a value in case of error
      return {
        profile: null,
      };
    }
  }
};

  export const userProfile = async () => {
    return fetchProfile()
    .then((result) => {
      if (result && result.profile) {
        const profile = result.profile;
        const { about, imageURL, jobTitle, name, socialLinks, location } = profile;
        const { x, github, linkedin, website } = socialLinks;
        return { about, imageURL, jobTitle, name, socialLinks, x, github, linkedin, website, location }
        // Do something with the profile
      } else {
        console.log('Profile not found');
      }
    })
    .catch((error) => {
      console.error('Error fetching profile:', error);
    });
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

