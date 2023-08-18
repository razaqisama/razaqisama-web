'use client';

import React, { useCallback, useMemo, useRef, useState } from 'react';
import { useClickOutside } from '@/hooks/useClickOutside';
import { Square3DStackIcon } from '@/icons';

export interface SelectItemType {
  label: string;
  value: string | number;
}

interface SelectProps {
  placeholder?: string;
  items: SelectItemType[];
  value?: SelectItemType;
  onChange?: (value: SelectItemType) => void;
}

function Select({
  placeholder = 'Menu',
  items = [],
  value,
  onChange,
}: SelectProps) {
  const [showItems, setShowItems] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<SelectItemType>();
  const containerRef = useRef<HTMLDivElement>(null);

  const handleShowItems = useCallback(
    (show: boolean) => () => {
      setShowItems(show);
    },
    [],
  );

  const showItemsStyle = useMemo(() => {
    return showItems ? 'py-1 max-h-[135px]' : 'py-0 max-h-[0px]';
  }, [showItems]);

  const handleClickItem = useCallback(
    (item: SelectItemType) => () => {
      if (onChange) {
        onChange(item);
      }

      if (!value) {
        setSelectedItem(item);
      }

      setShowItems(false);
    },
    [onChange, value],
  );

  useClickOutside([containerRef], () => {
    setShowItems(false);
  });

  return (
    <div className="relative text-sm">
      <button
        className="flex gap-4 justify-between px-8 py-1 items-center border-[1px] rounded-md cursor-pointer"
        type="button"
        onClick={handleShowItems(!showItems)}
      >
        <Square3DStackIcon className="w-5 h-5" />
        {placeholder}
      </button>
      <div
        className={`absolute right-0 overflow-hidden ${showItemsStyle} transition-[max-height,padding] duration-300 ease-in-out w-[200px]`}
      >
        <div
          ref={containerRef}
          className="max-h-[130px] bg-black border-[1px] flex flex-col gap-1 rounded-md w-full py-2 overflow-y-auto"
        >
          {items.map((item) => {
            return (
              <button
                type="button"
                onClick={handleClickItem(item)}
                key={item.value}
                className={`cursor-pointer text-start ${
                  item.value === selectedItem?.value ? 'underline' : ''
                } hover:underline px-2`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Select;
