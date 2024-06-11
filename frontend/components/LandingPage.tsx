
import React from 'react'
import { Container } from './base/Container'
import { LandingNav } from './base/Nav'
import { Welcome } from './base/Welcome'
import { Card } from './base/Card'
import { useEffect, useState } from 'react';
import { fetchProfile, userProfile } from '../libs/storage'

export default function LandingPage({ more }: {more: React.ReactNode}): React.JSX.Element {
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

  const { about, imageURL, jobTitle, name, socialLinks, x, github, linkedin, website, location } = profile;
  console.log('About:', profile.about);
  console.log('Image URL:', profile.imageURL);
  console.log('Job Title:', profile.jobTitle);
  console.log('Location:', profile.location);
  console.log('Name:', profile.name);
  console.log('Social Links:', profile.socialLinks);
  console.log('X:', profile.x);
  console.log('GitHub:', profile.github);
  console.log('LinkedIn:', profile.linkedin);
  console.log('Website:', profile.website);
  return (
    <div className='m-32 '>
      <Container>
        <LandingNav></LandingNav>
        <Welcome back={undefined} name={profile.name} quote={'"Swimming In Circles"'} children={undefined}></Welcome>
        {more}
      </Container>
    </div>
  )
}
