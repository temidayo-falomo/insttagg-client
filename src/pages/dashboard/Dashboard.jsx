import React, { useContext, useEffect, useState } from "react";
import Leftbar from "../../components/leftbar/Leftbar";
import MainContent from "../../components/main-content/MainContent";
import Rightbar from "../../components/rightbar/Rightbar";
import { AppContext } from "../../helper/Context";
import { StyledDashboard } from "./Dashboard.styled";
import ToggleRightbar from "../../components/toggle-right-bar-btn/ToggleRightbar";
import Loading from "../loading/Loading";
import axios from "axios";

function Dashboard() {
  const { userInfo, bookmarks, setIsLoggedIn } = useContext(AppContext);

  useEffect(() => {
    setIsLoggedIn(true);
  }, []);

  return (
    <StyledDashboard>
      {userInfo && (
        <>
          <Leftbar />
          <MainContent bookmarks={bookmarks} />
          <Rightbar />
        </>
      )}
      <ToggleRightbar />
    </StyledDashboard>
  );
}

export default Dashboard;
