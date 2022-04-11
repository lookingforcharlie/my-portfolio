import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import PropTypes from "prop-types";

function Navbar({ title }) {
  return (
    // mb: margin button, shadow-lg: drop shadow, bg: background, neutral is a daisyUI class
    <nav className='navbar mb-12 shadow-lg bg-neutral text-neutral-content'>
      {/* make auto margin on the left and right */}
      <div className='container mx-auto'>
        <div className='flex-none px-2 mx-2'>
          <div className='text-lg align-middle'>{title}</div>

          <Link to='/' className='text-lg align-middle'>
            <FaGithub className='inline pr-2 text-2xl' />
          </Link>
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
