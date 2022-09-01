import React, { useContext } from "react";
import { AppContext } from "../../helper/Context";
import { StyledFriendCard } from "./FriendCard.styled";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function FriendCard(props) {
  const { userInfo, setUserInfo } = useContext(AppContext);
  let navigate = useNavigate();

  const handleAddFollower = () => {
    const data = {
      currentUserName: userInfo.firstName + " " + userInfo.lastName,
      currentUserAvatar: userInfo.avatar,
      userId: userInfo._id,
      userToAddToName: props.firstName + " " + props.lastName,
      userToAddToAvatar: props.avatar,
      userToAddToUserId: props._id,
    };
    axios
      .put("http://localhost:5600/api/follow", data)
      .catch((err) => console.error(err));
    setUserInfo({ ...userInfo, following: [...userInfo.following, data] });
  };

  const handleRemoveFollower = () => {
    const data = {
      userToBeUnFollowed: props._id,
      currentUser: userInfo._id,
    };
    axios
      .put("http://localhost:5600/api/unfollow", data)
      .catch((err) => console.error(err));
    let filtered = userInfo.following.filter(
      (val) => val.userToAddToUserId !== props._id
    );
    console.log(filtered);
    setUserInfo({ ...userInfo, following: [...filtered] });
  };

  const handleNavigateToFriend = (param) => {
    navigate(`/${param}`);
  };

  return (
    <StyledFriendCard>
      <div
        className="image"
        style={{ backgroundImage: `url(${props.avatar})` }}
      ></div>
      <h3
        onClick={() => handleNavigateToFriend(props.username)}
        className="orange-hov"
      >
        {props.firstName} {props.lastName}
      </h3>
      <span>{props.profession}</span>
      {userInfo._id !== props._id ? (
        <div>
          {userInfo.following.some((e) => e.userToAddToUserId === props._id) ? (
            <button className="following" onClick={handleRemoveFollower}>
              Following
            </button>
          ) : (
            <button onClick={handleAddFollower}>Follow</button>
          )}
        </div>
      ) : (
        <button onClick={() => handleNavigateToFriend(props.username)}>
          Profile
        </button>
      )}
    </StyledFriendCard>
  );
}

export default FriendCard;
