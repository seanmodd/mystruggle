import { useRouter } from 'next/router';
import {
  Heading,
  Text,
  VStack,
  Stack,
} from '@chakra-ui/react';
import Link from 'next/link';

const ProductDetail = () => {
  const router = useRouter();
  const { productId } = router.query;

  return (
    <>
      <VStack pt="50px">
        <Link href="/learning/nested-dynamic"  passHref>
          <button style={{ marginTop: '0px' }}>go back</button>
        </Link>
        <Heading pt="50px">Details about {productId}</Heading>

        <Stack py="15px" direction="row">
          <VStack p="10px" borderWidth="2px">
            <Text textTransform="uppercase">{productId}</Text>
            <Link href="/learning/nested-dynamic/1/review/1"  passHref>
              <button style={{ marginTop: '20px' }}>Read the reviews!</button>
            </Link>
          </VStack>
        </Stack>
      </VStack>
    </>
  );
};

export default ProductDetail;
