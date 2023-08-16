'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ChevronLeft from '@/icons/ChevronLeft';

function BackButton() {
  const pathName = usePathname();

  return pathName !== '/' ? (
    <Link
      href="/"
      className="flex gap-3 cursor-pointer hover:text-main-500 transition duration-100 ease-in-out"
    >
      <ChevronLeft />
      <p>Kembali</p>
    </Link>
  ) : null;
}

export default BackButton;
