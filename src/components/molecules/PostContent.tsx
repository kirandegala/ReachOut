import React, { useState } from 'react';

interface PostContentProps {
  onPostSubmit: (post: string) => void;
}

const PostContent: React.FC<PostContentProps> = ({ onPostSubmit }) => {
  const [postText, setPostText] = useState('');

  const handlePostSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (postText.trim() !== '') {
      onPostSubmit(postText);
      setPostText('');
    }
  };

  return (
    <form onSubmit={handlePostSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        value={postText}
        onChange={(e) => setPostText(e.target.value)}
        placeholder="What's on your mind?"
        className="w-full p-2 pl-4 text-lg rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
      >
        Post
      </button>
    </form>
  );
};

export default PostContent;