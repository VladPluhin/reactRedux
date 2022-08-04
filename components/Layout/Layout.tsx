import React from 'react';
import Nav from '../Nav/Nav';

const MainLayout:React.FC = ({children})=>{
  return (
    <>
      <Nav/>
      {children}
    </>
  );
};
export  default MainLayout;