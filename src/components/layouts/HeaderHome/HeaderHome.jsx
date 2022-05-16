import React from 'react';
import {Logo} from "../../UI/Logo/Logo";
import { NavHome } from '../../UI/NavHome/NavHome';
import { TitlePage } from '../../UI/TitlePage/TitlePage';

export const HeaderHome = () => {
  return (
    <header className='headerHome'>
      <Logo/>
      <TitlePage/>
      <NavHome/>
    </header>

  )
}
