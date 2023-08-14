import { ReactNode } from 'react';

import TeaterInteraktif from './pertunjukan-teater-interaktif-berbasis-teknologi.mdx';
import DelosArticle from './software-engineer-at-delos.mdx';
import EdgarAllanPoe from './my-journey-with-edgar-allan-poe.mdx';
import BasitArticle from './software-engineer-at-bas-it.mdx';
import DiBalikPangkuanIbu from './pertunjukan-monolog-di-balik-pangkuan-ibu.mdx';
import TrixArticle from './software-engineer-at-trix-games-studio.mdx';

type ArticlesType = {
  [key: string]: ReactNode;
};

const Articles: ArticlesType = {
  'pertunjukan-teater-interaktif-berbasis-teknologi': <TeaterInteraktif />,
  'software-engineer-at-delos': <DelosArticle />,
  'my-journey-with-edgar-allan-poe': <EdgarAllanPoe />,
  'software-engineer-at-bas-it': <BasitArticle />,
  'pertunjukan-monolog-di-balik-pangkuan-ibu': <DiBalikPangkuanIbu />,
  'software-engineer-at-trix-games-studio': <TrixArticle />,
};

export default Articles;
