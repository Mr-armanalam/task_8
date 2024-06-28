import React from 'react'


function Navbar() {
  return (
    <header className="box-border w-screen py-3 bg-transparent">
      <div className="mx-auto p-4 pt-0">
        <div className="flex items-center justify-between pl-4 m-0">
          {/* header logo start  */}
          <a className='p-0 m-0 text-inherit no-underline' href="#">
            <img src="assets/image/logo-blue-dark.png" alt="Masco"
            width="109" height="24"/>
          </a>
          
          <ul className="nav_option flex flex-row pl-8">
            <li className="mx-8 list-none"><a href="#" className="text-slate-600 block font-bold font-sans text-lg">Demo</a></li>
            <li className="mx-8 list-none"><a href="#" className="text-slate-600 block font-bold font-sans text-lg">About</a></li>
            <li className="mx-8 list-none"><a href="#" className="text-slate-600 block font-bold font-sans text-lg">Services</a></li>
            <li className="mx-8 list-none"><a href="#" className="text-slate-600 block font-bold font-sans text-lg">Pages</a></li>
            <li className="mx-8 list-none"><a href="#" className="text-slate-600 block font-bold font-sans text-lg">Contact</a></li>
          </ul>

          <div className=" flex mr-8">
            <button className='px-8 font-bold font-sans text-lg text-slate-700'>Login</button>
            <button className='bg-blue-700 rounded-md min-w-40 py-3 font-semibold font-sans text-lg text-white'>Sign up free</button>           
          </div>           
        </div>
      </div>
    </header>
  )
}

export default Navbar
