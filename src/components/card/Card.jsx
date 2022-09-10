import React, { useContext, useState } from "react";
import { StyledCard } from "./Card.styled";
import { BsHeart, BsHeartFill, BsShareFill } from "react-icons/bs";
import { RiBookmarkFill } from "react-icons/ri";
import { BiComment } from "react-icons/bi";
import { MdOutlineMoreVert, MdViewInAr } from "react-icons/md";
import { AiFillDelete, AiOutlineEdit } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
import { FaRegBookmark } from "react-icons/fa";
import axios from "axios";
import { AppContext } from "../../helper/Context";
import { useEffect } from "react";

function Card(props) {
  const [clicked, setClicked] = useState(false);
  const [liked, setLiked] = useState(true);
  const { userInfo, bookmarks, setBookmarks, generalPosts, setGeneralPosts } =
    useContext(AppContext);
  const [options, setOptions] = useState(false);
  const [likesArray, setLikesArray] = useState(props.likes);

  //Variables Used
  let navigate = useNavigate();
  const location = useLocation();

  const handleNavigateToComment = (param) => {
    navigate(`/post/${param}`);
  };

  const handleNavigateToFriend = (param) => {
    navigate(`/${param}`);
  };

  const handleAddBookmark = () => {
    const bookmarkData = {
      avatar: props.avatar,
      location: props.location,
      username: props.username,
      image: props.image,
      postText: props.postText,
      userDetail: userInfo._id,
      postId: props._id,
      saved: true,
    };

    axios
      .post(
        "https://insta-clone-temidayo.herokuapp.com/api/bookmarks/add-bookmark",
        bookmarkData
      )
      .catch((err) => console.error(err));
    setClicked(true);

    setBookmarks([
      ...bookmarks,
      {
        avatar: props.avatar,
        location: props.location,
        username: props.username,
        image: props.image,
        postText: props.postText,
        userDetail: userInfo._id,
        postId: props._id,
        saved: true,
        likes: [0, 1],
        _id: props._id,
      },
    ]);
  };

  const handleAddlike = () => {
    setLiked(false);
    const likeData = {
      name: userInfo.firstName + " " + userInfo.lastName,
      avatar: userInfo.avatar,
      userId: userInfo._id,
      pId: props._id,
    };

    axios
      .put(
        "https://insta-clone-temidayo.herokuapp.com/api/posts/like",
        likeData
      )
      .catch((err) => console.error(err));

    setLikesArray([...likesArray, likeData]);
  };

  const handleRemoveLike = () => {
    const likeData = {
      userId: userInfo._id,
      postId: props._id,
    };
    axios
      .put(
        "https://insta-clone-temidayo.herokuapp.com/api/posts/unlike",
        likeData
      )
      .then((res) => console.log(res))
      .catch((err) => console.error(err));

    let filtered = likesArray.filter((item) => item.userId !== likeData.userId);
    setLikesArray(filtered);
  };

  const handleShowOptions = () => {
    setOptions(!options);
  };

  const handleDeletePost = () => {
    axios
      .delete(
        `https://insta-clone-temidayo.herokuapp.com/api/posts/delete/${props._id}`
      )
      .catch((err) => console.error(err));

    let filtered = generalPosts.filter((val) => val._id !== props._id);
    setGeneralPosts(filtered);
  };

  const handleRemoveBookmark = (param) => {
    axios
      .delete(
        `https://insta-clone-temidayo.herokuapp.com/api/bookmarks/remove-bookmark/${param}`
      )
      .catch((err) => console.error(err));

    let filtered = bookmarks.filter((item) => item._id !== props._id);
    setBookmarks(filtered);
  };

  const handleUpdatePost = () => {
    if (props.userDetail === userInfo._id && userInfo.avatar !== props.avatar) {
      const newImage = {
        avatar: userInfo.avatar,
      };

      axios
        .put(
          `https://insta-clone-temidayo.herokuapp.com/api/posts/edit-post/${props._id}`,
          newImage
        )
        .catch((err) => console.log(err));
    } else {
    }
  };

  useEffect(() => {
    handleUpdatePost();
  }, []);

  return (
    <StyledCard className="card">
      <div className="row btw card-top">
        <div className="row">
          <div
            className="user pointer"
            style={{ backgroundImage: `url(${props.avatar})` }}
            onClick={() => handleNavigateToFriend(props.userInfoName)}
          ></div>
          <div className="col">
            <div
              onClick={() => handleNavigateToFriend(props.userInfoName)}
              className="orange-hov"
              style={{ cursor: "pointer" }}
            >
              <h5>{props.username}</h5>
            </div>
            <span>{props.location}</span>
          </div>
        </div>
        {userInfo._id === props.userDetail && (
          <div
            className="div"
            onClick={handleShowOptions}
            style={{
              fontSize: "1.5rem",
              position: "relative",
              zIndex: "99",
              cursor: "pointer",
            }}
          >
            <MdOutlineMoreVert className="outline-more pointer" />
          </div>
        )}
      </div>
      <div className="image">
        <img src={props.image} alt="" />
      </div>
      <div className="card-bottom col">
        <div className="row btw">
          <ul className="row">
            {likesArray && (
              <li className="like-btn">
                {likesArray.some((e) => e.userId === userInfo._id) ? (
                  <BsHeartFill
                    onClick={handleRemoveLike}
                    className="pointer liked"
                  />
                ) : (
                  <BsHeart onClick={handleAddlike} className="pointer" />
                )}
              </li>
            )}
            <li>
              <div
                onClick={() =>
                  handleNavigateToComment(
                    location.pathname === "/bookmarks"
                      ? props.postId
                      : props._id
                  )
                }
              >
                <BiComment className="pointer" />
              </div>
            </li>
            <li>
              <BsShareFill className="pointer" />
            </li>
          </ul>

          <div className="div">
            {bookmarks.some((e) => e.postId === props._id || props.postId) ? (
              <RiBookmarkFill
                className="bookmark pointer bookmarked"
                onClick={() =>
                  handleRemoveBookmark(
                    location.pathname === "/bookmarks"
                      ? props.postId
                      : props._id
                  )
                }
              />
            ) : (
              <FaRegBookmark
                className="bookmark pointer"
                onClick={handleAddBookmark}
              />
            )}
          </div>
        </div>

        <div className="row btw card-bar">
          {likesArray && (
            <p>
              {likesArray.length === 0
                ? `No Likes Yet!`
                : `Liked by ${likesArray[0].name} and ${
                    likesArray.length - 1
                  } others`}
            </p>
          )}
          <p style={{ display: "flex", alignItems: "center" }}>
            {likesArray.slice(0, 3).map((data, index) => {
              return (
                <img
                  src={data.avatar}
                  alt={data.avatar}
                  key={index}
                  style={{
                    width: "18px",
                    height: "18px",
                    borderRadius: "50%",
                    marginLeft: "5px",
                    objectFit: "cover",
                  }}
                />
              );
            })}
          </p>
        </div>

        <p>"{props.postText}</p>
      </div>

      {options && (
        <div className="dropdown col">
          <p onClick={() => handleNavigateToComment(props._id)}>
            View
            <MdViewInAr />
          </p>
          <p onClick={handleDeletePost}>
            Delete
            <AiFillDelete />
          </p>
          <p>
            Edit
            <AiOutlineEdit />
          </p>
        </div>
      )}
    </StyledCard>
  );
}

export default Card;
