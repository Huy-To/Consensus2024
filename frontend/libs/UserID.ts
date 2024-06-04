
import React from 'react';
import Head from 'next/head';
import { userSession, getUserAddress } from './auth';
import { StacksTestnet } from '@stacks/network';
import {
  makeContractCall,
  callReadOnlyFunction,
  AnchorMode,
  stringUtf8CV,
  principalCV,
  cvToJSON,
  broadcastTransaction
} from '@stacks/transactions';
import { useEffect, useState } from 'react';

const network = new StacksTestnet();
const contractAddress = getUserAddress;
const contractName = 'UserID'

async function addUser(name: string, jobTitle: string, about: string, xLink: string, githubLink: string, websiteLink: string, linkedinLink: string) {
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
    network,
    anchorMode: AnchorMode.Any
  };

  const transaction = await makeContractCall(txOptions);
  const result = await transaction.sign();
  await broadcastTransaction(result, network);
}

async function getUser(userPrincipal: string) {
  const options = {
    contractAddress,
    contractName,
    functionName: 'get-user',
    functionArgs: [principalCV(userPrincipal)],
    network
  };

  const result = await callReadOnlyFunction(options);
  return cvToJSON(result);
}


document.getElementById('addUserForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const jobTitle = document.getElementById('jobTitle').value;
    const about = document.getElementById('about').value;
    const xLink = document.getElementById('xLink').value;
    const githubLink = document.getElementById('githubLink').value;
    const websiteLink = document.getElementById('websiteLink').value;
    const linkedinLink = document.getElementById('linkedinLink').value;
  
    await addUser(name, jobTitle, about, xLink, githubLink, websiteLink, linkedinLink);
  });
  
  // HTML handling to get user information
  document.getElementById('getUserForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const userPrincipal = document.getElementById('userPrincipal').value;
    const userData = await getUser(userPrincipal);
    document.getElementById('userData').innerText = JSON.stringify(userData, null, 2);
  });