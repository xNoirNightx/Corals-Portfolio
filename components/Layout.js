import { Indie_Flower } from '@next/font/google';
// fixed font not loading
const Indie = Indie_Flower({
  subsets: ['latin'],
  variable: '--font-Indie',
  weight: ['400'],
});

import Nav from '../components/Nav';
import Header from '../components/Header';
import Topleftimg from '../components/TopLeftImg';
import TopRightImg from '../components/TopRightImg'; 
import BottomLeftImg from '../components/BottomLeftImg';
import BottomRightImg from '../components/BottomRightImg';
import ParticlesBackground from '../components/ParticlesBackground';

const Layout = ({ children }) => {
  return (
    <div 
    className={`page bg-site text-white bg-cover bg-no-repeat ${Indie.variable} font-Indie relative`}
    >
      <ParticlesBackground />
      <Topleftimg />
      <TopRightImg /> 
      <Nav />
      <Header />
      <BottomLeftImg /> 
      <BottomRightImg />
      {children}
    </div>
  );
};

export default Layout;
