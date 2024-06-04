"use client"

import React from 'react';
import Head from 'next/head';
import { userSession, getUserAddress } from '../../../libs/auth';
import { AppConfig } from '@stacks/auth';
import { StacksTestnet } from '@stacks/network';
import {
  makeContractCall,
  broadcastTransaction,
  AnchorMode,
  FungibleConditionCode,
  makeStandardSTXPostCondition,
  bufferCVFromString,
} from '@stacks/transactions';
import { useEffect, useState } from 'react';

const network = new StacksTestnet();
const contractAddress = await getUserAddress();
const contractName = 'UserID'
const appConfig = new AppConfig(['store_write', 'publish_data']);

export default function newUser() {
  const [name, setName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [about, setAbout] = useState('');
  const [xLink, setXLink] = useState('');
  const [githubLink, setGithubLink] = useState('');
  const [websiteLink, setWebsiteLink] = useState('');
  const [linkedinLink, setLinkedinLink] = useState('');
  const [userPrincipal, setUserPrincipal] = useState('');
  const [userData, setUserData] = useState<any>(null);

  const txOptions = {
    contractAddress,
    contractName,
    functionName: 'add-user',
    functionArgs: [
      stringUtf8CV(name),
      stringUtf8CV(jobTitle),
      stringUtf8CV(about),
      stringUtf8CV(xLink),
      stringUtf8CV(githubLink),
      stringUtf8CV(websiteLink),
      stringUtf8CV(linkedinLink)
    ],
    senderKey: userSession.loadUserData().appPrivateKey,
    network: new StacksTestnet(),
    anchorMode: AnchorMode.Any
  };

  const transaction = await makeContractCall(txOptions);
  const result = await transaction.sign();
  await broadcastTransaction(result, new StacksTestnet());
};

const handleGetUser = async () => {
  const options = {
    contractAddress,
    contractName,
    functionName: 'get-user',
    functionArgs: [principalCV(contractAddress)],
    network: new StacksTestnet()
  };

  const result = await callReadOnlyFunction(options);
  setUserData(cvToJSON(result).value);
};



return (
  <>
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Edit Form</title>
      <link rel="stylesheet" href="/output.css" />
    </Head>
    <div className="bg-color-main w-screen h-screen">
      <section className="text-center mt-6 mb-6">
        <span className="block text-5xl font-bold font-mono text-color-Logo">Eleutheria DEMO</span>
        <span className="mt-6 block text-3xl font-semibold font-mono text-white">Profile Sign Up</span>
      </section>
      <section className="flex justify-center items-center">
        <form action="" className="w-1/2 h-full space-y-8">
          <div className="p-8 border-b md:col-span-1">
            <div className="text-center text-lg font-medium leading-6 text-gray-900">Profile Information</div>
            <div className="mt-2 text-sm text-gray-500 text-center">This information will be displayed publicly</div>
          </div>
          <div className="p-8 mt-5 border-b md:mt-0 md:col-span-2 grid grid-1 sm:grid-cols-2 gap-4">
            <div>
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-700">Name</label>
                <div></div>
              </div>
              <div className="flex my-2 rounded">
                <input
                  id="title"
                  name="title"
                  type="text"
                  className="flex-1 block w-full min-w-0 px-3 py-2 border text-gray-700 border-gray-300 rounded text-sm"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-700">Job Title</label>
                <div></div>
              </div>
              <div className="flex my-2 rounded">
                <input
                  id="description"
                  name="description"
                  type="text"
                  className="flex-1 block w-full min-w-0 px-3 py-2 border text-gray-700 border-gray-300 rounded text-sm"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-700">About</label>
                <div></div>
              </div>
              <div className="flex my-2 rounded">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="flex-1 block w-full min-w-0 px-3 py-2 border text-gray-700 border-gray-300 rounded text-sm"
                ></textarea>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-700">Profile image url</label>
                <div></div>
              </div>
              <div className="flex my-2 rounded">
                <input
                  id="profileImageUrl"
                  name="profileImageUrl"
                  type="text"
                  className="flex-1 block w-full min-w-0 px-3 py-2 border text-gray-700 border-gray-300 rounded text-sm"
                />
              </div>
            </div>
          </div>
          <div className="p-8 border-b md:col-span-1">
            <h3 className="text-lg font-medium leading-6 text-gray-900 text-center">Social links</h3>
            <p className="mt-2 text-sm text-gray-500 text-center">
              You can add socials like LinkedIn, Github, X, and your personal website
            </p>
          </div>
          <div className="p-8 mt-5 border-b md:mt-0 md:col-span-2 grid grid-1 sm:grid-cols-2 gap-4">
            <div>
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-700">X</label>
                <div></div>
              </div>
              <div className="flex my-2 rounded">
                <input
                  id="socials.twitter"
                  name="socials.twitter"
                  type="text"
                  className="flex-1 block w-full min-w-0 px-3 py-2 border text-gray-700 border-gray-300 rounded text-sm"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-700">Github</label>
                <div></div>
              </div>
              <div className="flex my-2 rounded">
                <input
                  id="socials.github"
                  name="socials.github"
                  type="text"
                  className="flex-1 block w-full min-w-0 px-3 py-2 border text-gray-700 border-gray-300 rounded text-sm"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-700">Website</label>
                <div></div>
              </div>
              <div className="flex my-2 rounded">
                <input
                  id="socials.website"
                  name="socials.website"
                  type="text"
                  className="flex-1 block w-full min-w-0 px-3 py-2 border text-gray-700 border-gray-300 rounded text-sm"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-700">Linkedin</label>
                <div></div>
              </div>
              <div className="flex my-2 rounded">
                <input
                  id="socials.linkedin"
                  name="socials.linkedin"
                  type="text"
                  className="flex-1 block w-full min-w-0 px-3 py-2 border text-gray-700 border-gray-300 rounded text-sm"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center p-8 space-x-4">
            <canvas style={{ position: 'fixed', pointerEvents: 'none', width: '100%', height: '100%', top: '300px', left: '200px' }}></canvas>
            <button
              type="submit"
              className="text-white bg-gray-900 border border-gray-300 hover:opacity-90 inline-flex items-center px-4 py-2 text-sm space-x-2 transition rounded-xl cursor-pointer font-medium relative"
            >
              Update profile
            </button>
          </div>
        </form>
      </section>
    </div>
  </>
);
};

