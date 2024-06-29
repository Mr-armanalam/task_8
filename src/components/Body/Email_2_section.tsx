import React from 'react'
import { BsPatchCheckFill } from "react-icons/bs";

function Email_2_section() {
    const check_icon_clor = { color: "#3147FF" };
  return (
    <div className="flex flex-col pt-20">
      <div className="flex flex-row justify-evenly flex-wrap pb-12 px-10 mb-4">
        <img
          className="mt-12 pr-4"
          src="assets/image/content-img-1.png"
          width="561"
          height="501"
          alt="cntnt_img1"
        />
        <div className="mt-4 w-[600px] mx-4 pt-8">
          <p className="font-sans w-[100%] text-slate-900 pb-8 font-bold text-5xl">
            Masco cold email outreach that drives meetings with your dream
            clients
          </p>

          <p className="font-sans w-90% text-slate-700 text-xl border-b-2 pb-10 font-normal">
            Turn Masco's cold email outreach into a lead-converting sales
            machine. Our simple-to-use features combined with our done-for-you
            services will enable you to generate and close deals faster.
          </p>
          <div className="flex flex-row flex-wrap pt-8">
            <span className="leading-12 mb-4 pr-16">
              <h1 className="font-sans text-7xl text-blue-700 font-bold">
                80%
              </h1>
              <p className="font-sans text-slate-800 text-xl font-normal pt-2">
                Increase in Monthly Meetings
              </p>
            </span>
            <span className="leading-12 mb-4">
              <h1 className="font-sans text-7xl text-blue-700 font-bold">
                $50M
              </h1>
              <p className="font-sans text-slate-800 text-xl font-normal pt-2">
                Recurring Revenue Generated
              </p>
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-evenly flex-wrap mr-8 pb-12 mb-4">
        <div className="mt-4 mx-4 w-[600px]">
          <h2 className="font-sans w-[100%] justify-start text-slate-900 pb-8 font-bold text-5xl">
            Achieve more productivity and revenue for every rep
          </h2>
          <p className="font-sans text-slate-700 text-xl pb-10 font-normal">
            Creating an effective cold email outreach strategy takes continuous
            optimization. Our cold email experts help so you can do more deals.
          </p>

          <div className="flex text-2xl items-center">
            <BsPatchCheckFill style={check_icon_clor} />
            <h2 className="text-slate-800 pl-4 py-2 font-bold">
              All clients in one place
            </h2>
          </div>
          <p className="font-sans text-slate-700 text-xl pb-8 pl-10 font-normal">
            Have all your clients under one roof and shift between client
            profiles with just one click. Invite as many co-workers as you need
            to get the job done.
          </p>
          <div className="flex text-2xl items-center">
            <BsPatchCheckFill style={check_icon_clor} />
            <h2 className="text-slate-800 pl-4 py-2 font-bold">
              Easily scale campaigns
            </h2>
          </div>

          <p className="font-sans text-slate-700 text-xl pb-8 pl-10 font-normal">
            Ready to send more volume? Just add an inbox (or five) to your
            existing campaign and we’ll start sending the same campaign from
            multiple inboxes.
          </p>
        </div>

        <img
          className=" pl-2 py-8"
          src="assets/image/content-img-2.png"
          width="561"
          height="501"
          alt="abc"
        />
      </div>
    </div>
  );
}

export default Email_2_section
