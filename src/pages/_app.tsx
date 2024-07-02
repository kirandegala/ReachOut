// src/pages/_app.tsx
import { SessionProvider } from 'next-auth/react';
import '../app/globals.css';
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
    </ChakraProvider>
  );
}

export default MyApp;
