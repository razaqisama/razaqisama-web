import { ReactNode } from 'react';

export type AboutState = {
  title: string;
  subtitle?: string;
  content?: ReactNode;
  footer?: ReactNode;
};
