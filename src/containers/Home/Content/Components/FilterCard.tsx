'use client';

import React, { useMemo } from 'react';
import DummyData from '@/static/experiences.json';
import { useAppSelector } from '@/redux/hooks';
import CardContent from './CardContent';

interface FilterCardProps {
  data: typeof DummyData;
}

function FilterCard({ data }: FilterCardProps) {
  const path = useAppSelector((state) => state.navigationSlice.path);

  const filteredData = useMemo(() => {
    if (path === 'home') return data;

    return data.filter((item) => item.category === path);
  }, [data, path]);

  return (
    <>
      {filteredData.map((item) => {
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
    </>
  );
}

export default FilterCard;
