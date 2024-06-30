// src/pages/protected.tsx
import { getSession, useSession } from 'next-auth/react';
import { GetServerSideProps } from 'next';

export default function ProtectedPage() {
  const { data: session } = useSession();
  if (!session) return <p>Access Denied</p>;

  return <div>Protected Content for {session.user?.name}</div>;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: '/auth/signin',
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
};
