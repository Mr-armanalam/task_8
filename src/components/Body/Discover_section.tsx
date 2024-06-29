import React from 'react'

function Discover_section() {
  return (
    <div className="py-12 px-8 bg-gray-50">
      <h1 className="text-center w-1/2 pt-20 pb-12 mx-auto font-sans font-bold text-5xl text-zinc-900">
        Our cold email software has many benefits to help you
      </h1>

      <div className="flex flex-row justify-evenly flex-wrap py-8">
        
        <div className="bg-white flex flex-row justify-between border-box flex-wrap border w-[620px] rounded-lg mr-6 mb-6 p-12">
          <img
            className="w-[100px] mb-auto"
            src="assets/image/icon-black-service-7.svg"
            alt="black_service"
          />
          <div className="flex flex-col w-[400px]">
            <p className="font-sans text-slate-800 font-bold pl-10 text-2xl">
              Email Targetting & List Building
            </p>
            <p className="pl-10 py-4">
              Brand strategy is all about developing a unique identity that
              distinguishes your...
            </p>
            <div className="pl-10 font-sans font-bold text-lg text-gray-600">
              Discover More
            </div>
          </div>
        </div>

        <div className="bg-white flex flex-row justify-between border-box flex-wrap border w-[620px] rounded-lg mr-6  mb-6 p-12">
          <img
            className="w-[100px] mb-auto"
            src="assets/image/icon-black-service-8.svg"
            alt="black_service2"
          />

          <div className="flex flex-col w-[400px]">
            <p className="font-sans text-slate-800 font-bold pl-10 text-2xl">
              A/B Testing & Experimentati
            </p>
            <p className="pl-10 py-4">
              Once messaging and the audience is decided we begin experimenting
              and results in a...
            </p>
            <div className="pl-10 font-sans font-bold text-lg text-gray-600">
              Discover More
            </div>
          </div>
        </div>

        <div className="bg-white flex flex-row justify-between flex-wrap border w-[620px] rounded-lg mr-6 mb-6 p-12">
          <img
            className="w-[100px] mb-auto"
            src="assets/image/icon-black-service-9.svg"
            alt="black_service3"
          />

          <div className="flex flex-col w-[400px]">
            <p className="font-sans text-nowrap text-slate-800 font-bold pl-10 text-2xl">
              Scale Email Hyper-personalization
            </p>
            <p className="pl-10 py-4">
              One size doesn't fit all & without personalization, your emails
              will look like...
            </p>
            <div className="pl-10 font-sans font-bold text-lg text-gray-600">
              Discover More
            </div>
          </div>
        </div>

        <div className="bg-white flex flex-row justify-between flex-wrap border w-[620px] rounded-lg mr-6 mb-6 p-12">
          <img
            className="w-[100px] mb-auto"
            src="assets/image/icon-black-service-10.svg"
            alt="black_service3"
          />

          <div className="flex flex-col w-[400px]">
            <p className="font-sans text-nowrap text-slate-800 font-bold pl-10 text-2xl">
              Email Drip Campaign Optimization
            </p>
            <p className="pl-10 py-4">
              We optimize and measure for one metric, and a prospects that are
              interested in a conversation...
            </p>
            <div className="pl-10 font-sans font-bold text-lg text-gray-600">
              Discover More
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Discover_section
