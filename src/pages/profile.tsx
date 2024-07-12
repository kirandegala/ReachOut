import React from 'react';
import '../styles/ProfilePage.css';
import Navbar from '@components/molecules/Navbar';
import { useUser } from '@components/UserProvider';

export default function Profile() {
  const { userDetails } = useUser();

  if (!userDetails) {
    return (
      <>
        <Navbar />
        <div className="profile-page">
          <p>Loading...</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="profile-page">
        <div className="profile-header">
          <div className="profile-picture">
            <img src={userDetails.picture} alt="Profile Picture" />
          </div>
          <div className="profile-info">
            <h2>{userDetails.name}</h2>
            {/* Add other details as needed */}
          </div>
        </div>
        {/* Add bio and other profile details */}
      </div>
    </>
  );
}
