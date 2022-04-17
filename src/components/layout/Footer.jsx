import React from "react";
import { FiTwitter } from "react-icons/fi";
import { MdAlternateEmail } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";

function Footer() {
  const footerYear = new Date().getFullYear();
  return (
    <footer className='footer -p10 text-primary-content bg-neutral footer-center'>
      <div>
        <div className='flex-none px-3 mx-3 mt-3'>
          <a
            href='https://github.com/lookingforcharlie'
            target='_blank'
            rel='noreferrer'
            aria-label='github'
          >
            <FiGithub className='inline pr-2 text-2xl' />
          </a>
          <a
            href='https://twitter.com/CharlieFeng2020'
            target='_blank'
            rel='noreferrer'
            aria-label='twitter'
          >
            <FiTwitter className='inline pr-2 text-2xl' />
          </a>
          <a
            href='https://www.linkedin.com/in/xiaobingfeng/'
            target='_blank'
            rel='noreferrer'
            aria-label='linkedin'
          >
            <FiLinkedin className='inline pr-2 text-2xl' />
          </a>
          <a
            href='mailto:charliefeng2020@gmail.com'
            target='_blank'
            rel='noreferrer'
            aria-label='email'
          >
            <MdAlternateEmail className='inline pr-2 text-2xl' />
          </a>
        </div>
        <p className='mb-3'>
          Copyright &copy; {footerYear} All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
