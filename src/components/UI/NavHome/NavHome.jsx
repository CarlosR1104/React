import React from 'react';
//import { Link } from 'react-router-dom';
import { UInav } from '../UINav/UInav';

export const NavHome = () => {
  return (
    <nav >
      <UInav 
        style="UInav" 
        reference="https://google.com" 
        textNav="Home"
        />
      <UInav
        style="UInav" 
        reference="https://google.com" 
        textNav="AboutUS"
        />
      <UInav
        style="UInav" 
        reference="https://google.com" 
        textNav="ContactusUS"
        />
    </nav>
  )
}
