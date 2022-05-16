import React from 'react';
import { UInav } from '../UINav/UInav';

export const NavHome = () => {
  return (
    
    <nav className='navHome'>
      <UInav 
        style="nav" 
        reference="https://google.com" 
        textNav="Home"/>
      <UInav
        style="nav" 
        reference="https://google.com" 
        textNav="AboutUS"/>
      <UInav
        style="nav" 
        reference="https://google.com" 
        textNav="ContactusUS"/>
    </nav>
  )
}
