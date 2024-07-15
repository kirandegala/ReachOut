import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FeedDetails } from 'types/feed';
import '../styles/ProfilePage.css';
import Navbar from '@components/molecules/Navbar';
import { useUser } from '@components/UserProvider';
import FeedCard from '@components/molecules/FeedCard';

export default function Profile() {
  const { userDetails } = useUser();
  const [posts, setPosts] = useState<FeedDetails[]>([]);
  const [comments, setComments] = useState<FeedDetails[]>([]);
  const [activeTab, setActiveTab] = useState('posts');

  useEffect(() => {

    const fetchPosts = async () => {
      try {
        console.log(userDetails)
        const response = await axios.get(`http://localhost:3333/api/posts/${userDetails.email}`);
        setPosts(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    const fetchComments = async () => {
      try {
        console.log(userDetails)
        const response = await axios.get(`http://localhost:3333/api/posts/${userDetails.email}`);
        setComments(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };
    if (userDetails) {
      fetchPosts();
      fetchComments();
    }
  }, [userDetails]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <>
      {userDetails ? (
        <>
          <Navbar />
          <div className="profile-page">
            <div className="profile-header">
              <div className="profile-picture">
                <img src={userDetails.picture} alt="Profile Picture" />
              </div>
              <div className="profile-info">
                <h2>{userDetails.name}</h2>
              </div>
            </div>

            <div className="tab-buttons">
              <button onClick={() => handleTabChange('posts')}>Posts</button>
              <button onClick={() => handleTabChange('comments')}>Comments</button>
            </div>

            {activeTab === 'posts' ? (
              <div className="post-list">
                {posts.map((post, index) => (
                  <FeedCard key={index} post={post} />
                ))}
              </div>
            ) : (
              <div className="comment-list">
                {/* {comments.map((comment, index) => (
                  <FeedCard key={index} post={comment} />
                ))} */}
              </div>
            )}
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}