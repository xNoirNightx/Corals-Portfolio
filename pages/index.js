import Image from "next/image";

// components import
import ParticlesContainer from "../components/ParticlesContainer";
import Avatar from "../components/Avatar";
import ResumeBtn from "../components/ResumeBtn";

// framer
import { motion } from "framer-motion";

// effects
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className='bg-primary/60 h-full'>
      <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
        <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto'>
          <h1 className="h1">
            Coding <span className="text-accent text-[#41809d]">Dreams</span> <br />
            Into <span className="text-accent text-[#41809d]">Reality</span>
          </h1>
          <p className="text-white max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit
            amet elementum eros. Sed semper lacinia magna.
          </p>
          {/* resume */}
          <div className='flex justify-center xl:hidden relative'>
          <ResumeBtn />
           </div>
        </div>
      </div>
      <div>img</div>
    </div>
  );
};

<ParticlesContainer/>



export default Home;