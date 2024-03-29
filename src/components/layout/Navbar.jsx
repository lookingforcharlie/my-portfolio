import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FiTwitter } from 'react-icons/fi';
import { MdAlternateEmail } from 'react-icons/md';
import { FiGithub } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';

function Navbar({ title }) {
  return (
    // mb: margin button, shadow-lg: drop shadow, bg: background, neutral is a daisyUI class
    <div className='navbar mb-12 shadow-lg bg-neutral text-neutral-content'>
      {/* make auto margin on the left and right */}
      <div className='container mx-auto'>
        <div className='flex-none px-2 mx-2'>
          <div className='text-lg align-middle font-semibold'>{title}</div>

          <a
            href='https://github.com/lookingforcharlie'
            target='_blank'
            rel='noopener noreferrer'
            alt='github'
            aria-label='github'
          >
            <FiGithub className='inline pr-2 text-2xl' />
          </a>
          <a
            href='https://twitter.com/CharlieFeng2020'
            target='_blank'
            rel='noopener noreferrer'
            alt='twitter'
            aria-label='twitter'
          >
            <FiTwitter className='inline pr-2 text-2xl' />
          </a>
          <a
            href='https://www.linkedin.com/in/xiaobingfeng/'
            target='_blank'
            rel='noopener noreferrer'
            alt='linkedin'
            aria-label='linkedin'
          >
            <FiLinkedin className='inline pr-2 text-2xl' />
          </a>
          <a
            href='mailto:charliefeng2020@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
            alt='email'
            aria-label='email'
          >
            <MdAlternateEmail className='inline pr-2 text-2xl' />
          </a>
        </div>

        <div className='flex-1 px-2 mx-2'>
          {/* links will be invisible when screen hit the md value */}
          <div className='hidden md:flex justify-end'>
            <Link to='/' className='btn btn-ghost btn-xs rounded-btn'>
              Home
            </Link>

            <Link to='/projects' className='btn btn-ghost btn-xs rounded-btn'>
              Projects
            </Link>

            <Link to='/arsenal' className='btn btn-ghost btn-xs rounded-btn'>
              Arsenal
            </Link>

            <Link to='/about' className='btn btn-ghost btn-xs rounded-btn'>
              About me
            </Link>
          </div>
        </div>

        {/* ----- Hamburger Starts---- */}
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-24'
          >
            <Link to='/' className='btn btn-ghost btn-xs rounded-btn'>
              Home
            </Link>

            <Link to='/projects' className='btn btn-ghost btn-xs rounded-btn'>
              Projects
            </Link>

            <Link to='/arsenal' className='btn btn-ghost btn-xs rounded-btn'>
              Arsenal
            </Link>

            <Link to='/about' className='btn btn-ghost btn-xs rounded-btn'>
              About me
            </Link>
          </ul>
        </div>
        {/* ----- Hamburger ends----- */}
      </div>
    </div>
  );
}

Navbar.defaultProps = {
  title: "Xiaobing's Portfolio",
};

Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;
