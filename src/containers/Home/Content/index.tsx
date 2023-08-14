import React from 'react';
import DummyData from '@/static/experiences.json';
import CardContent from './Components/CardContent';

function Content() {
  return (
    <div className="flex-1 flex gap-8 flex-col overflow-y-auto p-6">
      {DummyData.map((item) => {
        return (
          <CardContent
            title={item.title}
            imageUrl={item.image}
            tags={item.tags}
            slug={item.slug}
            key={item.id}
          />
        );
      })}
    </div>
  );
}

export default Content;
