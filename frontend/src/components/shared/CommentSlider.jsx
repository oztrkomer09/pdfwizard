import comment1 from "../../assets/images/comment1.png";
import comment2 from "../../assets/images/comment2.png";
import CommentContent from "./CommentContent";
import React from "react";

const CommentSlider = () => {
  const comments = [
    {
      image: comment1,
      color: "#454E80",
      name: "Jack Banana",
      comment:
        '"If you want to reflect your own style but don’t want to spend much time, cvwizard is here for you. Thank you cvwizard :)"',
    },
  ];

  return (
    <div className="comment-slider">
      <CommentContent item={comments[0]} />
    </div>
  );
};

export default CommentSlider;
