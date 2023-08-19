'use client';

import React, { useCallback, useMemo, useRef, useState } from 'react';
import { useClickOutside } from '@/hooks/useClickOutside';
import { Square3DStackIcon } from '@/icons';
import truncateLongWords from '@/utils/truncateLongWords';

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

  const selectedValue = useMemo(() => {
    if (value) return value.label;

    return selectedItem?.label;
  }, [selectedItem, value]);

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
        className="flex gap-4 px-4 py-1 items-center border-[1px] rounded-md cursor-pointer min-w-[200px] max-w-[200px]"
        type="button"
        onClick={handleShowItems(!showItems)}
      >
        <Square3DStackIcon className="w-5 h-5" />
        {selectedValue
          ? truncateLongWords(selectedValue ?? '', 14)
          : truncateLongWords(placeholder, 14)}
      </button>
      <div
        className={`absolute left-0 overflow-hidden ${showItemsStyle} transition-[max-height,padding] duration-300 ease-in-out w-full`}
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
                className={`cursor-pointer ${
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
