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
  const [userPosts, setUserPosts] = useState();

  const id = useParams().id;

  const getFriend = async () => {
    await axios
      .get(`https://insta-clone-temidayo.herokuapp.com/api/user/${id}`)
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
      .put("https://insta-clone-temidayo.herokuapp.com/api/follow", data)
      .catch((err) => console.error(err));
    setUserInfo({ ...userInfo, following: [...userInfo.following, data] });
  };

  const handleRemoveFollower = () => {
    const data = {
      userToBeUnFollowed: friendObject._id,
      currentUser: userInfo._id,
    };
    axios
      .put("https://insta-clone-temidayo.herokuapp.com/api/unfollow", data)
      .catch((err) => console.error(err));
    let filtered = userInfo.following.filter(
      (val) => val.userToAddToUserId !== friendObject._id
    );
    console.log(filtered);
    setUserInfo({ ...userInfo, following: [...filtered] });
  };

  const handleGetUserPosts = () => {
    axios
      .get(`http://localhost:5600/api/posts/user-posts/${id}`)
      .then((res) => setUserPosts(res.data.posts))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getFriend();
    handleGetUserPosts();
  }, []);

  if (!friendObject) {
    return <Loading />;
  }

  console.log(userPosts);

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
          {userPosts && (
            <div className="cards">
              {userPosts.map((data) => {
                return <Card key={data._id} {...data} />;
              })}
               {userPosts.length === 0 && <h3>Nothing To See Here...</h3>}
            </div>
          )}
         
        </>
      )}
    </StyledFriendContent>
  );
}

export default FriendContent;
