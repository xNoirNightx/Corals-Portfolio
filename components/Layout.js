// main font section
import {Indie_Flower} from '@next/font/google'
const Indie = Indie_Flower({
  subsets: ['latin'],
  variable:'--font-Indie',
  // if font changes change in tailwind config and add extra weight
  weight: ['400'],
});

//compoents imports here
import Nav from '../components/Nav'
import Header from '../components/Header'
import Topleftimg from '../components/TopLeftImg'

// font not loading ? sick of reading ignoring for now
const Layout = ({ children }) => {
  return (
  <div className={'page bg-site text-white bg-cover bg-no-repeat ${Indie.variable} font-Indie relative'}>
    <Topleftimg/>
    <Nav/>
     <Header/>
     {children}
  </div>
  );
};

export default Layout;
