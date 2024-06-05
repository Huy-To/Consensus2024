import { useState, useEffect } from "react";
import Head from "next/head";
import {
    openContractCall,
} from "@stacks/connect";
import { uintCV, stringUtf8CV } from "@stacks/transactions";
import { StacksMocknet } from "@stacks/network";
import { userSession, getUserData } from "./v1/auth";


const [conditions, setConditions] = useState("");
const [price, setPrice] = useState({});
const userData = getUserData;

export const network = new StacksMocknet();

export const handleConditionsChange = (e) => {
    setConditions(e.target.value);
};

export const handlePriceChange = (e) => {
    setPrice(e.target.value);
};

export const handleSubmit = (e) => {
    e.preventDefault();
    
    const functionArgs = [stringUtf8CV(conditions), uintCV(price * 1000000)];  // 1,000,000 microstacks is equal to 1 STX.

};

export const [supContractAddress, setSupContractAddress] = useState("ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM");
const [supContractName, setSupContractName] = useState("Bless Me");
const [loading, setLoading] = useState(true);