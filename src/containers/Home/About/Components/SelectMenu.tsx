'use client';

import React, { useCallback } from 'react';
import Select, { SelectItemType } from '@/components/Select';
import { useAppDispatch } from '@/redux/hooks';
import { setPath } from '@/redux/features';
import { NavigationPath } from '@/redux/features/navigation/type';

function SelectMenu() {
  const dispatch = useAppDispatch();
  const SelectItem = [
    {
      value: 'home',
      label: 'Home',
    },
    {
      value: 'career-journey',
      label: 'Career Journey',
    },
    {
      value: 'artistic-expression',
      label: 'Artistic Expression',
    },
    {
      value: 'blog',
      label: 'Blog',
    },
  ];

  const handleChangeItem = useCallback(
    (item: SelectItemType) => {
      dispatch(setPath(item.value as NavigationPath));
    },
    [dispatch],
  );

  return <Select items={SelectItem} onChange={handleChangeItem} />;
}

export default SelectMenu;
