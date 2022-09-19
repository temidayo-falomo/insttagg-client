import React from "react";
import { useNavigate } from "react-router-dom";
import Stories from "../../components/stories/Stories";
import UserInfo from "../../components/user-info/UserInfo";
import { StyledAnonRightbar } from "./AnonRightbar.styled";
import AnonUserInfo from "./AnonUserInfo";

function AnonRightbar() {
  let navigate = useNavigate();

  return (
    <StyledAnonRightbar >
      <AnonUserInfo />
      <Stories />
    </StyledAnonRightbar>
  );
}

export default AnonRightbar;
