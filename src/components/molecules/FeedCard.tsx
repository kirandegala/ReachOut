import { Avatar } from "@chakra-ui/react";
import PrimaryButton from "@components/atoms/buttons/PrimaryButton";
import React, { useState } from "react";
import { FeedDetails } from "types/feed";
import UnlikeIcon from "../../../public/icons/unlikeIcon.svg";
import LikeIcon from "../../../public/icons/LikeIcon.svg"
import CommentIcon from "../../../public/icons/commentIcon.svg"
import CommentSection from "./CommentSection";
interface FeedCardProps {
  post: FeedDetails;
}

export default function FeedCard<FeedCardProps>({ post }) {
  let [isLiked, setIsLiked] = useState(false);
  let [isCommentSectionOpened, setIsCommentSectionOpened] = useState(false);
  return (
    <div className={`${isCommentSectionOpened?"h-fit":"h-96"}h-96 w-full bg-transparent border border-solid rounded flex flex-col gap-1 place-items-center p-2`}>
      <div className="h-[20%] w-full flex place-items-center gap-2">
        <Avatar
          className="p-1"
          size={"lg"}
          src={post.profileImage}
        />
        <div>
          <p>{post.profileName}</p>
          <p>{post.timePosted}</p>
        </div>
      </div>
      <div className="h-[70%] w-full content-center border ">{post.postContent}</div>
      <div className="h-[10%] w-full flex place-items-center">
        <PrimaryButton additionalStyles="w-[50%] h-[100%] hover:cursor-pointer hover:bg-blue-50" onClick={()=>{
          // post._id
          setIsLiked(!isLiked);
        }}>
          <div className="[&_svg]:h-[100%] [&_svg]:w-4 flex justify-center gap-1 items-center ">
            {isLiked?<LikeIcon />:<UnlikeIcon/>}
            <p>Like</p>
          </div>
        </PrimaryButton>
        <PrimaryButton additionalStyles="w-[50%] h-[100%] hover:cursor-pointer hover:bg-blue-100" onClick={()=>{
          setIsCommentSectionOpened(!isCommentSectionOpened)
        }}>
          <div className="[&_svg]:h-[100%] [&_svg]:w-4 flex justify-center gap-1 items-center">
            <CommentIcon/>
            <p>Comment</p>
          </div>
        </PrimaryButton>
      </div>
      {isCommentSectionOpened?
        <div className="duration-500 ease-in-out transition-all">
          <CommentSection/>
        </div>  :   <></>
        }
    </div>
  );
}
