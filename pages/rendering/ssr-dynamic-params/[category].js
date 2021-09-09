import { Heading } from '@chakra-ui/layout';
import React from 'react';
import Link from 'next/link';

function App({ articles, category }) {
  return (
    <div>
      <Heading>
        Showing news for category <i>{category}</i>
      </Heading>
      {articles.map((article) => (
        <div key={article.id}>
          <h2>{article.title}</h2>
          <p>{article.description}</p>
        </div>
      ))}
      <Link href="/rendering/ssr-dynamic-params">
        <a>Go back</a>
      </Link>
    </div>
  );
}

export default App;

export async function getServerSideProps(context) {
  const { params } = context;
  const { category } = params;
  const response = await fetch(
    `http://localhost:4000/news?category=${category}`
  );
  const data = await response.json();

  return {
    props: {
      articles: data,
      category,
    },
  };
}
