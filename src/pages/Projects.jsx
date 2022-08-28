import React from 'react';
import github_finder from '../assets/githubfinder530.png';
import property from '../assets/property530.png';
import todolist from '../assets/todolist530.png';
import feedback from '../assets/feedback530.png';
import weatherapp from '../assets/weatherapp530.png';
import { MdOutlineRestorePage } from 'react-icons/md';
import { FaGithubAlt } from 'react-icons/fa';

function Projects() {
  return (
    <div>
      <div className='carousel w-full border-2 border-stone-200 shadow'>
        <div id='item1' className='carousel-item w-full'>
          <div className='card lg:card-side bg-base-100 shadow-xl w-full flex'>
            <figure className='flex-1 w-30'>
              <img src={property} alt='Album' />
            </figure>
            <div className='card-body flex-1 w-70'>
              <h1 className='card-title'>Property Marketplace Explorer</h1>
              <hr />
              <h3 className='card-title'>Descriptions</h3>
              <p>
                Mobile First Layout Application allows users to register, sign
                in with email or Google Account. Registered users can upload
                pictures, edit, delete property listings and browser other's
                listings. None Registered users can browse listings and search
                for properties.
              </p>
              <h2 className='card-title'>Stacks</h2>
              <p>
                Frontend: React. Backend: Firebase 9. Database: FireStore.
                Google Authentication, Google Geocoding
              </p>

              <div className='card-actions justify-end'>
                <button className='btn btn-primary shadow-md'>
                  <a
                    href='https://property-marketplace-jade.vercel.app/'
                    target='_blank'
                    rel='noreferrer'
                    className='flex flex-row items-center'
                  >
                    <MdOutlineRestorePage className='mr-2' />
                    <p>View Live Version</p>
                  </a>
                </button>
                <button className='btn btn-primary shadow-md'>
                  <a
                    href='https://github.com/lookingforcharlie/house-marketplace'
                    target='_blank'
                    rel='noreferrer'
                    className='flex flex-row items-center'
                  >
                    <FaGithubAlt className='mr-2' />
                    <p>View on GitHub</p>
                  </a>
                </button>
              </div>
              {/* Adding a page number for the time being */}
              <div className='justify-start mt-px'>
                <kbd class='kbd kbd-sm font-semibold'>1</kbd>
              </div>
            </div>
          </div>
        </div>

        <div id='item2' className='carousel-item w-full flex'>
          <div className='card lg:card-side bg-base-100 shadow-xl w-full'>
            <figure className='flex-1 w-30'>
              <img src={github_finder} alt='Album' />
            </figure>
            <div className='card-body flex-1 w-70'>
              <h1 className='card-title'>GitHub Finder</h1>
              <hr />
              <h2 className='card-title'>Descriptions</h2>
              <p>
                Using the GitHub API, users can search for GitHub users and get
                their profile data and display them nicely. Profile data
                includes image, bio, location, followers, following, and
                repositories, and so on.
              </p>
              <h2 className='card-title'>Stacks</h2>
              <p>
                React, Tailwind CSS, DaisyUI, React-Router-Dom, React-Icons,
                Axios, GitHub Rest API.
              </p>
              <div className='card-actions justify-end'>
                <button className='btn btn-primary shadow-md'>
                  <a
                    href='https://new-github-finder-aug22.vercel.app/'
                    target='_blank'
                    rel='noreferrer'
                    className='flex flex-row items-center'
                  >
                    <MdOutlineRestorePage className='mr-2' />
                    <p>View Live Version</p>
                  </a>
                </button>
                <button className='btn btn-primary shadow-md'>
                  <a
                    href='https://github.com/lookingforcharlie/new-github-finder'
                    target='_blank'
                    rel='noreferrer'
                    className='flex flex-row items-center'
                  >
                    <FaGithubAlt className='mr-2' />
                    <p>View on GitHub</p>
                  </a>
                </button>
              </div>

              <div className='justify-start mt-px'>
                <kbd class='kbd kbd-sm font-semibold'>2</kbd>
              </div>
            </div>
          </div>
        </div>

        <div id='item3' className='carousel-item w-full flex'>
          <div className='card lg:card-side bg-base-100 shadow-xl w-full'>
            <figure className='flex-1 w-30'>
              <img src={feedback} alt='Album' />
            </figure>
            <div className='card-body flex-1 w-70'>
              <h1 className='card-title'>Feedback Application</h1>
              <hr />
              <h2 className='card-title'>Descriptions</h2>
              <p>
                A feedback application user can send feedback and rate the
                service you have for a product or a service. Users can also
                delete and edit their feedbacks.
              </p>
              <h2 className='card-title'>Stacks</h2>
              <p>
                Frontend: React, using component, state, props, events, context
                API. <br></br>Backend: Jason Server as a mock rest API.
              </p>
              <div className='card-actions justify-end'>
                <button className='btn btn-primary shadow-md'>
                  <a
                    href='https://funny-feedback-app.netlify.app/'
                    target='_blank'
                    rel='noreferrer'
                    className='flex flex-row items-center'
                  >
                    <MdOutlineRestorePage className='mr-2' />
                    <p>View Live Version</p>
                  </a>
                </button>
                <button className='btn btn-primary shadow-md'>
                  <a
                    href='https://github.com/lookingforcharlie/feedback-app'
                    target='_blank'
                    rel='noreferrer'
                    className='flex flex-row items-center'
                  >
                    <FaGithubAlt className='mr-2' />
                    <p>View on GitHub</p>
                  </a>
                </button>
              </div>

              <div className='justify-start mt-px'>
                <kbd class='kbd kbd-sm font-semibold'>3</kbd>
              </div>
            </div>
          </div>
        </div>

        <div id='item4' className='carousel-item w-full flex'>
          <div className='card lg:card-side bg-base-100 shadow-xl w-full'>
            <figure className='flex-1 w-30'>
              <img src={todolist} alt='Album' />
            </figure>
            <div className='card-body flex-1 w-70'>
              <h1 className='card-title'>Todo List for Minimalists</h1>
              <hr />
              <h2 className='card-title'>Descriptions</h2>
              <p>
                A fully functional todo list application that allows users to
                add, edit, delete, mark tasks as complete and clear the
                completed tasks. Your tasks are stored in local storage of
                browser and never will be lost.
              </p>
              <h2 className='card-title'>Stacks</h2>
              <p>Pure React with Hooks, Local Storage.</p>
              <div className='card-actions justify-end'>
                <button className='btn btn-primary shadow-md'>
                  <a
                    href='https://blackandwhite-todolist.netlify.app/'
                    target='_blank'
                    rel='noreferrer'
                    className='flex flex-row items-center'
                  >
                    <MdOutlineRestorePage className='mr-2' />
                    <p>View Live Version</p>
                  </a>
                </button>
                <button className='btn btn-primary shadow-md'>
                  <a
                    href='https://github.com/lookingforcharlie/todo-list-react'
                    target='_blank'
                    rel='noreferrer'
                    className='flex flex-row items-center'
                  >
                    <FaGithubAlt className='mr-2' />
                    <p>View on GitHub</p>
                  </a>
                </button>
              </div>

              <div className='justify-start mt-px'>
                <kbd class='kbd kbd-sm font-semibold'>4</kbd>
              </div>
            </div>
          </div>
        </div>

        <div id='item5' className='carousel-item w-full flex'>
          <div className='card lg:card-side bg-base-100 shadow-xl w-full'>
            <figure className='flex-1 w-30'>
              <img src={weatherapp} alt='Album' />
            </figure>
            <div className='card-body flex-1 w-70'>
              <h1 className='card-title'>Weather Application</h1>
              <hr />
              <h2 className='card-title'>Descriptions</h2>
              <p>
                Using openWeathermap API, users can search for weather data of
                anywhere in the world. Details of weather data will be displayed
                in a card nicely.
              </p>
              <h2 className='card-title'>Stacks</h2>
              <p>React, TypeScript, OpenWeatherMap API.</p>
              <div className='card-actions justify-end'>
                <button className='btn btn-primary shadow-md'>
                  <a
                    href='https://weather-app-minimalist.netlify.app/'
                    target='_blank'
                    rel='noreferrer'
                    className='flex flex-row items-center'
                  >
                    <MdOutlineRestorePage className='mr-2' />
                    <p>View Live Version</p>
                  </a>
                </button>
                <button className='btn btn-primary shadow-md'>
                  <a
                    href='https://github.com/lookingforcharlie/weather-app-react-typescript'
                    target='_blank'
                    rel='noreferrer'
                    className='flex flex-row items-center'
                  >
                    <FaGithubAlt className='mr-2' />
                    <p>View on GitHub</p>
                  </a>
                </button>
              </div>

              <div className='justify-start mt-px'>
                <kbd class='kbd kbd-sm font-semibold'>5</kbd>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-center w-full py-2 gap-2 btn-group'>
        <a href='#item1' className='btn btn-xs'>
          1
        </a>
        <a href='#item2' className='btn btn-xs'>
          2
        </a>
        <a href='#item3' className='btn btn-xs'>
          3
        </a>
        <a href='#item4' className='btn btn-xs'>
          4
        </a>
        <a href='#item5' className='btn btn-xs'>
          5
        </a>
      </div>
    </div>
  );
}

export default Projects;
