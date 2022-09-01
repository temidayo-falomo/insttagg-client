import React, { useContext } from "react";
import Leftbar from "../../components/leftbar/Leftbar";
import Rightbar from "../../components/rightbar/Rightbar";
import { AppContext } from "../../helper/Context";
import { StyledLikes } from "./Likes.styled";

function Likes() {
  const { userInfo, setUserInfo } = useContext(AppContext);

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
