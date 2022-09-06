import React, { useContext, useEffect } from "react";
import FriendContent from "../../components/friend-content/FriendContent";
import Leftbar from "../../components/leftbar/Leftbar";
import Rightbar from "../../components/rightbar/Rightbar";
import { AppContext } from "../../helper/Context";
import { StyledUserById } from "./UserById.styled";

function UserById() {
  const { userInfo, setUserInfo, setIsLoggedIn } = useContext(AppContext);

  useEffect(() => {
    setIsLoggedIn(true);
  }, []);

  return (
    <StyledUserById>
      {userInfo && (
        <>
          <Leftbar />
          <FriendContent />
          <Rightbar />
        </>
      )}
    </StyledUserById>
  );
}

export default UserById;
