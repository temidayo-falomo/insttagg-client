import React, { useContext, useEffect } from "react";
import FriendContent from "../../components/friend-content/FriendContent";
import Leftbar from "../../components/leftbar/Leftbar";
import Rightbar from "../../components/rightbar/Rightbar";
import ToggleRightbar from "../../components/toggle-right-bar-btn/ToggleRightbar";
import { AppContext } from "../../helper/Context";
import { StyledUserById } from "./UserById.styled";

function UserById() {
  const { userInfo, setIsLoggedIn } = useContext(AppContext);

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
      <ToggleRightbar />
    </StyledUserById>
  );
}

export default UserById;
