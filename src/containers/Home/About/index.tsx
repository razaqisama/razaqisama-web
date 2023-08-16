import React from 'react';
import Link from 'next/link';
import { GithubCatIcon, LinkedinIcon, InstagramIcon } from '@/icons';
import BackButton from './Components/BackButton';

function About() {
  return (
    <div className="flex flex-col justify-between p-6 min-w-[500px] max-w-[500px] border-r-[1px]">
      <div className="flex flex-col gap-16">
        <div className="flex w-full">
          <p className="flex-1">Razaqisama</p>
          <p> | </p>
          <div className="flex-1 flex justify-end">
            <p>Portfolio</p>
          </div>
        </div>
        <div className="flex flex-col gap-12 text-sm">
          <div>
            <p className="text-xl font-bold text-main-500">Josep Razaqi</p>
            <p className="">Software Engineer | Plays Director</p>
          </div>
          <p>
            Greetings! I am a versatile software engineer and visionary
            playwright who flourishes at the crossroads of{' '}
            <span className="font-bold text-main-500">Technology</span> and{' '}
            <span className="font-bold text-main-500">Art</span>. With a
            steadfast belief in the synergy between these domains, I specialize
            in crafting code that is not only{' '}
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
      </div>
      <BackButton />
    </div>
  );
}

export default About;
