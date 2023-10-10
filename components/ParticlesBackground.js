import { Particles } from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import React, { useCallback } from 'react';

const ParticlesBackground = () => {
  // init
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  const options = {
    fullScreen: { enable: true }, // Enable full-screen mode
    background: {
      color: "#00000", // Set background color to black
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: false,
        },
        onHover: {
          enable: false,
        },
        resize: true,
      },
    },
    particles: {
      color: {
        value: "#FFFFFF", // Particle color is white
      },
      links: {
        enable: false, // Disable links between particles
      },
      shape: {
        type: "circle", // Particle shape is a circle 
            },
      size: {
        value: 4, // Particle size
        random: true,
      },
      opacity: {
        value: {
          min: 0.1, // Set a minimum opacity
          max: 0.9, // Set a maximum opacity
        },
        random: true, // Enable random opacity
        animation: {
          enable: true,
          speed: 1.5, // Adjust the speed as desired
          minimumValue: 0.1, // Minimum opacity during animation
          sync: false,
        },
      },
      number: {
        value: 200, // Number of particles
        density: {
          enable: true,
          area: 800,
        },
      },
      move: {
        speed: 0, // Disable particle movement
      },
    },
    detectRetina: true,
  };

  return (
    <Particles
      className='black'
      id='tsparticles'
      init={particlesInit}
      loaded={particlesLoaded}
      options={options}
    />
  );
};

export default ParticlesBackground;
