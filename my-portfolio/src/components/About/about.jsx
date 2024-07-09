import React from 'react';
import skills from '../../../data/skill/skills.js';
import { motion } from 'framer-motion';

export default function About() {

  const [isHovered, setIsHovered] = React.useState(false);
  const [key, setKey] = React.useState('');

  function handleMouseEnter(e) {
    setIsHovered(true);
    setKey(e.target.getAttribute("data-key"));
  };

  const skill = skills.map(skill => {
    return (
      <div key={skill.id} data-key={skill.id}
        className='skill-icon-container'
        onMouseEnter={handleMouseEnter}

        onMouseLeave={() => setIsHovered(false)}
      >
        <img onClick={handleMouseEnter} data-key={skill.id} src={skill.img}
          className={isHovered && key === skill.id ? `skill-img-hover` : `skill-img`} alt={skill.alt} />
        <img onClick={handleMouseEnter} data-key={skill.id} src={skill.skillLevel} />
      </div>
    );
  });

  const scrollRef = React.useRef(null);

  return (
    <section id='about' className="flex items-center flex-col  w-screen">
      <div className='flex flex-col justify-evenly items-center w-full sm:w-[80vw] mt-[40px] sm:mb-[60px] p-8'>
        <div className='flex flex-col items-center text-center pt-4 group mb-[50px]'>

          <h1 className='section-title'>About me</h1>

          <div className='sm:w-[50vw] text-[15px] leading-5.5 w-[80%]'>
            <p className='w-full p-4 text-textColor text-justify'>
              Hello! My name is <span className='text-dark1Khaki font-semibold'>Mohit Sharma</span> a self-taught front-end developer with a passion for coding and a keen interest in <span className='text-footerColor font-semibold'>Photography</span>. Over the past few years, I've honed my skills in <span className='text-footerColor font-semibold'>JavaScript, ReactJs, NextJs</span> through practical projects and continuous learning.
              <br />
              I believe that my eye for detail and creativity in <span className='text-footerColor font-semibold'>photography</span> translate well into my work as a developer, where I strive to create visually appealing and <span className='text-footerColor font-semibold'>user-friendly interfaces.</span>
            </p>
          </div>
        </div>

        <div className='flex flex-col items-center pt-4 w-full group'>
          <h1 className='section-title'>Skills</h1>

          <div className='grid w-[80%] sm:w-[90%] grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-y-[8px] gap-x-[10px] p-4 transition-all'>
            {skill}
          </div>
        </div>
      </div>
    </section>
  );
}