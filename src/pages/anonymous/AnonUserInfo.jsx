import React from "react";
import { StyledAnonUserInfo } from "./AnonUserInfo.styled";

function AnonUserInfo(props) {
  return (
    <StyledAnonUserInfo>
      <div className="user-info-top">
        <div
          className="avatar"
          style={{ backgroundImage: `url(${props.avatar})` }}
        ></div>
        <h3>Anonymous</h3>
        <span>User</span>
        <button>Edit Info</button>
      </div>

      <div className="user-info-mid row">
        <div className="col">
          <h4>0</h4>
          <span>Posts</span>
        </div>

        <div className="col">
          <h4>0</h4>
          <span>Followers</span>
        </div>

        <div className="col">
          <h4>0</h4>
          <span>Following</span>
        </div>
      </div>

      <div className="user-info-bottom col">
        <h4>Bio</h4>
        <p>I am a person that doesnt want to sign in yet.</p>
      </div>
    </StyledAnonUserInfo>
  );
}

export default AnonUserInfo;
