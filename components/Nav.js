// icons from react-icons
import {
  HiHome,
  HiUser,
  HiOutlineCodeBracket,
  HiOutlineRectangleGroup,
  HiRocketLaunch,
  HiOutlineChatBubbleLeftEllipsis,
} from 'react-icons/hi2';



// nav data
export const navData = [
  { name: 'Home', path: '/', icon: <HiHome /> },
  { name: 'About', path: '/About', icon: <HiUser /> },
  { name: 'Skills', path: '/Skills', icon: <HiOutlineCodeBracket /> },
  { name: 'Projects', path: '/Projects', icon: <HiOutlineRectangleGroup /> },
  { name: 'Game', path: '/Game', icon: <HiRocketLaunch /> },
  { name: 'Contact', path: '/Contact', icon: <HiOutlineChatBubbleLeftEllipsis /> },
];

// learning to add next for client nav between pages
import Link from 'next/link';
import { useRouter } from 'next/router';

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <nav className="fixed top-0 right-0 flex items-start justify-end flex-col-reverse gap-x-4 z-50 w-full max-w-md h-screen">
      {/* inside */}
      <div className="flex items-center justify-between gap-x-4 px-4 md:px-40 h-16 py-4 text-3xl">
      {navData.map((link, index) => {
  return (
    <Link href={link.path} key={index}>
      <div className="shadow-lg hover:shadow-outline-white transition-shadow p-2 rounded-full ml-[-0.95rem]">
        {link.icon}
      </div>
    </Link>
  );
})}

      </div>
    </nav>
  );
};

export default Nav;