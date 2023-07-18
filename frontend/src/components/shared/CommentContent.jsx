import React from "react";

const CommentContent = ({ item }) => {
  return (
    <div className="comment-item">
      <img
        src={item.image}
        alt="profile"
        style={{ backgroundColor: `${item.color}` }}
        className="comment-photo"
      />
      <div className="comment-texts">
        <p className="comment-name">{item.name}</p>
        <p className="comment-info">{item.comment}</p>
      </div>
    </div>
  );
};

export default CommentContent;
