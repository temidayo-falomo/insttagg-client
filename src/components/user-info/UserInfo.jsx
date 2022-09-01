import React, { useContext } from "react";
import { AppContext } from "../../helper/Context";
import { StyledUserInfo } from "./UserInfo.styled";
import Loading from "../../pages/loading/Loading";

function UserInfo(props) {
  const { userInfo, setUserInfo } = useContext(AppContext);

  if (!userInfo) {
    return <Loading />;
  }
  return (
    <StyledUserInfo>
      <div className="user-info-top">
        <div
          className="avatar"
          style={{ backgroundImage: `url(${userInfo.avatar})` }}
        ></div>
        <h3>
          {userInfo.firstName} {userInfo.lastName}
        </h3>
        <span>{userInfo.profession}</span>
        <button onClick={props.handleShowEdit}>Edit Info</button>
      </div>

      <div className="user-info-mid row">
        <div className="col">
          <h4>{userInfo.posts.length}</h4>
          <span>Posts</span>
        </div>

        <div className="col">
          <h4>{userInfo.followers.length}</h4>
          <span>Followers</span>
        </div>

        <div className="col">
          <h4>{userInfo.following.length}</h4>
          <span>Following</span>
        </div>
      </div>

      <div className="user-info-bottom col">
        <h4>Bio</h4>
        <p>{userInfo.bio}.</p>
      </div>
    </StyledUserInfo>
  );
}

export default UserInfo;
