import Image from "next/image";
import { motion } from "framer-motion";
import Avatar from "../components/Avatar";
import ResumeBtn from "../components/ResumeBtn";
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className='home'>
      <div className='black'>
        <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto'>
          <h1 className="h1">
            Coding <span className="text-accent text-[#41809d]">Dreams</span> <br />
            Into <span className="text-accent text-[#41809d]">Reality</span>
          </h1>
          <p className="text-white max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
            Welcome to my digital playground, where lines of code transform ideas into living, breathing creations. Explore the pixels that power the future, and journey through the endless possibilities of technology. Here, innovation meets imagination, and every keystroke is a step closer to crafting extraordinary experiences. 
            Join me on this exciting adventure, where we turn dreams into digital reality, one line of code at a time.
          </p>
    
          {/* Resume */}
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='hidden xl:flex'
          >
            <a
              href="/public/resume.png" 
              target="_blank"
              rel="noopener noreferrer"
              download // Add this attribute to make the link downloadable
            >
              <Image
                src="/resumebtnt.png"
                alt="Resume"
                width={400} 
                height={400} 
              />
            </a>
          </motion.div>
        </div>
      </div>
      <div className='w-[1200px] h-full absolute right-0 bottom-0'>
        <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'></div>
        <motion.div
          variants={fadeIn('up', 0.5)}
          initial='hidden'
          animate='show'
          exit='hidden'
          transition={{ duration: 1, ease: 'easeInOut' }}
          className='w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]'
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
