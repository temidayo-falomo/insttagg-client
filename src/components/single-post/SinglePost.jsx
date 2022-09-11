import React, { useContext, useEffect, useState } from "react";
import { BiComment } from "react-icons/bi";
import { BsHeart, BsHeartFill, BsShareFill } from "react-icons/bs";
import { StyledSinglePost } from "./SinglePost.styled";
import { FaRegBookmark } from "react-icons/fa";
import { MdOutlineMoreVert } from "react-icons/md";
import SingleComment from "../single-comment/SingleComment";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { AppContext } from "../../helper/Context";
import { RiBookmarkFill } from "react-icons/ri";
import Loading from "../../pages/loading/Loading";

function SinglePost() {
  const id = useParams().id;
  const [postInfo, setPostInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [likesArray, setLikesArray] = useState(postInfo.likes);
  const { userInfo, bookmarks, setBookmarks } = useContext(AppContext);

  const [commentText, setCommentText] = useState("");
  let navigate = useNavigate();

  let allComments = postInfo.comments;

  // const handleAddlike = () => {
  //   const likeData = {
  //     name: userInfo.firstName + userInfo.lastName,
  //     avatar: userInfo.avatar,
  //     userId: userInfo._id,
  //     pId: postInfo._id,
  //   };

  //   axios
  //     .put(
  //       "https://insta-clone-temidayo.herokuapp.com/api/posts/like",
  //       likeData
  //     )
  //     .catch((err) => console.error(err));
  //   postInfo.likes.push(likeData);

  //   setLikesArray([...likesArray, likeData]);
  // };

  // const handleRemoveLike = () => {
  //   const likeData = {
  //     userId: userInfo._id,
  //     postId: postInfo._id,
  //   };
  //   axios
  //     .put(
  //       "https://insta-clone-temidayo.herokuapp.com/api/posts/unlike",
  //       likeData
  //     )
  //     .catch((err) => console.error(err));

  //   let filtered = likesArray.filter((item) => item.userId !== likeData.userId);
  //   setLikesArray(filtered);
  // };

  const getPostInfo = () => {
    axios
      .get(`https://insta-clone-temidayo.herokuapp.com/api/posts/${id}`)
      .then((res) => {
        setPostInfo(res.data.post);
        setLikesArray(res.data.post.likes);
      })
      .then(() => setLoading(false))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getPostInfo();
  }, []);

  const handleAddComment = (e) => {
    e.preventDefault();

    const commentData = {
      name: userInfo.firstName + " " + userInfo.lastName,
      avatar: userInfo.avatar,
      userId: userInfo._id,
      commentText: commentText,
      pId: postInfo._id,
      userInfoName: userInfo.username,
    };

    axios
      .put(
        "https://insta-clone-temidayo.herokuapp.com/api/posts/comment",
        commentData
      )
      .catch((err) => console.error(err));

    setCommentText("");

    allComments.push(commentData);
  };

  const handleAddBookmark = () => {
    const bookmarkData = {
      avatar: postInfo.avatar,
      location: postInfo.location,
      username: postInfo.username,
      image: postInfo.image,
      postText: postInfo.postText,
      userDetail: userInfo._id,
      postId: postInfo._id,
      saved: true,
      _id: postInfo._id,
    };

    axios
      .post(
        "https://insta-clone-temidayo.herokuapp.com/api/bookmarks/add-bookmark",
        bookmarkData
      )
      .catch((err) => console.error(err));

    // bookmarks.push(bookmarkData);
    setBookmarks([
      ...bookmarks,
      {
        avatar: postInfo.avatar,
        location: postInfo.location,
        username: postInfo.username,
        image: postInfo.image,
        postText: postInfo.postText,
        userDetail: userInfo._id,
        postId: postInfo._id,
        saved: true,
        likes: [0, 1],
        _id: postInfo._id,
      },
    ]);
  };

  const handleRemoveBookmark = () => {
    axios
      .delete(
        `https://insta-clone-temidayo.herokuapp.com/api/bookmarks/remove-bookmark/${postInfo._id}`
      )
      .catch((err) => console.error(err));

    let filtered = bookmarks.filter((item) => item._id !== postInfo._id);
    setBookmarks(filtered);
  };

  const handleNavigateToFriend = (param) => {
    navigate(`/${param}`);
  };

  if (loading && likesArray === undefined) {
    return <Loading />;
  }

  return (
    <StyledSinglePost>
      <div className="post-left">
        <div
          className="image"
          style={{
            backgroundImage: `url(${postInfo.image})`,
          }}
        ></div>
      </div>

      <div className="post-right">
        <div className="top row btw center">
          <div className="row center">
            <div
              className="avt"
              style={{ backgroundImage: `url(${postInfo.avatar})` }}
            ></div>
            <h5 onClick={() => handleNavigateToFriend(postInfo.userInfoName)}>
              {postInfo.username}
            </h5>
          </div>

          <div className="options">
            <MdOutlineMoreVert />
          </div>
        </div>

        <div className="users-comments">
          <div className="margin-btm">
            <p>"{postInfo.postText}</p>
          </div>

          <div className="col gap-1">
            {allComments &&
              allComments
                .slice(0)
                .reverse()
                .map((data, index) => {
                  return <SingleComment key={index} {...data} />;
                })}
          </div>
        </div>

        <div className="comment-input">
          <div
            className="row btw"
            style={{ fontSize: "1.5rem", gap: "1.5rem" }}
          >
            <div className="row" style={{ gap: "1.5rem" }}>
              {/* {likesArray && (
                <p>
                  {likesArray.some((e) => e.userId === userInfo._id) ? (
                    <BsHeartFill
                      onClick={handleRemoveLike}
                      className="pointer"
                    />
                  ) : (
                    <BsHeart onClick={handleAddlike} className="pointer" />
                  )}
                </p>
              )} */}
              <p>
                <BiComment />
              </p>
              <p>
                <BsShareFill className="pointer" />
              </p>
            </div>
            {bookmarks && (
              <p>
                {bookmarks.some((e) => e.postId === postInfo._id) && (
                  <RiBookmarkFill
                    className="bookmark pointer bookmarked"
                    onClick={handleRemoveBookmark}
                  />
                )}
                {!bookmarks.some((e) => e.postId === postInfo._id) && (
                  <FaRegBookmark
                    className="bookmark pointer"
                    onClick={handleAddBookmark}
                  />
                )}
              </p>
            )}
          </div>

          <div className="col">
            {likesArray && (
              <p>
                {likesArray.length === 0
                  ? `No Likes Yet!`
                  : `Liked by ${likesArray[0].name} and ${
                      likesArray.length - 1
                    } others`}
              </p>
            )}
            <span>6 hours ago</span>
          </div>
          <form
            className="row center"
            style={{ borderTop: "1px gainsboro solid" }}
            onSubmit={(e) => handleAddComment(e)}
          >
            <textarea
              cols="30"
              rows="10"
              placeholder="Add a comment..."
              required
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            ></textarea>
            <button>Comment</button>
          </form>
        </div>
      </div>
    </StyledSinglePost>
  );
}

export default SinglePost;
