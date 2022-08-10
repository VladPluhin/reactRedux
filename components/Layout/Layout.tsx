import React from 'react';
import Nav from '../Nav/Nav';

const MainLayout = ({children}:{children: any})=>{
  return (
    <>
      <Nav/>
      {children}
    </>
  );
};
export  default MainLayout;