import { memo } from "react";
import { Avatar, Card } from "antd";
import { InputOTPSeparator } from "@/components/ui/input-otp";
import Comment from "./comment";
import { STATIC_CONTENT } from "@/constants";
import { IComment } from "@/types/comments";

interface CommentProps {
  comments: IComment[];
}
const Feeds = memo(({ comments }: CommentProps) => (
  <div className="space-y-6">
    <div className="bg-white p-4 rounded-lg shadow-md">
      {" "}
      <div className="flex items-center gap-4 mb-4">
        <Avatar size={40} src="https://github.com/shadcn.png" />
        <div>
          <div className="text-base font-semibold">
            {STATIC_CONTENT.INDEX.COMMENT_AUTHOR}
          </div>
          <div className="text-sm text-gray-500 flex items-center gap-2">
            <span>published Flashcard</span>
            <InputOTPSeparator />
            <span>6 days ago</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-8">
          {" "}
          {/* Adjusted to take more width */}
          <h1 className="text-lg font-bold">
            {STATIC_CONTENT.INDEX.FLASHCARD_TITLE}
          </h1>
          <p className="text-gray-600 my-2">
            {STATIC_CONTENT.INDEX.COMMENT_TEXT}
          </p>
        </div>

        <div className="col-span-12 md:col-span-4 flex justify-end">
          {" "}
          {/* Flashcard width adjusted */}
          <Card className="rounded-lg w-full md:w-[280px] text-center border border-gray-300">
            {" "}
            {/* Set a fixed width */}
            <p className="p-4">{STATIC_CONTENT.INDEX.FLASHCARD_DESCRIPTION}</p>
            <div className="flex justify-center items-center bg-purple-600 text-white rounded-b-lg py-2">
              <img
                src="/icons/flashCards.svg"
                alt="Flashcards"
                className="h-5 mr-2"
              />
              <span>{STATIC_CONTENT.INDEX.FLASHCARD_COUNT_TEXT}</span>
            </div>
          </Card>
        </div>
      </div>
      <div className="flex items-center justify-between mt-4 border-t pt-4">
        <div className="flex gap-4">
          {["🔥 4", "🎉 2", "🤘🏻 1"].map((reaction, index) => (
            <div
              key={index}
              className="bg-gray-100 p-2 rounded-full text-sm flex items-center"
            >
              {reaction}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <p className="text-sm font-medium text-gray-600">
            {STATIC_CONTENT.INDEX.COMMENT_COUNT_TEXT}
          </p>
          <div className="flex -space-x-2">
            <Avatar size={30} src="https://github.com/shadcn.png" />
            <Avatar size={30} src="https://github.com/shadcn.png" />
          </div>
        </div>
      </div>
    </div>
    {comments.map((comment) => (
      <Comment comment={comment} key={comment.id} />
    ))}
  </div>
));

Feeds.displayName = "Feeds";

export default Feeds;
