import React, { useContext, useEffect, useState } from "react";
import Card from "../card/Card";
import { StyledFriendContent } from "./FriendContent.styled";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AppContext } from "../../helper/Context";
import Loading from "../../pages/loading/Loading";

function FriendContent() {
  const [friendObject, setFriendObject] = useState();
  const [postObject, setPostObject] = useState();
  const { userInfo, setUserInfo } = useContext(AppContext);

  const id = useParams().id;

  const getFriend = async () => {
    await axios
      .get(`http://localhost:5600/api/user/${id}`)
      .then((res) => setFriendObject(res.data.user))
      .catch((err) => console.error(err));
  };

  const handleAddFollower = () => {
    const data = {
      currentUserName: userInfo.firstName + " " + userInfo.lastName,
      currentUserAvatar: userInfo.avatar,
      userId: userInfo._id,
      userToAddToName: friendObject.firstName + " " + friendObject.lastName,
      userToAddToAvatar: friendObject.avatar,
      userToAddToUserId: friendObject._id,
    };
    axios
      .put("http://localhost:5600/api/follow", data)
      .catch((err) => console.error(err));
    setUserInfo({ ...userInfo, following: [...userInfo.following, data] });
  };

  const handleRemoveFollower = () => {
    const data = {
      userToBeUnFollowed: friendObject._id,
      currentUser: userInfo._id,
    };
    axios
      .put("http://localhost:5600/api/unfollow", data)
      .catch((err) => console.error(err));
    let filtered = userInfo.following.filter(
      (val) => val.userToAddToUserId !== friendObject._id
    );
    console.log(filtered);
    setUserInfo({ ...userInfo, following: [...filtered] });
  };

  useEffect(() => {
    getFriend();
  }, []);

  if (!friendObject) {
    return <Loading />;
  }

  return (
    <StyledFriendContent>
      {friendObject && (
        <>
          <div className="top-shadow">
            <div
              className="profile-picture"
              style={{ backgroundImage: `url(${friendObject.avatar})` }}
            ></div>
          </div>

          <div className="friend-info col">
            <h1>
              {friendObject.firstName} {friendObject.lastName}
            </h1>
            <span>{friendObject.profession}</span>
            <p>{friendObject.bio}</p>
            <h4>{friendObject.posts.length} Posts</h4>
            {userInfo.username === id ? (
              ""
            ) : (
              <div>
                {userInfo.following.some(
                  (e) => e.userToAddToUserId === friendObject._id
                ) ? (
                  <button onClick={handleRemoveFollower}>Following</button>
                ) : (
                  <button onClick={handleAddFollower}>Follow</button>
                )}
              </div>
            )}
          </div>
          {friendObject.posts && (
            <div className="cards">
              {postObject && (
                <>
                  <Card
                    image={postObject.avatar}
                    avatar={postObject.avatar}
                    postText={postObject.postText}
                  />
                </>
              )}
            </div>
          )}
        </>
      )}
    </StyledFriendContent>
  );
}

export default FriendContent;
