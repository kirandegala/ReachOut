// src/components/UserProfile.tsx
import { useSession } from 'next-auth/react';
import React from 'react';

const UserProfile: React.FC = () => {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (!session || !session.user) {
    return <p>User is not logged in</p>;
  }

  return (
    <div>
      <h1>User Profile</h1>
      {session.user.image && <img src={session.user.image} alt={session.user.name || 'User Image'} />}
      <p>Name: {session.user.name}</p>
      <p>Email: {session.user.email}</p>
    </div>
  );
};

export default UserProfile;
