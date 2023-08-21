import { NavigationPath } from '../navigation/type';

export interface ContentType {
  id: string;
  title: string;
  subtitle?: string;
  image: string;
  slug: string;
  tags: string[];
  category: NavigationPath;
  skills?: string[];
  description: string;
}
