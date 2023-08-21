'use client';

import React from 'react';
import { useAppSelector } from '@/redux/hooks';

function AboutContent() {
  const { title, subtitle, content, footer } = useAppSelector(
    (state) => state.aboutSlice,
  );

  return (
    <div className="flex flex-col gap-12 text-sm">
      <div>
        <p className="text-xl font-bold text-main-500">{title}</p>
        <p>{subtitle}</p>
      </div>
      {content}
      {footer}
    </div>
  );
}

export default AboutContent;
