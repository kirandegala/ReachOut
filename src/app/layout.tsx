import { ReactNode } from 'react';
import Layout from '@components/Layout/Layout';
import '@app/globals.css';

export const metadata = {
  title: 'ReachOut',
  description: 'A social media platform for international individuals.',
};

interface RootLayoutProps {
  readonly children: ReactNode;
}

function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}

export default RootLayout;
