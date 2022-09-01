import React, { useContext, useState } from "react";
import { AppContext } from "../../helper/Context";
import EditInfo from "../edit-user-info/EditInfo";
import Stories from "../stories/Stories";
import UserInfo from "../user-info/UserInfo";
import { StyledRightbar } from "./Rightbar.styled";

function Rightbar() {
  const [showEdit, setShowEdit] = useState(false);
  const { userInfo, setUserInfo } = useContext(AppContext);

  const handleShowEdit = () => {
    setShowEdit(!showEdit);
  };

  return (
    <>
      {userInfo && (
        <StyledRightbar>
          {showEdit ? (
            <EditInfo showEdit={showEdit} setShowEdit={setShowEdit} />
          ) : (
            <UserInfo handleShowEdit={handleShowEdit} />
          )}
          <Stories />
        </StyledRightbar>
      )}
    </>
  );
}

export default Rightbar;
