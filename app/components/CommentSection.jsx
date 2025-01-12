"use client";
import React, { useState } from "react";
import CommentFormModal from "./ui/CommentFormModal";

const CommentsSection = ({ comments }) => {
  const [isCommentFormOpen, setIsCommentFormOpen] = useState(false);

  return (
    <div className="max-w-4xl mx-auto py-6">
      {/* Comments List */}
      <div className="space-y-6 relative">
        {comments.map((comment, index) => (
          <div key={index}>
            <div className="flex items-start space-x-4 p-4 relative">
              {/* Avatar */}
              <figure className="border border-secondary h-20 w-20 rounded-full"></figure>

              {/* Comment Details */}
              <div className="flex-1">
                {/* Name and Date */}
                <div className="">
                  <h4 className="font-semibold">{comment.name}</h4>
                  <p className="text-gray-500 text-sm">{comment.date}</p>
                </div>

                {/* Comment Content */}
                <p className="mt-2 text-gray-600">{comment.text}</p>
              </div>

              {/* Reply Button */}
              <button
                onClick={() => setIsCommentFormOpen((pre) => !pre)}
                className="text-blue-600 font-medium hover:underline"
              >
                Reply
              </button>
            </div>
            <div className="ml-20 space-y-6 mt-4">
              {comment.replies.length > 0 &&
                comment.replies.map((reply, i) => {
                  return (
                    <div
                      key={i + 99}
                      className="flex items-start space-x-4 p-4  "
                    >
                      {/* Avatar */}
                      <figure className="border border-secondary h-20 w-20 rounded-full"></figure>

                      {/* Comment Details */}
                      <div className="flex-1">
                        {/* Name and Date */}
                        <div className="">
                          <h4 className="font-semibold">{reply.name}</h4>
                          <p className="text-gray-500 text-sm">{reply.date}</p>
                        </div>

                        {/* Comment Content */}
                        <p className="mt-2 text-gray-600">{reply.text}</p>
                      </div>

                      {/* Reply Button */}
                    </div>
                  );
                })}
            </div>
          </div>
        ))}
        <CommentFormModal
          isCommentFormOpen={isCommentFormOpen}
          setIsCommentFormOpen={setIsCommentFormOpen}
        />
      </div>
    </div>
  );
};

export default CommentsSection;
