import React from 'react';
import Link from 'next/link';
import Images from '@/components/Image';

interface CardContentProps {
  title?: string;
  imageUrl?: string;
  tags?: string[];
  slug?: string;
}

function CardContent({
  title = 'Pertunjukan Teater Interaktif Berbasis Teknologi',
  imageUrl = '14.jpg',
  tags = ['Art', 'Performance'],
  slug,
}: CardContentProps) {
  return (
    <Link href={`/article/${slug}`}>
      <div className="group cursor-pointer flex flex-col min-h-[500px] bg-gray-900 rounded-xl overflow-hidden">
        <Images
          path={imageUrl}
          className="relative flex-1 border-[1px] group-hover:border-main-500 transition duration-100 ease-in-out p-4 bg-black rounded-xl shadow-[0px_0px_16px_6px_#000]"
        >
          <div className="absolute top-0 mt-4 flex gap-4">
            {tags &&
              tags.map((item) => {
                return (
                  <div
                    key={item}
                    className="py-1 px-6 text-sm rounded-full backdrop-blur-md border-[1px] group-hover:border-main-500"
                  >
                    {item}
                  </div>
                );
              })}
          </div>
        </Images>
        <div className="flex items-center gap-12 p-4 justify-between">
          <div className="text-2xl">{title}</div>
          <div>
            <button
              type="button"
              className="transition duration-100 ease-in-out px-12 py-2 border-[1px] group-hover:border-main-500 rounded-full shadow-[0px_4px_8px_1px_#000] active:shadow-none"
            >
              Lihat
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CardContent;
