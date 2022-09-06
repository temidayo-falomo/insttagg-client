import React, { useContext, useEffect } from "react";
import Leftbar from "../../components/leftbar/Leftbar";
import Rightbar from "../../components/rightbar/Rightbar";
import { AppContext } from "../../helper/Context";
import Loading from "../loading/Loading";
import { StyledLikes } from "./Likes.styled";

function Likes() {
  const { userInfo, setUserInfo, setIsLoggedIn, loading } = useContext(AppContext);

  useEffect(() => {
    setIsLoggedIn(true);
  }, []);

  if (loading) {
    return <Loading />;
  }


  return (
    <>
      {userInfo && (
        <StyledLikes>
          <Leftbar />
          <h2>Likes</h2>
          <Rightbar />
        </StyledLikes>
      )}
    </>
  );
}

export default Likes;
