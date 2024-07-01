import React from 'react';
import Accordian from "./Accordion";


function Information_section() {
     
  return (
    <div className="py-28 px-8">
      <div className="flex flex-row flex-wrap justify-evenly">
        <div className="flex flex-col justify-center w-[600px]">
          <p className="font-sans font-bold text-zinc-800 text-5xl">
            Need more information about cold email? Just ask
          </p>
          <p className="pt-[20px] font-sans font-medium text-gray-500 text-lg ">
            Creating an effective cold email outreach strategy takes continuous
            optimization. Our cold email experts help so you can do more deals.
          </p>
        </div>

        <div className="w-[670px] pl-8">
          <Accordian
            title="How do I register for the online courses?"
            answer="A cold email is an initial email that is sent to a receiver in
              order to gain a benefit in terms of favor, sales, opportunity or
              any other dual-sided gain. In simple words, when you email someone
              you don’t know for some particular reason is cold emailing."
          />
          <Accordian
            title="How do I register for the online courses?"
            answer="A cold email is an initial email that is sent to a receiver in order to gain a benefit in terms of favor, sales, opportunity or any other dual-sided gain. In simple words, when you email someone you don’t know for some particular reason is cold emailing."
          />
          <Accordian
            title="How do I register for the online courses?"
            answer="A cold email is an initial email that is sent to a receiver in order to gain a benefit in terms of favor, sales, opportunity or any other dual-sided gain. In simple words, when you email someone you don’t know for some particular reason is cold emailing."
          />
        </div>
      </div>
    </div>
  );
}

export default Information_section
