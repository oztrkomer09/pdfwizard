import React from "react";

const CommentContent = ({ item }) => {
  return (
    <div className="comment-item">
      <div className="comment-texts">
        <p className="comment-info">{item.comment}</p>
        <p className="comment-name">{item.name}</p>
      </div>
      <img
        src={item.image}
        alt="profile"
        style={{ backgroundColor: `${item.color}` }}
        className="comment-photo"
      />
    </div>
  );
};

export default CommentContent;
