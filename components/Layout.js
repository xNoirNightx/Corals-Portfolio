import React, { lazy, Suspense } from 'react';
import { Indie_Flower } from '@next/font/google';

const Indie = Indie_Flower({
  subsets: ['latin'],
  variable: '--font-Indie',
  weight: ['400'],
});

const Nav = lazy(() => import('../components/Nav'));
const Header = lazy(() => import('../components/Header'));
const Topleftimg = lazy(() => import('../components/TopLeftImg'));
const TopRightImg = lazy(() => import('../components/TopRightImg'));
const BottomLeftImg = lazy(() => import('../components/BottomLeftImg'));
const Explosion = lazy(() => import('../components/BottomRightImg'));
const ParticlesBackground = lazy(() => import('../components/ParticlesBackground'));

const Layout = ({ children }) => {
  return (
    <div 
    className={`page bg-site text-white bg-cover bg-no-repeat ${Indie.variable} font-Indie relative`}
    >
      <Suspense fallback={<div>Loading...</div>}>
        <Topleftimg />
        <TopRightImg /> 
        <Nav />
        <Header />
        <BottomLeftImg /> 
        <Explosion />
        <ParticlesBackground />
        {children}
      </Suspense>
    </div>
  );
};

export default Layout;
