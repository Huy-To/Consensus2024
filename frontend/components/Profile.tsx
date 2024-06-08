"use client"

import React from 'react'
import { Container } from './base/Container'
import { Nav } from './base/Nav'
import { Welcome } from './base/Welcome'
import { Card } from './base/Card'
import { useEffect, useState } from 'react';
import { fetchProfile, userProfile } from '../libs/storage'


export const Profile = () => {
    const [profile, setProfile] = useState(Object);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data: any = await userProfile();
                setProfile(data);
                console.log(typeof data);
            } catch (error) {
                setError('Error fetching profile');
            } finally {
                setLoading(false);
            }
        };

        fetchData();

    }, []);

    const { location, about, imageURL, jobTitle, name, socialLinks, x, github, linkedin, website } = profile;

    return (
        <div className='m-32 '>
            <Container>
                <Nav></Nav>
                <Welcome back='Back' name={profile.name} quote={profile.jobTitle}>
                <div className="text-black text-2xl ">{profile.location}</div>
                </Welcome>
                {/* <Card></Card> */}
            </Container>
        </div>
    )
}