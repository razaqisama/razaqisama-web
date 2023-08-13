import React, { ReactNode } from 'react';

interface ImagesProps {
  className?: string;
  path: string;
  children?: ReactNode;
}

function Images({ className, path, children }: ImagesProps) {
  return (
    <div
      className={className}
      style={{
        background: `url('/images/${path}')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
      }}
    >
      {children}
    </div>
  );
}

export default Images;
