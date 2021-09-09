import { Heading, VStack } from '@chakra-ui/react';
import SinglePost from 'components/SinglePost';

export default function Post({ post }) {
  return (
    <VStack>
      <SinglePost
        postId={post.id}
        postUsername={post.User.username}
        postTitle={post.Title}
        postUpdated={post.updated_at}
        postPublished={post.published_at}
        postContent={post.Content}
      />
      <Heading>HELLO</Heading>
    </VStack>
  );
}

//! Tell NextJS how many pages there are
//! THEN for each individual page, get the data for that page.

export async function getStaticPaths() {
  const res = await fetch('http://localhost:1337/posts');
  const posts = await res.json();

  const paths = posts.map((post) => ({
    params: { slug: post.Slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  const res = await fetch(`http://localhost:1337/posts?Slug=${slug}`);
  const data = await res.json();
  const post = data[0];

  return {
    props: { post },
  };
}
