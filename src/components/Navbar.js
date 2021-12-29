import React, { useEffect, useState } from 'react';
import NavbarLinks from './NavbarLinks';

const Navbar = ({ modal }) => {
  const [activeMenu, setActiveMenu] = useState(false);
  const handleMenu = () => {
    modal.current.classList.remove('modal-hidden');
    modal.current.classList.add('modal-visible');
  };
  useEffect(() => {
    const windowResize = () => {
      if (window.innerWidth >= 768) {
        setActiveMenu(true);
      } else {
        setActiveMenu(false);
      }
    };
    windowResize();
    window.addEventListener('resize', windowResize);
    return () => {
      window.removeEventListener('resize', windowResize);
    };
  }, []);

  return (
    <nav>
      <div className='nav-wrapper'>
        <div className='nav-text-logo'>
          <p>Anthony Lozano</p>
        </div>
        {activeMenu ? (
          <div className='nav-links'>
            <NavbarLinks />
          </div>
        ) : (
          <div className='nav-links-mobile' onClick={handleMenu}>
            <i className='bx bx-menu'></i>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
