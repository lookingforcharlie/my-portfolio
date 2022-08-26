import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { GiFamilyHouse } from "react-icons/gi";
import { FaSchool } from "react-icons/fa";
import { FaDev } from "react-icons/fa";

function Aboutme() {
  return (
    <>
      <div class='card bg-base-100 shadow-xl w-fit'>
        <div class='card-body'>
          <h2 class='card-title'>About Me</h2>
          <hr />

          <div>
            <h2 class='card-title text-base'>
              <GiFamilyHouse className='mr-2' />I am a husband and a father of
              two kids.
            </h2>
            <p className='text-sm ml-8'>I do it with full affection.</p>
          </div>

          <div>
            <h2 class='card-title text-base'>
              <FaSchool className='mr-2' />I am a full-time software engineering
              student.
            </h2>
            <p className='text-sm ml-8'>It requires dedication.</p>
          </div>

          <div>
            <h2 class='card-title text-base'>
              <FaDev className='mr-2' />I am a full-time web developer.
            </h2>
            <p className='text-sm ml-8'>I provide the solution.</p>
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

export default Aboutme;
