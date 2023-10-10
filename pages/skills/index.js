import React, { useState } from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
} from "react-icons/fa";

import {
  SiFramer,
} from "react-icons/si";

//  about data
export const skillsData = [
  {
    title: "Skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
        ],
      },
    ],
  },
  {
    title: "Learning",
    info: [
      {
        title: "Learning",
        icons: [
          <SiFramer />,
          // add c# ext here 

        ],
      },
    ],
  },
  {
    title: "Schooling",
    info: [
      {
        title: "Game Developer - pending ",
        stage: "2023 - Current ",
      },
      {
        title: "Full Stack Developer - UNB , University of New Brunswick",
        stage: "2023",
      },
      {
        title: "Self Taught Graphic Designer ",
        stage: "2006",
      },
    ],
  },
];

// components
import Avatar from "../../components/Avatar";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// counter
import CountUp from "react-countup";

const Skills = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className="min-h-screen flex items-center justify-center">
      {/* avatar img */}
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -right-[370px]">
        <Avatar />
      </motion.div>

      
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Learning to <span className="text-accent">Code </span> one day at a
            time.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[800px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Gaming has always been more than just a hobby for me; it's a passion
            that fuels my creativity and curiosity. I realized that I didn't
            just want to be a player; I wanted to be a creator. This burning
            desire led me to the world of coding. Learning to code became my
            path to unlocking the secrets behind the games I loved so much. With
            every line of code I write, I am one step closer to turning my
            gaming dreams into reality.
            <br></br>I realized that I didn't just want to be a player; I wanted
            to be a creator. This burning desire led me to the world of coding.
            Learning to code became my path to unlocking the secrets behind the
            games I loved so much. With every line of code I write, I am one
            step closer to turning my gaming dreams into reality.
          </motion.p>





          <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="text-3xl flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >

          {/*  skills information and schooling  */}
          <div className="text-3xl flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {skillsData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  }  cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[5px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="text-3xl py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {skillsData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  {/* title */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-9">
                    {/* icons */}
                    {item.icons?.map((icon, itemIndex) => {
                      return <div className="text-2xl text-white">{icon}</div>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>






















          {/* skills reactcounter  */}

          <div className="flex flex-1 xl:gap-x-6">
            {/* experience */}
            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={1} duration={5} /> +
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                Years of experience
              </div>
            </div>

            {/* challeneges  */}
            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={20} duration={5} /> +
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                Coding Challeneges 
              </div>
            </div>

            {/* projects */}
            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={3} duration={5} /> +
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                Finished projects
              </div>
            </div>

            {/* games */}
            <div className="relative flex-1">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={1} duration={5} /> +
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                Games coded 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
