import comment1 from "../../assets/images/comment1.png";
import comment2 from "../../assets/images/comment2.png";
import CommentContent from "./CommentContent";
import { useState, useEffect, React } from "react";

const CommentSlider = () => {
  const comments = [
    {
      image: comment1,
      color: "#454E80",
      name: "Jack Banana",
      comment:
        "If you want to reflect your own style but don’t want to spend much time, cvwizard is here for you. Thank you cvwizard :)",
    },
    {
      image: comment2,
      color: "#454E80",
      name: "Jack Banana",
      comment:
        "If you want to reflect your own style but don’t want to spend much time, cvwizard is here for you. Thank you cvwizard :)",
    },
  ];

  const [comment, setComment] = useState(comments[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (comment === comments[0]) {
        setComment(comments[1]);
      } else {
        setComment(comments[0]);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [comment]);

  return (
    <div className="comment-slider">
      <CommentContent item={comment} />
    </div>
  );
};

export default CommentSlider;
