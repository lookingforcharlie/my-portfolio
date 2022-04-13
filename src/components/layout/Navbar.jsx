import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FiTwitter } from "react-icons/fi";
import { MdAlternateEmail } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";

function Navbar({ title }) {
  return (
    // mb: margin button, shadow-lg: drop shadow, bg: background, neutral is a daisyUI class
    <nav className='navbar mb-12 shadow-lg bg-neutral text-neutral-content'>
      {/* make auto margin on the left and right */}
      <div className='container mx-auto'>
        <div className='flex-none px-2 mx-2'>
          <div className='text-lg align-middle font-semibold'>{title}</div>

          <a
            href='https://github.com/lookingforcharlie'
            target='_blank'
            rel='noreferrer'
          >
            <FiGithub className='inline pr-2 text-2xl' />
          </a>
          <a
            href='https://twitter.com/CharlieFeng2020'
            target='_blank'
            rel='noreferrer'
          >
            <FiTwitter className='inline pr-2 text-2xl' />
          </a>
          <a
            href='https://www.linkedin.com/in/xiaobingfeng/'
            target='_blank'
            rel='noreferrer'
          >
            <FiLinkedin className='inline pr-2 text-2xl' />
          </a>
          <a
            href='mailto:charliefeng2020@gmail.com'
            target='_blank'
            rel='noreferrer'
          >
            <MdAlternateEmail className='inline pr-2 text-2xl' />
          </a>
        </div>
        <div className='flex-1 px-2 mx-2'>
          <div className='flex justify-end'>
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
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
  title: "Xiaobing's Portfolio",
};

Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;
