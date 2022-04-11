import React from "react";
import avatar from "../assets/avatar_1.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className='flex'>
      <div>
        <img src={avatar} alt='avatar' style={{ width: "650px" }} />
      </div>
      <div className='text-center'>
        <h1>Welcome To My Applications Hub</h1>
      </div>
      <div>
        <Link to='/projects' className='btn'>
          Check out my projects
        </Link>
      </div>
    </div>
  );
}

export default Home;
