'use client';

import React, { useCallback, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { ContentType } from '@/redux/features/content/type';
import {
  resetAboutState,
  setAboutState,
} from '@/redux/features/about/aboutSlice';
import CardContent from './CardContent';

interface FilterCardProps {
  data: ContentType[];
}

function FilterCard({ data }: FilterCardProps) {
  const path = useAppSelector((state) => state.navigationSlice.path);
  const dispatch = useAppDispatch();

  const filteredData = useMemo(() => {
    if (path === 'home') {
      dispatch(resetAboutState());
      return data;
    }

    return data.filter((item) => item.category === path);
  }, [data, dispatch, path]);

  const handleClickItem = useCallback(
    (item: ContentType) => () => {
      dispatch(
        setAboutState({
          title: item.title,
          subtitle: item.subtitle,
          content: item.description,
          skills: item.skills,
        }),
      );
    },
    [dispatch],
  );

  return filteredData.length ? (
    <>
      {filteredData.map((item) => {
        return (
          <CardContent
            title={item.title}
            imageUrl={item.image}
            tags={item.tags}
            slug={item.slug}
            key={item.id}
            onClick={handleClickItem(item)}
          />
        );
      })}
    </>
  ) : (
    <div className="h-full flex justify-center items-center">
      <div className="w-[50%] text-center">
        Great Content Takes Time! Stay patient as I prepare to launch new
        updates and enhance your experience.
      </div>
    </div>
  );
}

export default FilterCard;
