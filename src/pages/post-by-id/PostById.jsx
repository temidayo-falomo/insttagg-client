import React, { useEffect } from "react";
import Leftbar from "../../components/leftbar/Leftbar";
import Navbar from "../../components/navbar/Navbar";
import Rightbar from "../../components/rightbar/Rightbar";
import SinglePost from "../../components/single-post/SinglePost";
import { StyledPostById } from "./PostById.styled";
import { ImCancelCircle } from "react-icons/im";
import { Link } from "react-router-dom";
import { AppContext } from "../../helper/Context";
import { useContext } from "react";
import Loading from "../loading/Loading";

function PostById() {
  const {
    userInfo,
    setUserInfo,
    bookmarks,
    setIsLoggedIn,
    loading,
  } = useContext(AppContext);

  useEffect(() => {
    setIsLoggedIn(true);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <StyledPostById>
      <Leftbar />
      <>
        {userInfo && bookmarks && (
          <div style={{ height: "100vh" }}>
            <Navbar />
            <div className="modal">
              <SinglePost />
              <Link className="cancel" to="/">
                <ImCancelCircle />
              </Link>
            </div>
          </div>
        )}
      </>
      <Rightbar />
    </StyledPostById>
  );
}

export default PostById;
