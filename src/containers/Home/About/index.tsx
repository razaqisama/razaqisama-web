import React from 'react';
import Link from 'next/link';
import { GithubCatIcon, InstagramIcon, LinkedinIcon } from '@/icons';
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
        <div className="flex gap-4">
          <Link href="https://github.com/razaqisama">
            <GithubCatIcon
              className="w-6 transform hover:scale-[120%] transition duration-300 ease-in-out cursor-pointer"
              color="#fff"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/razaqisama/">
            <LinkedinIcon
              className="w-6 transform hover:scale-[120%] transition duration-300 ease-in-out cursor-pointer"
              color="#fff"
            />
          </Link>
          <Link href="https://www.instagram.com/joojujijoje/">
            <InstagramIcon
              className="w-6 transform hover:scale-[120%] transition duration-300 ease-in-out cursor-pointer"
              color="#fff"
            />
          </Link>
        </div>
      </div>
      <BackButton />
    </div>
  );
}

export default About;
