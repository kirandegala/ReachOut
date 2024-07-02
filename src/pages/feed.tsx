import FeedCard from "@components/molecules/FeedCard";
import Navbar from "@components/molecules/Navbar";
import React from "react";
import { FeedDetails } from "types/feed";

export default function FeedPage() {
  const post1: FeedDetails = {
    profileImage: "",
    profileName: "Vineeth",
    postContent: "Vineeth",
    likeCount: 2,
    commentCount: 1,
    timePosted: 1000000,
    comments: [
      { name: "vineeth", commentText: "comment", timeCommented: 100000 },
    ],
  };
  const posts: FeedDetails[] = [post1, post1];
  return (
    <div className="flex flex-col gap-1">
      <Navbar />
      <div className="w-[40vw] mx-auto flex flex-col gap-4">
        {posts.map((post, index) => (
          <FeedCard post={post} />
        ))}
      </div>
    </div>
  );
}
