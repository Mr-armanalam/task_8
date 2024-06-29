import React from 'react'
import {RiVideoFill} from 'react-icons/ri'

function Email_1_section() {
  return (
    <div className="bd_em_part_main pb-24 pt-20 w-screen">
      <div className="text-center">
        <h1 className="font-sans font-bold text-7xl text-slate-900 mx-auto w-2/3">
          Start a conversation in the email world
        </h1>
        <h4 className="font-sans mx-auto w-3/5 text-center py-8 text-gray-500 text-xl font-normal">
          Masco is a cold email software that lets you communicate B2B with
          ease. A key reason for this is that 80% of people prefer sales
          representatives to contact them via email.
        </h4>

        <div className="flex flex-wrap flex-row justify-center items-center pt-4 pb-16">
          <button className="bg-blue-600 py-1 px-2.5 mb-4 h-14 w-44 text-white font-medium rounded">
            <a href="#">Get Started</a>
          </button>
          <button className="h-14 w-60 border rounded mb-4 flex flex-row justify-center items-center  border-2 ml-4 font-semibold text-stone-700 border-slate-800 ">
            <RiVideoFill/>  <a className='pl-2' href="#"> See How it Works</a>
          </button>
        </div>

        <div className="w-screen flex items-center justify-center">
          <img src="assets/image/hero-dashboard.jpg" alt="email" />
        </div>
      </div>
    </div>
  );
}

export default Email_1_section
