import React from "react";
import { StyledMessageCard } from "./MessageCard.styled";
import { BsCircleFill } from "react-icons/bs";

function MessageCard(props) {
  return (
    <StyledMessageCard>
      <div className="row">
        <div
          className="avatar"
          style={{ backgroundImage: `url(${props.avatar})` }}
        ></div>
        <div className="col">
          <h3>{props.name}</h3>
          <p>Check for new Messages</p>
        </div>
      </div>
      <span>
        <BsCircleFill />
      </span>
    </StyledMessageCard>
  );
}

export default MessageCard;
