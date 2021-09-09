import * as moment from 'moment';
import Link from 'next/link';
// import moment from 'moment';
import {
  Heading,
  useColorMode,
  Stack,
  HStack,
  Divider,
  Text,
  Box,
} from '@chakra-ui/react';

export default function SinglePost({
  postId,
  postUsername,
  postTitle,
  postPublished,
  postContent,
  postUpdated,
}) {


  const { colorMode } = useColorMode();

  return (
    <Stack
      borderRadius="10px"
      justify="center"
      textAlign="center"
      py="15px"
      px="10px"
      key={postId}
    >
      <Box>
        <Link href="/strapi-next" passHref>
          <button>go back</button>
        </Link>
      </Box>
      <Heading
        _hover={{
          color: colorMode === 'dark' ? '#ff00ea' : '#ff00ea',
          transition: 'all 0.2s ease-in-out',
        }}
        mb="10px"
        transition="all 0.2s ease-in-out"
        cursor="pointer"
        letterSpacing="2.5px"
        textTransform="uppercase"
      >
        {postTitle}
      </Heading>
      <Divider />
      <HStack spacing="5%" fontWeight="normal" justify="center">
        <Stack spacing="0px" w="250px">
          <p>date published:</p>
          <p>{moment(postPublished).format('MM/DD/YY')}</p>
        </Stack>
        <Stack spacing="0px" w="250px">
          <p>posted by: </p>
          <p>{postUsername}</p>
        </Stack>
        <Stack spacing="0px" w="250px">
          <p>last updated: </p>
          <p> {moment(postUpdated).format('MM/DD/YY')}</p>
        </Stack>
      </HStack>
      <Divider />

      <Box px="200px" py="10px">
        <Text>{postContent}</Text>
      </Box>
    </Stack>
  );
}
