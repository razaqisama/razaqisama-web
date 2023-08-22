'use client';

import React from 'react';
import { useAppSelector } from '@/redux/hooks';

function AboutContent() {
  const { title, subtitle, content, skills } = useAppSelector(
    (state) => state.aboutSlice,
  );

  return (
    <div className="flex flex-col gap-12 text-sm">
      <div>
        <p className="text-xl font-bold text-main-500">{title}</p>
        <p>{subtitle}</p>
      </div>
      {!content ? (
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
      ) : (
        content
      )}
      <div className="flex flex-wrap gap-4">
        {skills &&
          skills.map((skill) => (
            <div
              key={skill}
              className="text-xs px-4 py-1 border-[1px] rounded-full border-main-500"
            >
              {skill}
            </div>
          ))}
      </div>
    </div>
  );
}

export default AboutContent;
