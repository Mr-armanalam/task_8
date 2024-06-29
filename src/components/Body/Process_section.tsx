import React from "react";

function Process_section() {
  return (
    <div className="pb-16 bg-darkblue-950 px-4 mt-12">
      <p className="text-white text-center text-5xl font-semibold mx-auto pt-24 pb-20 w-1/2">
        A simple process to use is a cold email drip campaign
      </p>

      <div className="flex flex-row flex-wrap justify-evenly">
        <div className="p-8 border rounded-lg w-[407px]  mb-4">
          <img src="assets/image/icon-white-process-1.svg" alt="step1_icon" />

          <p className="mt-12 mb-10 text-teal-100 font-bold text-2xl underline decoration-2 underline-offset-8">
            Step1
          </p>

          <p className="pb-4 font-sans font-bold text-2xl text-white">
            Import Perfect Audieance
          </p>
          <p className="text-zinc-400 font-medium">
            Create manually, use a contact form, or import bulk prospects using
            CSV or using Google Drive spreadsheets. Maximize of your workflow
            by...
          </p>
        </div>
        <div className="p-8 border rounded-lg w-[407px]  mb-4">
          <img src="assets/image/icon-white-process-2.svg" alt="step1_icon" />

          <p className="mt-12 mb-10 text-teal-100 font-bold text-2xl underline decoration-2 underline-offset-8">
            Step2
          </p>

          <p className="pb-4 font-sans font-bold text-2xl text-white">
            Write unique messages
          </p>
          <p className="text-zinc-400 font-medium">
            Maximize your open & reply rate making every email stand with a
            personalization. Create your own attributes/merge tag & Add
            variations...
          </p>
        </div>
        <div className="p-8 border rounded-lg w-[407px] mb-4">
          <img src="assets/image/icon-white-process-3.svg" alt="step1_icon" />

          <p className="mt-12 mb-10 text-teal-100 font-bold text-2xl underline decoration-2 underline-offset-8">
            Step3
          </p>

          <p className="pb-4 font-sans font-bold text-2xl text-white">
            Turn on automation
          </p>
          <p className="text-zinc-400 font-medium">
            Wake up each day to find leads, directly in your inbox, by building
            a predictable pipeline. We take prospects who replied automatically
            out of the...
          </p>
        </div>
      </div>
    </div>
  );
}

export default Process_section;
