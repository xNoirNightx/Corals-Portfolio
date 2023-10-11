import { motion } from 'framer-motion';

const transitionVariants = {
  initial: {
    x: '100%',
    width: '100%',
    opacity: 0,
  },
  animate: {
    x: '0%',
    width: '0%',
    opacity: 0,
    transition: {
      delay: 0.2,
      duration: 0.6,
      ease: 'easeInOut',
    },
  },
  exit: {
    x: ['0%', '100%'],
    width: ['0%', '100%'],
    opacity: 0,
    transition: {
      delay: 0,
      duration: 0.6,
      ease: 'easeInOut',
    },
  },
};

const black = '#000'; // Black background color

const Transition = () => {
  return (
    <motion.div
      className='fixed top-0 bottom-0 right-full w-screen h-screen z-30'
      style={{ backgroundColor: black }}
      variants={transitionVariants}
      initial='initial'
      animate='animate'
      exit='exit'
    ></motion.div>
  );
};

export default Transition;
