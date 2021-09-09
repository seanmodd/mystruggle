import { ChakraProvider, Box, VStack } from '@chakra-ui/react';
import styles from '../styles/Home.module.css';
import { theme } from '../styles/theme';
import '../styles/globals.css';
import Footer from '../components/Footer';
import { MyTitle } from '../components/SeanNavbar';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <MyTitle />
      <Box
        w="100vw"
        alignItems="center"
        textAlign="center"
        justifyContent="center"
        px="250px"
      >
        <div
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '65vh',
            // maxWidth: '85vw',
            // backgroundColor: '#f7f7f7',
          }}
        >
          <Component {...pageProps} />
        </div>
      </Box>
      <Footer style={{ position: 'absolute', top: '25px' }} />
    </ChakraProvider>
  );
}

export default MyApp;
