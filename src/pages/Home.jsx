import React from "react";
import avatar from "../assets/avatar_1.jpg";
import { Link } from "react-router-dom";
import { MdWorkOutline } from "react-icons/md";

function Home() {
  return (
    <div class='container flex flex-col md:flex-row items-center px-6 mx-auto mt-10 space-y-5 md:space-x-10'>
      <div class='md:w-1/2'>
        <img src={avatar} alt='avatar' />
      </div>
      <div className='flex flex-col mb-32 space-y-8 md:w-1/2'>
        <h1 class='max-w-md text-4xl font-bold text-center md:text-5xl md:text-left'>
          Welcome !
        </h1>
        <p class='max-w-sm text-center md:text-3xl md:text-left'>
          A Full-Time, <br></br>Full-Stack, <br></br>Fully-Passionate <br></br>
          Web Dev says "Hello".
        </p>
        <div class='flex justify-center md:justify-start'>
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

{
  /* <div className='card card-side bg-base-100 flex'>
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
</div> */
}
