import { useRouter } from 'next/router';
import { Heading, Text, VStack } from '@chakra-ui/react';
import Link from 'next/link';

const App = () => {
  const router = useRouter();
  const { params = [] } = router.query;

  if (params.length === 2) {
    return (
      <VStack pt="50px">
        <Heading pt="50px">Params length is 2</Heading>
        <Text>
          Viewing docs for concept {params[0]} and feature {params[1]}
        </Text>
        <Link href="/learning/catch-all/learning-catch-all">
          <a>Go back</a>
        </Link>
      </VStack>
    );
  }

  if (params.length === 0) {
    return (
      <>
        <VStack pt="50px">
          <VStack>
            <Heading> This is for the Catch-All Routes...</Heading>
            <Link href="/learning/catch-all/1/1">
              <a>Concept 1 and Feature 1</a>
            </Link>
            <Link href="/learning/catch-all/1/2">
              <a>Concept 1 and Feature 2</a>
            </Link>
            <Link href="/learning/catch-all/1/3">
              <a>Concept 1 and Feature 3</a>
            </Link>
            <Link href="/learning/catch-all/1">
              <a>Concept 1</a>
            </Link>
            <Link href="/learning/catch-all/1/2/2">
              <a>Concept 1 and Feature 2 part 2</a>
            </Link>
          </VStack>
        </VStack>
      </>
    );
  }

  return (
    <>
      <VStack pt="50px">
        <Heading pt="50px">
          Params length is not 2, it is {params.length}
        </Heading>
        <Link href="/learning/catch-all/learning-catch-all">
          <a>Go back</a>
        </Link>
      </VStack>
    </>
  );
};

export default App;
