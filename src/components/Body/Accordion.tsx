"use client"
import React, { useState } from "react";

interface AccordionProps {
  title: string;
  answer: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, answer }) => {
  const [accordionopen, setAccordionopen] = useState(false);

  return (
    <div className="pb-2 pt-4 border-b">
      <button
        onClick={() => setAccordionopen(!accordionopen)}
        className="flex flex-row w-full justify-between"
      >
        <span className="font-sans pb-4 font-bold text-zinc-700 text-2xl ">
          {title}
        </span>
        {accordionopen ? <span>-</span> : <span>+</span>}
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-ease-aut text-slate-600 text-sm ${
          accordionopen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden font-sans font-medium text-gray-600 text-lg ">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
