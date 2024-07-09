import React from 'react';
import logo from "/logo1.svg";
import navBars from '../../../data/navBar/navBar.js';
import { motion } from 'framer-motion';

export default function NavBar() {

  React.useEffect(() => {
    setTimeout(() => {
      document.title = "Mohit Sharma | Designer, Frontend Developer";
    }, 2000);
  });

  const [isClicked, setIsClicked] = React.useState(false);
  const [dataKey, setKey] = React.useState('');

  const handleClick = (navBarId) => {
    const parentAnchor = navBarId;
    if (parentAnchor) {
      setIsClicked(true);
      setKey(parentAnchor);
    };
  };

  const navbarRender = navBars.map(navBar => {
    return (
      <motion.li
        whileHover={{ scale: 1.1 }}
        transition={{
          type: "spring",
          stiffness: 350,
          damping: 15
        }}
        key={navBar.id}
        className={navBar.id === '1'
          ? !isClicked ? 'home-before-content group' : 'my-link-class group'
          : isClicked && parseInt(navBar.id) === parseInt(dataKey) ? 'home-before-content group' : 'my-link-class group'}>

        <a href={navBar.link} onClick={() => handleClick(navBar.id)}>
          <img className='w-5 pb-2 opacity-90' src={navBar.image} />
          <div className='toolkit'>{navBar.name}</div>
        </a>
      </motion.li>
    );
  });


  return (
    <header>
      <div className='fixed top-0 left-0 flex items-center sm:justify-between justify-center w-screen sm:h-20 h-16 sm:px-8 px-4 z-10 bg-bodyColor'>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10
          }}>
          <a href='/'>
            <img src={logo} className='sm:w-14 w-12 sm:ml-4 transition hover:opacity-90' alt='Logo' />
          </a>
        </motion.div>
        <div className='flex justify-center items-center w-fit px-4 sm:h-full sm:static sm:rounded-none sm:backdrop-blur-none sm:shadow-none sm:bg-none sm:bg-opacity-0 fixed bottom-4 h-[50px] rounded-full backdrop-blur-sm bg-white bg-opacity-90 shadow-md'>
          <ul className='lists-class'>
            {navbarRender}
          </ul>
        </div>
      </div>
    </header>
  );
};
