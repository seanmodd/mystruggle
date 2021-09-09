// ! first be sure to run npm run serve-json to get localhost:4000/news up and running!

import { Heading, VStack } from '@chakra-ui/layout';
import React from 'react';
import Link from 'next/link';

function App() {
  return (
    <VStack>
      <Heading>Here are the categories:</Heading>
      <Link href="ssr-dynamic-params/sports">
        <a>Sports</a>
      </Link>
      <Link href="ssr-dynamic-params/politics">
        <a>Politics</a>
      </Link>
    </VStack>
  );
}

export default App;
