import React from 'react';
import BackButton from './Components/BackButton';
import SelectMenu from './Components/SelectMenu';
import AboutContent from './Components/AboutContent';

function About() {
  return (
    <div className="flex flex-col gap-8 justify-between p-6 min-w-[520px] max-w-[520px] border-r-[1px] overflow-y-auto">
      <div className="flex flex-col gap-16">
        <div className="flex items-center justify-between w-full">
          <p className="">Razaqisama</p>
          <div className=" flex justify-end">
            <SelectMenu />
          </div>
        </div>
        <AboutContent />
      </div>
      <BackButton />
    </div>
  );
}

export default About;
