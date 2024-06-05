"use client"
import React, { ReactNode } from 'react'

// ReactNode: This is a type alias for any valid React child, which includes string, number, JSX.Element, ReactFragment, ReactPortal, boolean, null, and undefined.
type Props = {
    children: ReactNode;
    // Add other props here if needed
};

// Website Containers
export const Container: React.FC<Props> = ({children, ...other}) => {
  return (
    <div
    {...other}
    className='w-screen h-screen'>
        {children}
    </div>
  )
}
