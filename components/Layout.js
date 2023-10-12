import React, { lazy, Suspense } from 'react';
import { Indie_Flower } from '@next/font/google';

const Indie = Indie_Flower({
  subsets: ['latin'],
  variable: '--font-Indie',
  weight: ['400'],
});

const Nav = lazy(() => import('./Nav'));
const Header = lazy(() => import('./Header'));
const Topleftimg = lazy(() => import('./TopLeftImg'));
const TopRightImg = lazy(() => import('./TopRightImg'));
const BottomLeftImg = lazy(() => import('./BottomleftImg'));
const BottomRightImG = lazy(() => import('./BottomRightImg'));
const ParticlesBackground = lazy(() => import('./ParticlesBackground'));

const Layout = ({ children }) => {
  return (
    <div 
    className={`page bg-site text-white bg-cover bg-no-repeat ${Indie.variable} font-Indie relative`}
    >
      <Suspense fallback={<div>Loading...</div>}>
        <Topleftimg />
        <TopRightImg /> 
        <BottomLeftImg /> 
        <Nav />
        <Header />
        <BottomRightImG />
        <ParticlesBackground />
        {children}
      </Suspense>
    </div>
  );
};

export default Layout;
