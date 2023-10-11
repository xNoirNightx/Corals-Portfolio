import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import { FaGithub } from 'react-icons/fa';
import Image from 'next/image';
import Avatar from '/components/Avatar';

  // ... (your project data)
  const projects = [
    {
      name: 'Project 1',
      imgSrc: '/leopardquiz.png',
      githubLink: 'https://github.com/xNoirNightx/Snow-Leopard-Quiz',
      deployedLink: ' https://xnoirnightx.github.io/Snow-Leopard-Quiz/',
    },
    {
      name: 'Project 2',
      imgSrc: '/notetaker.png',
      githubLink: 'https://github.com/xNoirNightx/Daily-Scheduler',
      deployedLink: 'https://xnoirnightx.github.io/Daily-Scheduler/',
    },
    {
      name: 'Project 3',
      imgSrc: '/password.png',
      githubLink: 'https://github.com/xNoirNightx/Password-Generator',
      deployedLink: ' https://xnoirnightx.github.io/Password-Generator/',
    },
    {
      name: 'Project 4',
      imgSrc: '/weaterapi.png',
      githubLink: 'https://github.com/xNoirNightx/Weather-Forecast',
      deployedLink: ' https://xnoirnightx.github.io/Weather-Forecast/',
    },
    {
      name: 'Project 5',
      imgSrc: '/employeetracker.png',
      githubLink: 'https://github.com/xNoirNightx/Employee-Tracker-SQL',
      deployedLink: 'https://www.dropbox.com/scl/fi/gf4gqlzozpoillx7ymo13/Challenge12.mp4?rlkey=i4va6oobpptwqst6d2qkt9dyz&dl=0',
    },
    {
      name: 'Project 6',
      imgSrc: 'ecom.png',
      githubLink: 'https://github.com/xNoirNightx/E-commerce-ORM',
      deployedLink: 'https://www.dropbox.com/scl/fi/wysz3xtee6ufmbjdsmi2z/Challenge13.mp4?rlkey=rkrrhkznonmzg7tv4rcwccai8&dl=0',
    },
    {
      name: 'Project 7',
      imgSrc: '/soon.png',
      githubLink: 'https://github.com/yourusername/project1',
      deployedLink: 'https://project1-demo.com',
    },
    {
      name: 'Project 8',
      imgSrc: '/routedintravel.jpg',
      githubLink: 'https://github.com/xNoirNightx/Routed_In_Travel',
      deployedLink: 'https://traveling-bucket-a1886f9c05bf.herokuapp.com/',
    },
    {
      name: 'Project 9',
      imgSrc: '/soon.png',
      githubLink: 'https://github.com/yourusername/project2',
      deployedLink: 'https://project2-demo.com',
    },
    // Add more projects as needed
  ];

  const Projects = () => {
    return (
      <div className='h-full py-32 text-center xl:text-left'>
        {/* Avatar img */}
        <motion.div
        variants={fadeIn('right', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='hidden xl:flex absolute bottom-0 -left-[370px]'
      >
        <Avatar />
      </motion.div>
  
        <div className='h-full py-36 flex items-center'>
          <div className='container mx-auto'>
            <div className='flex flex-col xl:flex-row gap-x-8'>
              {/* Text Section (Right) */}
              <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0 xl:order-2'>
                <motion.h2
                  variants={fadeIn('up', 0.2)}
                  initial='hidden'
                  animate='show'
                  exit='hidden'
                  className='h2 xl:mt-12'
                >
                  My Projects <span className='text-accent'>.</span>
                </motion.h2>
                <motion.p
                  variants={fadeIn('up', 0.4)}
                  initial='hidden'
                  animate='show'
                  exit='hidden'
                  className='mb-4 max-w-[900px] mx-auto lg:mx-0'
                >
                  Here are a few samples of my work through my coding journey.
                  Feel free to click on the image to take you to the deployed site.<br></br>
                  <br></br>
                  Or click on <FaGithub /> to take you to the code.
                </motion.p>
              </div>
  
              {/* Project Cards Section (Left) */}
              <motion.div
                variants={fadeIn('down', 0.6)}
                initial='hidden'
                animate='show'
                exit='hidden'
                className='w-full xl:max-w-[65%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:order-1'
              >
                {projects.map((project, index) => (
                  <div key={index} className='border p-4 rounded-md'>
                    <a href={project.deployedLink} target="_blank" rel='noopener noreferrer'>
                      <div className='relative w-full h-auto cursor-pointer overflow-hidden transition-transform transform-gpu hover:scale-105'>
                        <img src={project.imgSrc} alt={project.name} />
                      </div>
                    </a>
                    <div className='mt-2'>
                      <a href={project.githubLink} target="_blank" rel='noopener noreferrer'>
                        <FaGithub /> {/* Replace "GitHub" text with the FaGithub icon */}
                      </a>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Projects;