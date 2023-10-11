import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col xl:flex-row max-w-screen-xlg mx-auto">
        {/* About Me Text (Left) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          className="max-w-[800px] mb-6 xl:mb-12 px-2 xl:px-0 text-center xl:text-left w-full xl:w-1/2"
        >
          <span className="text-4xl text-accent">
            <h3>&ldquo;Time spent with cats is never wasted.&rdquo;</h3>
          </span>
          <br />
          <span className="text-1xl text-accent">
            <p>&quot;
              Hello, I'm excited to share a bit about myself with you. I'm a
              proud mother of 5 wonderful children. When I'm not busy taking
              care of them, you can usually find me indulging in my other
              passions. I'm a huge cat lover, My own furry friends never fail to
              bring a smile to my face. In fact, I love cats so much that I've
              made it a point to incorporate them into my Portfolio. I'm a
              self-taught graphic designer I enjoy the creativity in making
              something new. I'm an avid gamer, I love nothing more than
              immersing myself in a good video game or RPG. I'm also a big fan
              of anime and manga. I've spent many a lazy afternoon curled up
              with a good book or streaming my favorite shows. Overall, I'm a
              busy mom who loves to stay creative and engaged with the world
              around me. Whether I'm designing, playing games, or cuddling with
              my cats reading a great book. I always try to approach everything
              I do with a sense of passion and enthusiasm.
              &apos;</p>
          </span>

          <span className="text-4xl text-accent">
            <br />
            <h2>
              Thank you for taking the time to get to know me a little better,
              and I hope you enjoy exploring my portfolio!
            </h2>
          </span>
        </motion.div>

        {/* Large Image (Right) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.5 }}
          className="w-full xl:w-1/2 p-4 text-center"
        >
          <div className="relative w-[400px] xl:w-[500px] h-[400px] xl:h-[600px] rounded-full overflow-hidden shadow-lg mx-auto">
            {/* Circular Image Container */}
            <div className="rounded-full overflow-hidden bg-white mx-auto">
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

      {/* Three Small Images (Bottom Center) */}
      <div className="mt-8 flex justify-center xl:justify-start">
        <div className="w-375 h-375 m-4 rounded-full overflow-hidden">
          <Image
            src="/slate.jpg"
            layout="absolute"
            width={300}
            height={300}
            alt=""
          />
        </div>
        <div className="w-375 h-375 m-4 rounded-full overflow-hidden">
          <Image
            src="/moogle.jpg"
            layout="absolute"
            width={300}
            height={300}
            alt=""
          />
        </div>
        <div className="w-375 h-375 m-4 rounded-full overflow-hidden">
          <Image
            src="/soul.jpg"
            layout="absolute"
            width={300}
            height={300}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
