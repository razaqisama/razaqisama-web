import React, { ReactNode } from 'react';
import Image from 'next/image';

interface ImagesProps {
  className?: string;
  path: string;
  alt: string;
  children?: ReactNode;
}

export function NextImage({ className, path, alt, children }: ImagesProps) {
  return (
    <div className={`${className}`}>
      <Image
        src={path}
        alt={alt}
        fill
        objectFit="cover"
        placeholder="blur"
        blurDataURL="https://lh3.googleusercontent.com/pw/AIL4fc9yhaVFBuEACkenHOBj1F-FflKtFDRg7fw2GZaYcCfzFFr0imGbO04GFFdjRN9qVDzoat5sd4-Q_RVlz7QgoOq0xZoG79SMkEf2bXMtXGuos_prMWueVL6bdwCri_RiKxXF6m5hyh3tVX4NcyfY5kpQ=w964-h1718-s-no?authuser=0"
      />
      {children}
    </div>
  );
}

export default NextImage;
