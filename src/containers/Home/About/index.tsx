import React from 'react';
import { GithubCatIcon, LinkedinIcon, InstagramIcon } from '@/icons';

function About() {
  return (
    <div className="flex flex-col gap-16 p-6 w-[35%] border-r-[1px]">
      <div className="flex w-full">
        <p className="flex-1">Razaqisama</p>
        <p> | </p>
        <div className="flex-1 flex justify-end">
          <p>Menu</p>
        </div>
      </div>
      <div className="flex flex-col gap-12 text-sm">
        <div>
          <p className="text-xl font-bold text-main-500">Josep Razaqi</p>
          <p className="">Software Engineer | Plays Director</p>
        </div>
        <p>
          Greetings! I am a versatile software engineer and visionary playwright
          who flourishes at the crossroads of{' '}
          <span className="font-bold text-main-500">Technology</span> and{' '}
          <span className="font-bold text-main-500">Art</span>. With a steadfast
          belief in the synergy between these domains, I specialize in crafting
          code that is not only{' '}
          <span className="font-bold text-main-500">Functional</span> but also{' '}
          <span className="font-bold text-main-500">
            Aesthetically Pleasing
          </span>
          . And As a plays director, I&apos;ve masterfully blended technology
          with the stage, resulting in{' '}
          <span className="font-bold text-main-500">Interactive</span> and{' '}
          <span className="font-bold text-main-500">Immersive</span>{' '}
          performances.
        </p>
        <div className="flex gap-4">
          <GithubCatIcon
            className="w-6 transform hover:scale-[120%] transition duration-300 ease-in-out cursor-pointer"
            color="#fff"
          />
          <LinkedinIcon
            className="w-6 transform hover:scale-[120%] transition duration-300 ease-in-out cursor-pointer"
            color="#fff"
          />
          <InstagramIcon
            className="w-6 transform hover:scale-[120%] transition duration-300 ease-in-out cursor-pointer"
            color="#fff"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
