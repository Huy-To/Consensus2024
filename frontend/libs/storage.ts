// Initiating a storage client

"use server"

import { hasAppPrivateKey } from "@stacks/connect";
import { getUserKeys, userSession, getUserData, getPerson } from "./userSession"
import { Storage } from "@stacks/storage";

// User's PrivateKey 
const { userPrivateKey, userPublicKey } = getUserKeys();

// Getting App PrivateKey (the appPrivateKey is automatically derived and provided by the authentication process)
const privateKey = userSession.loadUserData().appPrivateKey

const storage = new Storage({userSession});
















// TESTING:

// Storing AppPrivateKey into the UserSession
// userSession.store.getSessionData().userData = <any>{
//     appPrivateKey: privateKey,
// };

// userSession.store.getSessionData().userData = <any> {
//     hasAppPrivateKey
// }



