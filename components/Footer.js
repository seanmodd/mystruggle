import { Box, Text, Image, Flex, useColorModeValue } from '@chakra-ui/react';

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.100', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Box pt="50px" pb={10}>
        <Flex
          align="center"
          _before={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
            ml: 8,
          }}
        >
          <Text fontSize="md" textAlign="center">
            Next
          </Text>
          <Image
            // boxSize="100px"
            pl="2px"
            objectFit="cover"
            src="https://res.cloudinary.com/seanmodd/image/upload/v1629613336/face_4_66893dfd52.png"
            alt="Logo"
          />
          <Text fontSize="md" textAlign="center">
            Auth
          </Text>
        </Flex>
        <Text pt={6} fontSize="sm" textAlign="center">
          © 2021 Sean Modd. All rights reserved
        </Text>
      </Box>
    </Box>
  );
}
