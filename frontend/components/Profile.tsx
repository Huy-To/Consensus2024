"use client"

import React from 'react'
import { Container } from './base/Container'
import { Nav, ProfileNav} from './base/Nav'
import { Welcome } from './base/Welcome'
import { Card } from './base/Card'
import { useEffect, useState } from 'react';
import { fetchProfile, userProfile } from '../libs/storage'
import { ProfileSection } from './base/ProfileSection'


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
    console.log(userProfile());
    return (
        <div className='m-32 '>
            <Container>
                <Nav></Nav>
                <Welcome back='Back' name={profile.name} quote={profile.jobTitle}>
                <div className="text-black text-2xl ">{profile.location}</div>
                </Welcome>
                <ProfileNav></ProfileNav>
                <ProfileSection children={undefined} name={profile.name} about={profile.about} x={profile.x} github={profile.github} linkedin={profile.linkedin} website={profile.website}></ProfileSection>
            </Container>
        </div>
    )
}