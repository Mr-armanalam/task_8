import React from 'react'
import Email_1_section from './Email_1_section'
import Brand_section from './Brand_section'
import Process_section from './Process_section'
import Email_2_section from './Email_2_section'
import Discover_section from './Discover_section'
import Channel_section, {Channel} from './Channel_section'

import Marquee from 'react-fast-marquee'

function main() {
  return (
    <div className="w-screen">
      <Email_1_section />
      <Brand_section />
      <Process_section />
      <Email_2_section />
      <Discover_section />
      <Channel_section />
      <Marquee direction='right'>
        <Channel/>
      </Marquee>
      <Marquee>
        <Channel />
      </Marquee>
    </div>
  );
}

export default main
