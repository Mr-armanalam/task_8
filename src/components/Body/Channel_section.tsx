import React from "react";

export default function Channel_section() {
  return (
    <div className="flex flex-row items-center flex-wrap justify-between p-8 py-24">
      <h1 className="font-sans font-bold text-slate-950 w-[700px] ml-6 text-5xl">
        We automate cold outreach across multiple channels
      </h1>
      <button className="text-white  w-[260px] h-[70px] rounded-lg mr-6 font-semibold text-xl bg-[#3147FF]">
        See All Integrations
      </button>
    </div>
  );
}

export function Channel() {
  return (
    <div className="flex flex-row justify-evenly">
      <div className="flex w-[250px] items-center  mx-4 mb-8 border py-4 px-4 rounded-lg">
        <img src="assets/image/icon-color-gmail.svg" alt="gmail" />
        <p className=" text-gray-800 pl-8 text-2xl font-semibold">Gmail</p>
      </div>
      <div className="flex w-[250px] items-center  mx-4 mb-8 border py-4 px-4 rounded-lg">
        <img src="assets/image/icon-color-dropbox.svg" alt="gmail" />
        <p className=" text-gray-800 pl-8 text-2xl font-semibold">Dropbox</p>
      </div>
      <div className="flex w-[250px] items-center  mx-4 mb-8 border py-4 px-4 rounded-lg">
        <img src="assets/image/icon-color-figma.svg" alt="gmail" />
        <p className=" text-gray-800 pl-8 text-2xl font-semibold">Figma</p>
      </div>
      <div className="flex w-[250px] items-center  mx-4 mb-8 border py-4 px-4 rounded-lg">
        <img src="assets/image/icon-color-mailchimp.svg" alt="gmail" />
        <p className=" text-gray-800 pl-8 text-2xl font-semibold">Mailchimp</p>
      </div>
      <div className="flex w-[250px] items-center  mx-4 mb-8 border py-4 px-4 rounded-lg">
        <img src="assets/image/icon-color-shopify.svg" alt="gmail" />
        <p className=" text-gray-800 pl-8 text-2xl font-semibold">Shopify</p>
      </div>
      <div className="flex w-[250px] items-center  mx-4 mb-8 border py-4 px-4 rounded-lg">
        <img src="assets/image/icon-color-skype.svg" alt="gmail" />
        <p className=" text-gray-800 pl-8 text-2xl font-semibold">Skype</p>
      </div>
      <div className="flex w-[250px] items-center  mx-4 mb-8 border py-4 px-4 rounded-lg">
        <img src="assets/image/icon-color-slack.svg" alt="gmail" />
        <p className=" text-gray-800 pl-8 text-2xl font-semibold">Slack</p>
      </div>
      <div className="flex w-[250px] items-center  mx-4 mb-8 border py-4 px-4 rounded-lg">
        <img src="assets/image/icon-color-snapchat.svg" alt="gmail" />
        <p className=" text-gray-800 pl-8 text-2xl font-semibold">Snapchat</p>
      </div>
      <div className="flex w-[250px] items-center  mx-4 mb-8 border py-4 px-4 rounded-lg">
        <img src="assets/image/icon-color-spotify.svg" alt="gmail" />
        <p className=" text-gray-800 pl-8 text-2xl font-semibold">Spotify</p>
      </div>
    </div>
  );
}
