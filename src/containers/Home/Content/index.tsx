import React from 'react';
import DummyData from '@/static/experiences.json';
import FilterCard from './Components/FilterCard';

function Content() {
  return (
    <div className="flex-1 flex gap-8 flex-col overflow-y-auto p-6">
      <FilterCard data={DummyData} />
    </div>
  );
}

export default Content;
