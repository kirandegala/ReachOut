import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import FeedCard from '@components/molecules/FeedCard';
import Navbar from '@components/molecules/Navbar';
import PostContent from '@components/molecules/PostContent';
import { FeedDetails } from 'types/feed';
import { NextPageWithAuth } from '../types/next-auth.d';
import { useUser } from '@components/UserProvider';
import axios from 'axios';

const FeedPage: NextPageWithAuth = () => {

  const { userDetails } = useUser();
  const { data: session } = useSession();

  // Create user if they dont exist
  useEffect(() => {
    const saveUser = async () => {
      try {
        const response = await axios.post('http://localhost:3333/api/users/create', {
          username: userDetails.name,
          email: userDetails.email,
          image: userDetails.picture,
          bio: '',
        });
      } catch (error) {
      }
    };

    if (session) {
      saveUser();
    }
  }, [session,userDetails]);

  // Fetch Posts
  const [posts, setPosts] = useState<FeedDetails[]>([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:3333/api/posts');
        setPosts(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchPosts();
  }, []);

  // Send Post
  const handlePostSubmit = async (post: string) => {
    try {
      console.log(userDetails.email)
      const response = await axios.post('http://localhost:3333/api/posts', {
        email : userDetails.email,
        postContent: post,
      });
      console.log('Post created:', response.data);
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <>
      {userDetails ? (
          <div className="flex flex-col gap-1">
            <Navbar />
            <div className="w-[40vw] mx-auto flex flex-col gap-4">
              <PostContent onPostSubmit={handlePostSubmit} />
              {posts.map((post, index) => (
                <FeedCard key={index} post={post}/>
              ))}
            </div>
          </div>
      ) : (
        <p> Loading... </p>
      )
     }
    </>

  );
};

FeedPage.auth = true;

export default FeedPage;
