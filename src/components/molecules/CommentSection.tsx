import { useState } from "react";
import axios from "axios";
import { Avatar } from "@chakra-ui/react";
import PrimaryButton from "@components/atoms/buttons/PrimaryButton";
import { useUser } from '@components/UserProvider';

interface CommentData {
  name: string; 
  commentText: string; 
  email: string; 
  timeCommented: Date; 
  image: string | undefined;
}

interface CommentSectionProps {
  comments: CommentData[];
  postId: string;  // Add postId prop to identify the post
}

export default function CommentSection({ comments, postId }: CommentSectionProps) {

  const { userDetails } = useUser();

  const readerEmail = userDetails.email;
  const authorEmail = userDetails.email;

  const [commentText, setCommentText] = useState<string>("");

  const handleSendComment = async () => {
    try {
      const response = await axios.post(`http://localhost:3333/api/posts/${postId}/comment`, {
        commentText: commentText,
        email: userDetails.email,
      });
      if (response.status === 200) {
        setCommentText("");
      }
    } catch (error) {
      console.error("Error sending comment:", error);
    }
  };

  return (
    <div className="grid gap-3 w-full">
      <div className="bg-grey-300 w-full flex gap-4 p-4 [&_svg]:h-5 rounded-md overflow-hidden items-center">
        <Avatar
          className="p-1"
          size={"sm"}
          src={userDetails.picture}
        />
        <input
          type="text"
          placeholder="Add comment"
          className="bg-transparent w-full outline-none"
          value={commentText}
          onInput={(e) => setCommentText(e.currentTarget.value)}
        />
        
        <PrimaryButton
          additionalStyles={"border rounded-xl p-2 h-fit"}
          onClick={handleSendComment}
        >
          Send
        </PrimaryButton>
      </div>

      <div className="grid gap-2 overflow-auto">
        {comments.map(
          ({ name, commentText, email, timeCommented, image }, index) => {
            const isAuthor = authorEmail === email;
            const isReader = readerEmail === email;

            return (
              <div
                key={index}
                className={`flex flex-col max-w-[75%] border ${
                  isReader && "justify-self-end"
                }`}
              >
                <div className="flex gap-2 items-center">
                  {!isReader && (
                    <>
                      <img src={image} alt="" className="h-12 aspect-square rounded-full" />
                      <p className="font-bold">{name}</p>
                      <p className="text-grey-600 text-xs font-semibold">
                        {new Date(timeCommented).toLocaleString()}
                      </p>
                      {isAuthor && (
                        <p className="bg-white px-1.5 py-1 rounded-md text-xs font-bold">
                          Author
                        </p>
                      )}
                    </>
                  )}
                </div>
                <div className="bg-grey-300 p-3 rounded-md text-sm font-medium">
                  {commentText}
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}
