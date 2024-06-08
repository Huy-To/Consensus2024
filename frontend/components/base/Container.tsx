"use client"
import React, { ReactNode } from 'react'
import Head from 'next/head'

// ReactNode: This is a type alias for any valid React child, which includes string, number, JSX.Element, ReactFragment, ReactPortal, boolean, null, and undefined.
type Props = {
  children: ReactNode;
  // Add other props here if needed
};

// Website Containers
export const Container: React.FC<Props> = ({ children, ...other }) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Home Page</title>
      </Head>
      <div
        {...other}
        className=''>
        {children}
      </div>
    </>
  )
}
