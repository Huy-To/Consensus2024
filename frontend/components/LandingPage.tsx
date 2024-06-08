
import React from 'react'
import { Container } from './base/Container'
import { Nav } from './base/Nav'
import { Welcome } from './base/Welcome'
import { Card } from './base/Card'
import { useEffect, useState } from 'react';
import { fetchProfile, userProfile } from '../libs/storage'

export default function LandingPage() {
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

  const { about, imageURL, jobTitle, name, socialLinks, x, github, linkedin, website } = profile;

  return (
    <div className='m-32 '>
      <Container>
        <Nav></Nav>
        <Welcome back ={undefined} name={profile.name} quote={'"Swimming In Circles"'} children={undefined}></Welcome>
        <Card></Card>
      </Container>
    </div>
  )
}
