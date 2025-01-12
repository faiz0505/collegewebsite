import React from "react";
import CommentForm from "./CommentForm";

const CommentFormModal = ({ isCommentFormOpen, setIsCommentFormOpen }) => {
  return (
    <div
      className={` h-screen w-full -top-5 right-0 flex justify-center items-center  transition-all duration-300 ease-linear backdrop-blur ${
        isCommentFormOpen ? "fixed" : "hidden"
      }`}
      onClick={(e) => {
        setIsCommentFormOpen(false);
      }}
    >
      <CommentForm />
    </div>
  );
};

export default CommentFormModal;
