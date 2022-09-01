import React from "react";
import { StyledJoinRoom } from "./JoinRoom.styled";

function JoinRoom() {
  return (
    <StyledJoinRoom>
      <h2>Join A Room</h2>
      <input type="text" className="Room Id" required />
      <button className="button-86">Join A Chat</button>
    </StyledJoinRoom>
  );
}

export default JoinRoom;
