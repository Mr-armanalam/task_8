import React from 'react'
import Email_1_section from './Email_1_section'
import Brand_section from './Brand_section'
import Process_section from './Process_section'
import Email_2_section from './Email_2_section'
import Discover_section from './Discover_section'
import Channel_section, {Channel} from './Channel_section'
import Review_section from './Review_section'
import Information_section from './Information_section'

import Marquee from 'react-fast-marquee'
import Contact_section from './Contact_section'

function main() {
  return (
    <div className="w-screen">
      <Email_1_section />
      <Brand_section />
      <Process_section />
      <Email_2_section />
      <Discover_section />
      <Channel_section />
      <div className='pb-20'>
        <Marquee direction="right">
          <Channel />
        </Marquee>
        <Marquee>
          <Channel />
        </Marquee>
      </div>
      <Review_section/>
      <Information_section/>
      <Contact_section/>
    </div>
  );
}

export default main
