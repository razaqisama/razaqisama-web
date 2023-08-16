import React from 'react';
import { Metadata } from 'next';
import Article from '@/static/article';

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export const metadata: Metadata = {
  title: 'Razaqisama - Article',
  description:
    'Read an insightful article on a topic that explores XYZ. Gain valuable insights and information from this article by Razaqisama.',
};

function ArticlePage({ params }: ArticlePageProps) {
  return (
    <div className="flex flex-col items-center w-full overflow-y-auto">
      <article className="prose max-w-[80%] p-8 ">
        {Article[params.slug]}
      </article>
    </div>
  );
}

export default ArticlePage;
