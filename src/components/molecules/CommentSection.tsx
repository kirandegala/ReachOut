import { useState } from "react";
import EmojiIcon from "../../../public/icons/emoji.svg";
import { Avatar } from "@chakra-ui/react";
import PrimaryButton from "@components/atoms/buttons/PrimaryButton";
interface CommentData {
  userId: string;
  username: string;
  text: string;
  timeOfCreation: string;
  avatarUrl: string;
}

export default function CommentSection() {
  const readerUserId = "2";
  const authorUserId = "2";
  const [commentData, setCommentData] = useState<CommentData[]>([
    {
      username: "Kiran",
      userId: "1",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit consectetur cumque autem est ut neque fugit ducimus porro, animi culpa dolor temporibus enim reiciendis odio aliquid vel exercitationem illo sunt quas molestiae nemo quae delectus. At quo consequuntur, itaque laboriosam error ut hic nulla harum reiciendis quae doloribus, qui animi!",
      timeOfCreation: "10:20AM",
      avatarUrl: `https://picsum.photos/id/${Math.round(
        Math.random() * 500
      )}/200`,
    },
    {
      username: "Vineeth",
      userId: "2",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit consectetur cumque autem est ut neque fugit ducimus porro, animi culpa dolor temporibus enim reiciendis odio aliquid vel exercitationem illo sunt quas molestiae nemo quae delectus. At quo consequuntur, itaque laboriosam error ut hic nulla harum reiciendis quae doloribus, qui animi!",
      timeOfCreation: "1:10AM",
      avatarUrl: `https://picsum.photos/id/${Math.round(
        Math.random() * 500
      )}/200`,
    },
    {
      username: "Varshith",
      userId: "3",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit consectetur cumque autem est ut neque fugit ducimus porro, animi culpa dolor temporibus enim reiciendis odio aliquid vel exercitationem illo sunt quas molestiae nemo quae delectus. At quo consequuntur, itaque laboriosam error ut hic nulla harum reiciendis quae doloribus, qui animi!",
      timeOfCreation: "4:40PM",
      avatarUrl: `https://picsum.photos/id/${Math.round(
        Math.random() * 500
      )}/200`,
    },
    {
      username: "Manish",
      userId: "4",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit consectetur cumque autem est ut neque fugit ducimus porro, animi culpa dolor temporibus enim reiciendis odio aliquid vel exercitationem illo sunt quas molestiae nemo quae delectus. At quo consequuntur, itaque laboriosam error ut hic nulla harum reiciendis quae doloribus, qui animi!",
      timeOfCreation: "3:30PM",
      avatarUrl: `https://picsum.photos/id/${Math.round(
        Math.random() * 500
      )}/200`,
    },
  ]);
  const [commentText, setCommentText] = useState<string>("");
  console.log(new Date().toISOString());

  return (
    <div className="grid gap-2">
      <div className="bg-grey-300 flex gap-4 p-4 [&_svg]:h-5 rounded-md overflow-hidden items-center">
        <Avatar
          className="p-1"
          size={"lg"}
          src={
            "https://picsum.photos/id/${Math.round(Math.random() * 500)}/200"
          } // replace this with actual profile pic i.e post.profileImage
        />
        <input
          type="text"
          placeholder="Add comment"
          className="bg-transparent w-full outline-none"
          value={commentText}
          onInput={(e) => setCommentText(e.currentTarget.value)}
        />
        <button>
          <EmojiIcon />
        </button>
        <PrimaryButton
          additionalStyles={"border rounded-xl p-2 h-fit"}
          onClick={() => {
            console.log(""); // write code to send comment to backend
          }}
        >
          send
        </PrimaryButton>
      </div>
      <div className="grid gap-2 overflow-auto">
        {commentData.map(
          ({ userId, username, text, avatarUrl, timeOfCreation }) => {
            const isAuthor = authorUserId === userId;
            const isReader = readerUserId === userId;
            const [isReplySectionOpened, setIsReplySectionOpened] =
              useState(false);
            return (
              <div
                key={userId}
                className={`flex flex-col max-w-[75%] border ${
                  isReader && "justify-self-end"
                }`}
              >
                <div className="flex gap-2 items-center">
                  {!isReader && (
                    <>
                      <img
                        src={avatarUrl}
                        alt={`${username} avatar`}
                        className="h-12 aspect-square rounded-full"
                      />
                      <p className="font-bold">{username}</p>
                      <p className="text-grey-600 text-xs font-semibold">
                        {timeOfCreation}
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
                  {text}
                </div>
                {!isReader && (
                  <PrimaryButton
                    additionalStyles={
                      "justify-self-start ml-[2%] p-2 border rounded-xl w-fit"
                    }
                    onClick={() => {
                      setIsReplySectionOpened(!isReplySectionOpened);
                    }}
                  >
                    reply
                  </PrimaryButton>
                )}
                {isReplySectionOpened && (
                  <div className="bg-grey-300 flex gap-4 p-4 [&_svg]:h-5 rounded-md overflow-hidden place-items-center">
                    <Avatar
                      className="p-1"
                      size={"lg"}
                      src={
                        "https://picsum.photos/id/${Math.round(Math.random() * 500)}/200"
                      } // replace this with actual profile pic i.e post.profileImage
                    />
                    <input
                      type="text"
                      placeholder="Add comment"
                      className="bg-transparent w-full outline-none"
                      value={commentText}
                      onInput={(e) => setCommentText(e.currentTarget.value)}
                    />
                    <button>
                      <EmojiIcon />
                    </button>
                    <PrimaryButton
                      additionalStyles={"border rounded-xl p-2 h-fit"}
                      onClick={() => {
                        console.log(""); // write code to send reply to backend
                      }}
                    >
                      reply
                    </PrimaryButton>
                  </div>
                )}
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}
