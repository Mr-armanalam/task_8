import React from 'react'

function Process_section() {
  return (
    <div className="pb-16 bg-darkblue-950 mt-12">
      <div className="process_title">
        <h1>A simple process to use is a cold email drip campaign</h1>
      </div>
      <div className="process_step_container">
        <div className="process_step">
          <div className="step_icon">
            <img src="assets/image/icon-white-process-1.svg" alt="step1_icon" />
          </div>
          <div className="p_step_box">
            <span className="p_step">Step1</span>
          </div>
          <span className="p_step_title">Import Perfect Audieance</span>
          <span className="step_text">
            Create manually, use a contact form, or import bulk prospects using
            CSV or using Google Drive spreadsheets. Maximize of your workflow
            by...
          </span>
        </div>
        <div className="process_step">
          <div className="step_icon">
            <img src="assets/image/icon-white-process-2.svg" alt="step1_icon" />
          </div>
          <div className="p_step_box">
            <span className="p_step">Step2</span>
          </div>
          <span className="p_step_title">Write unique messages</span>
          <span className="step_text">
            Maximize your open & reply rate making every email stand with a
            personalization. Create your own attributes/merge tag & Add
            variations...
          </span>
        </div>
        <div className="process_step">
          <div className="step_icon">
            <img src="assets/image/icon-white-process-3.svg" alt="step1_icon" />
          </div>
          <div className="p_step_box">
            <span className="p_step">Step3</span>
          </div>
          <span className="p_step_title">Turn on automation</span>
          <span className="step_text">
            Wake up each day to find leads, directly in your inbox, by building
            a predictable pipeline. We take prospects who replied automatically
            out of the...
          </span>
        </div>
      </div>
    </div>
  );
}

export default Process_section
