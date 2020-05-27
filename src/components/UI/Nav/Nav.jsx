import React, { useState, useEffect } from 'react';
import wxLogo from '../../../assets/img/wxLG.gif';
import  '../../../App.css';
import Link from '../Link/Link';

const Nav = () => {
  const [navClass, setNavClass] = useState('');
  const [toggeledNav, settoggeledNav] = useState(false);

  const toggleNav = () => {
    settoggeledNav(!toggeledNav);
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      let navClass = '';
      if (window.scrollY >= 200) {
        navClass = 'scrolled';
      }
      setNavClass(navClass);
    });
  }, []); 
  return (
    <nav className={`navbar navbar-expand-md bg-light ${navClass}`}>
      <div className='container'>
        <a className='navbar-brand' href='!#'>
          <img className='App-logo' src={wxLogo} alt='Logo' />
          <span>WEIXEL TECH</span>
          <i className='fas fa-circle ml-1' />
        </a>
        <div className={`navbar-toggler nav-icon ${(() => {
            if (toggeledNav) return 'open';
            return '';
          })()}`}
          onClick={toggleNav}
        >
          <span />
          <span />
          <span />
        </div>
        <div
          className={`collapse navbar-collapse ${(() => {
            if (toggeledNav) return 'show';
            return '';
          })()}`}
        >          
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <Link target='home' offset={-120} classes='nav-link'>
                <div onClick={toggleNav}> Home</div>
              </Link>
            </li>
            <li className='nav-item'>
              <Link target='about' classes='nav-link'>
                <div onClick={toggleNav}> About</div>
              </Link>
            </li>
            <li className='nav-item'>
              <Link target='services' classes='nav-link'>
                <div onClick={toggleNav}> Services</div>
              </Link>
            </li>
            <li className='nav-item'>
              <Link target='blog' classes='nav-link'>
                <div onClick={toggleNav}> Blog</div>
              </Link>
            </li>
            <li className='nav-item'>
              <Link target='contact' classes='nav-link'>
                <div onClick={toggleNav}> Contact</div>
              </Link>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  );
};

export default Nav;
