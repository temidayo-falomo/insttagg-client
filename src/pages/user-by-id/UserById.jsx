import React, { useContext, useEffect } from "react";
import FriendContent from "../../components/friend-content/FriendContent";
import Leftbar from "../../components/leftbar/Leftbar";
import Rightbar from "../../components/rightbar/Rightbar";
import ToggleRightbar from "../../components/toggle-right-bar-btn/ToggleRightbar";
import { AppContext } from "../../helper/Context";
import { StyledUserById } from "./UserById.styled";

function UserById() {
  const { userInfo, setUserInfo, setIsLoggedIn } = useContext(AppContext);

  useEffect(() => {
    setIsLoggedIn(true);
  }, []);

  // I am trying to create a fill-in information of the month
  // If otherwise, it logs Error

  let month = prompt("Enter the month: ");
  switch (month) {
    case "january":
    case "February":
    case "March":
    case "April":
    case "May":
    case "June":
    case "July":
    case "August":
    case "September":
    case "October":
    case "November":
    case "December":
      console.log("month");
      break;

    default:
      console.log("error");
  }

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
