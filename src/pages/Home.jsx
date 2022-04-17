import React from "react";
import avatar from "../assets/avatar_1.jpg";
import { Link } from "react-router-dom";
import { MdWorkOutline } from "react-icons/md";

function Home() {
  return (
    <div className='card card-side bg-base-100 flex'>
      <figure className='flex-1'>
        <img src={avatar} alt='avatar' />
      </figure>
      <div className='card-body flex-1'>
        <h1 className='card-title text-6xl'>Welcome !</h1>
        <p className='text-xl'>
          A Full-Time, <br></br>Full-Stack, <br></br>Fully-Passionate <br></br>
          Web Dev says "Hello".
        </p>
        <div className='card-actions justify-start'>
          <Link to='/projects' className='btn btn-primary'>
            <MdWorkOutline className='mr-2' />
            Check Out my Projects Hub
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
