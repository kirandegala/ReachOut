// src/app/layout.tsx
import { ReactNode } from 'react';
import Layout from '@components/Layout/Layout';
import '@app/globals.css';

export const metadata = {
  title: 'ReachOut',
  description: 'A social media platform for international individuals.',
};

function RootLayout({ children }: { children: ReactNode }) {
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
