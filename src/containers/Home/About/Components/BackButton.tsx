'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronLeftIcon } from '@/icons';

function BackButton() {
  const pathName = usePathname();

  return pathName !== '/' ? (
    <Link
      href="/"
      className="flex gap-3 cursor-pointer hover:text-main-500 transition duration-100 ease-in-out"
    >
      <ChevronLeftIcon />
      <p>Kembali</p>
    </Link>
  ) : null;
}

export default BackButton;
