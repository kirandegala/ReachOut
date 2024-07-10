import React, { useEffect, useState } from "react";
import FeedCard from "@components/molecules/FeedCard";
import Navbar from "@components/molecules/Navbar";
import { FeedDetails } from "types/feed";

export default function FeedPage() {

  const [posts, setPosts] = useState<FeedDetails[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:3333/api/posts');
        const data = await response.json();
        setPosts(data);
        console.log(data)
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="flex flex-col gap-1">
      <Navbar />
      <div className="w-[40vw] mx-auto flex flex-col gap-4">
        {posts.map((post, index) => (
          <FeedCard key={index} post={post} />
        ))}
      </div>
    </div>
  );
}
