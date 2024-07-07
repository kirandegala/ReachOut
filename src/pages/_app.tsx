// src/pages/_app.tsx
import { AppProps } from 'next/app';
import { SessionProvider, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { ChakraProvider } from '@chakra-ui/react';
import '../app/globals.css'; // Correct path to the globals.css file

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <SessionProvider session={pageProps.session}>
        {Component.auth ? (
          <Auth>
            <Component {...pageProps} />
          </Auth>
        ) : (
          <Component {...pageProps} />
        )}
      </SessionProvider>
    </ChakraProvider>
  );
}

function Auth({ children }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  React.useEffect(() => {
    if (status === 'loading') return; // Do nothing while loading
    if (!session) router.push('/'); // Redirect if not authenticated
  }, [session, status, router]);

  if (session) {
    return children;
  }

  return <p>Loading...</p>;
}

export default MyApp;