import '../styles/globals.css';

// add componets here 
import Layout from '../components/Layout';
// import { Transition } from '../components/Transition';

// routes here
import {useRouter} from 'next/router'

//framer here
import { AnimatePresence, motion } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
<Layout>
{/* <AnimatePresence mode='popLayout'>
  <motion.div key={router.route} className='h-full'>
    <Transition/> 
     <Component {...pageProps} />;
</motion.div>
</AnimatePresence> */}
</Layout>
  );
}

export default MyApp;
