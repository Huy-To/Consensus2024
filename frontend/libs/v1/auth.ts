import { StacksMainnet, StacksMocknet, StacksTestnet } from '@stacks/network';
import { AppConfig, UserSession, showConnect } from '@stacks/connect';
import { Person } from '@stacks/profile';

const appConfig = new AppConfig(
  ['store_write', 'publish_data'],
  'https://Eleutheria.com',
);

console.log('appConfig', appConfig);

export const userSession = new UserSession({ appConfig });

export function authenticate() {
  showConnect({
    appDetails: {
      name: 'https://Eleutheria.com',
      icon: window.location.origin
    },
    redirectTo: '/homePage',
    onFinish: () => {
      window.location.assign('/homePage');
    },
    userSession
  });
}

export function getUserData() {
  return userSession.loadUserData();
}

export function getPerson() {
  return new Person(getUserData().profile);
}

const testnet = new StacksTestnet();
const devnet = new StacksMocknet();


// GETTING Address of the current User
export const getUserAddress = async () => {
  const userData = await getUserData();
  return userData.profile.stxAddress;
};