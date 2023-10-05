// main font section
import {Indie_Flower} from '@next/font/google'
const cookie = Indie_Flower({
  subsets: ['latin'],
  variable:'--font-Indie_Flower',
  // if font changes change in tailwind config and add extra weight
  weight: ['400'],
});

//compoents imports here
import Nav from '../components/Nav'
import Header from '../components/Header'
import Topleftimg from '../components/TopLeftImg'

const Layout = ({ children }) => {
  return (
  <div className={'page'}>
    <Topleftimg/>
    <Nav/>
     <Header/>
     {children}
  </div>
  );
};

export default Layout;
