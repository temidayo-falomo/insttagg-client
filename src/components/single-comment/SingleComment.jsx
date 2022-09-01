import React from "react";
import { StyledSingleComment } from "./SingleComment.styled";

function SingleComment(props) {
  return (
    <StyledSingleComment>
      <div
        className="avt"
        style={{
          backgroundImage: `url(${props.avatar})`,
        }}
      ></div>
      <div className="col">
        <h5>{props.name}</h5>
        <p>{props.commentText}</p>
      </div>
    </StyledSingleComment>
  );
}

export default SingleComment;
