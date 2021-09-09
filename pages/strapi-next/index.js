import { VStack, Stack } from '@chakra-ui/react';
import Post from '../../components/Post';

export default function Home({ posts }) {
  // {console.log(posts)}
  return (
    <VStack pt="25px">
      <h1 style={{ fontSize: '2.8em', textDecoration: 'underline' }}>
        Strapi Blog Posts
      </h1>
      <Stack w="45%" pt="30px" spacing="20px">

        {posts  && posts.map((post) => (
            
            <Post
              postId={post.id}
              postUsername={post.User.username}
              postTitle={post.Title}
              postUpdated={post.updated_at}
              postPublished={post.published_at}
              postSlug={post.Slug}
            />
          ))}
      </Stack>
    </VStack>
  );
}

export async function getStaticProps() {
  // ! get post from Strapi API
  // const res = await fetch('http://localhost:1337/posts');
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();
  return {
    props: { posts },
  };
}




