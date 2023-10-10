import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative">
      {/* About Me Text (Middle Left) */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.5 }}
        className="max-w-[800px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
      >
        <span className="text-4xl text-accent">
          <h3>"Time spent with cats is never wasted."</h3>
        </span>
        <br></br>
        <span className="text-1xl text-accent"><p>
          Hello, I'm excited to share a bit about myself with you. I'm a proud
          mother of 5 wonderful children. When I'm not busy taking care of them,
          you can usually find me indulging in my other passions. I'm a huge cat
          lover, My own furry friends never fail to bring a smile to my face. In
          fact, I love cats so much that I've made it a point to incorporate my
          best friend into my Portfolio. I'm a self-taught graphic designer I
          enjoy the creativity in making something new. I'm an avid gamer, I
          love nothing more than immersing myself in a good video game or RPG.
          I'm also a big fan of anime and manga. I've spent many a lazy
          afternoon curled up with a good book or streaming my favorite shows.
          Overall, I'm a busy mom who loves to stay creative and engaged with
          the world around me. Whether I'm designing, playing games, or cuddling
          with my cats reading a great book. I always try to approach everything
          I do with a sense of passion and enthusiasm.
        </p></span>
        <span className=" text-4xl text-accent">
          <br></br><h2>
            Thank you for taking the time to get to know me a little better, and
            I hope you enjoy exploring my portfolio!
          </h2>
        </span>
      </motion.div>

      {/* Profile Picture (Middle Right) */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        transition={{ duration: 0.5 }}
        className="w-1/2 md:w-1/4 p-4"
      >
        <div className="relative w-[400px] xl:w-[600px] h-[400px] xl:h-[600px] rounded-full overflow-hidden shadow-lg">
          {/* Circular Image Container */}
          <div className="rounded-full overflow-hidden bg-white">
            <Image
              src="/Coral1.png"
              layout="fill"
              alt=""
              className="object-cover"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
