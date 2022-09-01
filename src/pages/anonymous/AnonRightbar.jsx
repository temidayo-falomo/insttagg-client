import React from "react";
import Stories from "../../components/stories/Stories";
import UserInfo from "../../components/user-info/UserInfo";
import { StyledAnonRightbar } from "./AnonRightbar.styled";
import AnonUserInfo from "./AnonUserInfo";

function AnonRightbar() {
  return (
    <StyledAnonRightbar>
      <AnonUserInfo />
      <Stories />
    </StyledAnonRightbar>
  );
}

export default AnonRightbar;
