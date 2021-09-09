import Link from 'next/link';
import { Heading } from '@chakra-ui/layout';
import React from 'react';

function App({ post }) {
  return (
    <div>
      <Heading>
        {post.id} {post.title}
      </Heading>
      <Link href="/rendering/ssg-dynamic-params">
        <a>Back</a>
      </Link>
    </div>
  );
}

export default App;

export async function getStaticPaths() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();
  const paths = posts.map((post) => ({
    params: {
      postId: post.id.toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();
  return {
    props: {
      post: data,
    },
  };
}
