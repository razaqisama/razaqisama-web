import React from 'react';
import Article from '@/static/article';

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

function ArticlePage({ params }: ArticlePageProps) {
  return (
    <div className="flex flex-col items-center w-full p-8 overflow-y-auto">
      <article className="prose">{Article[params.slug]}</article>
    </div>
  );
}

export default ArticlePage;
