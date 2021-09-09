import { useRouter } from 'next/router';
import { Heading, Text, VStack, Stack } from '@chakra-ui/react';
import Link from 'next/link';

const ProductDetail = () => {
  const router = useRouter();
  const { productId } = router.query;

  return (
    <>
      <VStack pt="50px">
        <Heading>Details about {productId}</Heading>
        <Link href="/learning/product-list" passHref>
          <button style={{ marginTop: '20px' }}>view all products</button>
        </Link>
        <Stack py="15px" direction="row">
          <VStack p="10px" borderWidth="2px">
            <Text textTransform="uppercase">PRODUCT #{productId}</Text>
          </VStack>
        </Stack>
      </VStack>
    </>
  );
};

export default ProductDetail;
