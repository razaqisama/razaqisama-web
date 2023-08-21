import React from 'react';
import experiences from '@/static/experiences';
import { ContentType } from '@/redux/features/content/type';
import FilterCard from './Components/FilterCard';

function Content() {
  return (
    <div className="flex-1 flex gap-8 flex-col overflow-y-auto p-6">
      <FilterCard data={experiences as ContentType[]} />
    </div>
  );
}

export default Content;
