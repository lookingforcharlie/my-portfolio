import React from "react";
import arsenal from "../assets/arsenal.jpg";
import { Link } from "react-router-dom";
import { DiSass, DiReact, DiNodejsSmall, DiFirebase } from "react-icons/di";
import { FaJava, FaPhp, FaHome } from "react-icons/fa";
import { IoLogoPython } from "react-icons/io";
import { GrMysql } from "react-icons/gr";
import { AiFillGithub } from "react-icons/ai";
import {
  SiFigma,
  SiMongodb,
  SiCsharp,
  SiTailwindcss,
  SiExpress,
  SiTypescript,
} from "react-icons/si";

function Arsenal() {
  return (
    <>
      <div className='flex flex-row space-x-4'>
        <div class='card w-96 bg-base-100 shadow-xl image-full'>
          <figure>
            <img src={arsenal} alt='Shoes' />
          </figure>
          <div class='card-body'>
            <h2 class='card-title mb-3'>Experienced with</h2>
            <p className='flex flex-row space-x-2'>
              <div class='badge badge-accent'>
                <DiSass className='mr-2' />
                SCSS/BEM
              </div>
              <div class='badge badge-accent'>
                <SiTailwindcss className='mr-2' />
                Tailwind
              </div>
              <div class='badge badge-accent'>
                <SiTypescript className='mr-2' />
                TypeScript
              </div>
            </p>
            <p className='flex flex-row space-x-2'>
              <div class='badge badge-accent'>
                <DiReact className='mr-2' />
                React
              </div>
              <div class='badge badge-accent'>
                <DiNodejsSmall className='mr-2' />
                Node.JS
              </div>
              <div class='badge badge-accent'>
                <SiExpress className='mr-2' />
                Express.JS
              </div>
            </p>
            <p className='flex flex-row space-x-2'>
              <div class='badge badge-accent'>
                <SiMongodb className='mr-2' />
                MongoDB
              </div>
              <div class='badge badge-accent'>
                <DiFirebase className='mr-2' />
                Firebase
              </div>
              <div class='badge badge-accent'>
                <AiFillGithub className='mr-2' />
                Git/GitHub
              </div>
            </p>
          </div>
        </div>

        <div class='card w-96 bg-base-100 shadow-xl image-full'>
          <figure>
            <img src={arsenal} alt='Shoes' />
          </figure>
          <div class='card-body'>
            <h2 class='card-title mb-3'>Have knowledge</h2>
            <p className='flex flex-row flex-1 space-x-2'>
              <div class='badge badge-accent'>
                <IoLogoPython className='mr-2' />
                Python
              </div>
              <div class='badge badge-accent'>
                <FaJava className='mr-2' />
                Java
              </div>
              <div class='badge badge-accent'>
                <SiCsharp className='mr-2' />
                C#
              </div>
            </p>
            <p className='flex flex-row flex-1 space-x-2'>
              <div class='badge badge-accent'>
                <FaPhp className='mr-2' />
                PHP
              </div>
              <div class='badge badge-accent'>
                <GrMysql className='mr-2' />
                MySQL
              </div>
              <div class='badge badge-accent'>
                <SiFigma className='mr-2' />
                Figma
              </div>
            </p>
          </div>
        </div>
      </div>
      <div class='card-actions justify-start my-8 mb-0'>
        <Link to='/' className='btn btn-primary'>
          <FaHome className='mr-2' />
          Back To Home
        </Link>
      </div>
    </>
  );
}

export default Arsenal;
