import React from "react";
import { useNavigate } from "react-router-dom";
import { StyledSingleComment } from "./SingleComment.styled";

function SingleComment(props) {
  let navigate = useNavigate();

  const handleNavigateToFriend = (param) => {
    if (param) {
      navigate(`/${param}`);
    }
  };
  return (
    <StyledSingleComment>
      <div
        className="avt"
        style={{
          backgroundImage: `url(${props.avatar})`,
        }}
      ></div>
      <div className="col">
        <h5
          onClick={() => handleNavigateToFriend(props.userInfoName)}
          className="pointer"
        >
          {props.name}
        </h5>
        <p>{props.commentText}</p>
      </div>
    </StyledSingleComment>
  );
}

export default SingleComment;
